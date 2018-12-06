Proxy.prototype=Proxy.prototype||Object.prototype;

class MyVue extends Proxy{
  constructor(options){
    let _this;
    let _container={};
    let data=options.data||{};
    super(data, {
      get(target, key){
        if(key in target){
          return target[key];
        }else{
          throw new Error(`[Vue warn]: Property or method ${key} is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property.`);
        }
      },
      set(target, key, val){
        target[key]=val;
      },
      has(){

      },
      deleteProperty(){

      }
    });
    _this=this;
    //el
    _container.$el=document.querySelector(options.el);
    //data
    _container.$data=data;

    //render
    _container.render=render.bind(_container);
    //第一次渲染
    _container.render();
  }
}

function render(){
  alert(this.$data);
}
