// MVVM.js 文件
class MVVM {
    constructor(options) {
        // 先把 el 和 data 挂在 MVVM 实例上
        this.$el = options.el;
        this.$data = options.data;

        // 如果有要编译的模板就开始编译
        if (this.el) {
            // 数据劫持，就是把对象所有的属性添加 get 和 set
            new Observer(this.$data);

            // 将数据代理到实例上
            this.proxyData(this.$data);

            // 用数据和元素进行编译
            new Compile(this.el, this);
        }
    }
    proxyData(data) { // 代理数据的方法
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                get() {
                    return data[key];
                },
                set(newVal) {
                    data[key] = newVal;
                }
            });
        });
    }
}

// Compile.js 文件
class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm;

        // 如过传入的根元素存在，才开始编译
        if (this.el) {
            // 1、把这些真实的 Dom 移动到内存中，即 fragment（文档碎片）
            let fragment = this.node2fragment(this.el);
        }
    }

    /* 辅助方法 */
    // 判断是否是元素节点
    isElementNode(node) {
        return node.nodeType === 1;
    }

    /* 核心方法 */
    // 将根节点转移至文档碎片
    node2fragment(el) {
        // 创建文档碎片
        let fragment = document.createDocumentFragment();
        // 第一个子节点
        let firstChild;

        // 循环取出根节点中的节点并放入文档碎片中
        while (firstChild = el.firstChild) {
            fragment.appendChild(firstChild);
        }
        return fragment;
    }

    // 解析文档碎片
    compile(fragment) {
        // 当前父节点节点的子节点，包含文本节点，类数组对象
        let childNodes = fragment.childNodes;

        // 转换成数组并循环判断每一个节点的类型
        Array.from(childNodes).forEach(node => {
            if (this.isElementNode(node)) { // 是元素节点
                // 递归编译子节点
                this.compile(node);

                // 编译元素节点的方法
                this.compileElement(node);
            } else { // 是文本节点
                // 编译文本节点的方法
                this.compileText(node);
            }
        });
    }
    // 编译元素
    compileElement(node) {
        // 取出当前节点的属性，类数组
        let attrs = node.attributes;
        Array.form(attrs).forEach(attr => {
            // 获取属性名，判断属性是否为指令，即含 v-
            let attrName = attr.name;

            if (this.isDirective(attrName)) {
                // 如果是指令，取到该属性值得变量在 data 中对应得值，替换到节点中
                let exp = attr.value;

                // 取出方法名
                let [, type] = attrName.split("-");

                // 调用指令对应得方法
                CompileUtil[type](node, this.vm, exp);
            }
        });
    }

    // 编译文本
    compileText(node) {
        // 获取文本节点的内容
        let exp = node.contentText;

        // 创建匹配 {{}} 的正则表达式
        let reg = /\{\{([^}+])\}\}/g;

        // 如果存在 {{}} 则使用 text 指令的方法
        if (reg.test(exp)) {
            CompileUtil["text"](node, this.vm, exp);
        }
    }
}

// CompileUtil.js 文件
CompileUtil = {};

// 更新节点数据的方法
CompileUtil.updater = {
    // 文本更新
    textUpdater(node, value) {
        node.textContent = value;
    },
    // 输入框更新
    modelUpdater(node, value) {
        node.value = value;
    }
};

// 获取 data 值的方法
CompileUtil.getVal = function (vm, exp) {
    // 将匹配的值用 . 分割开，如 vm.data.a.b
    exp = exp.split(".");

    // 归并取值
    return exp.reduce((prev, next) => {
        return prev[next];
    }, vm.$data);
};

// 获取文本 {{}} 中变量在 data 对应的值
CompileUtil.getTextVal = function (vm, exp) {
    // 使用正则匹配出 {{ }} 间的变量名，再调用 getVal 获取值
    return exp.replace(/\{\{([^}]+)\}\}/g, (...args) => {
        return this.getVal(vm, args[1]);
    });
};

// 设置 data 值的方法
CompileUtil.setVal = function (vm, exp, newVal) {
    exp = exp.split(".");
    return exp.reduce((prev, next, currentIndex) => {
        // 如果当前归并的为数组的最后一项，则将新值设置到该属性
        if (currentIndex === exp.length - 1) {
            return prev[next] = newVal
        }

        // 继续归并
        return prev[next];
    });
}

CompileUtil.model = function (node, vm, exp) {
    // 获取赋值的方法
    let updateFn = this.updater["modelUpdater"];

    // 获取 data 中对应的变量的值
    let value = this.getVal(vm, exp);

    // 添加观察者，作用与 text 方法相同
    new Watcher(vm, exp, newValue => {
        updateFn && updateFn(node, newValue);
    });

    // v-model 双向数据绑定，对 input 添加事件监听
    node.addEventListener('input', e => {
        // 获取输入的新值
        let newValue = e.target.value;

        // 更新到节点
        this.setVal(vm, exp, newValue);
    });

    // 第一次设置值
    updateFn && updateFn(vm, value);
};

CompileUtil.text = function (node, vm, exp) {
    // 获取赋值的方法
    let updateFn = this.updater["textUpdater"];

    // 获取 data 中对应的变量的值
    let value = this.getTextVal(vm, exp);

    // 通过正则替换，将取到数据中的值替换掉 {{ }}
    exp.replace(/\{\{([^}]+)\}\}/g, (...args) => {
        // 解析时遇到了模板中需要替换为数据值的变量时，应该添加一个观察者
        // 当变量重新赋值时，调用更新值节点到 Dom 的方法
        new Watcher(vm, arg[1], newValue => {
            // 如果数据发生变化，重新获取新值
            updateFn && updateFn(node, newValue);
        });
    });

    // 第一次设置值
    updateFn && updateFn(vm, value);
};

// Watcher.js 文件
class Watcher {
    constructor(vm, exp, callback) {
        this.vm = vm;
        this.exp = exp;
        this.callback = callback;

        // 更改前的值
        this.value = this.get();
    }
    get() {
        // 将当前的 watcher 添加到 Dep 类的静态属性上
        Dep.target = this;

        // 获取值触发数据劫持
        let value = CompileUtil.getVal(this.vm, this.exp);

        // 清空 Dep 上的 Watcher，防止重复添加
        Dep.target = null;
        return value;
    }
    update() {
        // 获取新值
        let newValue = CompileUtil.getVal(this.vm, this.exp);
        // 获取旧值
        let oldValue = this.value;

        // 如果新值和旧值不相等，就执行 callback 对 dom 进行更新
        if (newValue !== oldValue) {
            this.callback();
        }
    }
}

// 其实发布订阅说白了就是把要执行的函数统一存储在一个数组中管理，当达到某个执行条件时，循环这个数组并执行每一个成员。
// Dep.js 文件
class Dep {
    constructor() {
        this.subs = [];
    }
    // 添加订阅
    addSub(watcher) {
        this.subs.push(watcher);
    }
    // 通知
    notify() {
        this.subs.forEach(watcher => watcher.update());
    }
}