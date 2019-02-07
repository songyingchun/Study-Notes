<template>
    <div>
        <form>
            <slot></slot>
        </form>
    </div>
</template>

<script>
    export default {
        provide() {
            return {
                // 将表单实例传递给后代
                form: this
            };
        },
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: {
                type: Object
            }
        },
        data() {
            return {
                fields: []
            }
        },
        created() {
            // 缓存需要校验的表单项
            this.fields = [];
            this.$on("formItemAdd", item => {
                return this.fields.push(item);
            });
        },
        methods: {
            async validate(callback) {
                // 将FormItem数组转换为validate()返回的promise数组
                const tasks = this.fields.map(item => item.validate())
                // 获取所有结果统一处理
                const results = await Promise.all(tasks)
                results.forEach(valid => {
                    if (!valid) {
                        ret = false
                    }
                })
                callback(results)
            }
        },
    };
</script>

<style scoped>
</style>