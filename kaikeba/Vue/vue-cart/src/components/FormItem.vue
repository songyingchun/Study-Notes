<template>
    <div>
        <label v-if="label">{{label}}</label>
        <div>
            <slot></slot>
            <!-- 校验错误信息 -->
            <p v-if="validateStatus == 'error'">{{errorMessage}}</p>
        </div>
    </div>
</template>
<template>
    <div>
        <label v-if="label">{{label}}</label>
        <div>
            <slot></slot>
            <!-- 校验错误信息 -->
            <p v-if="validateStatus == 'error'">{{errorMessage}}</p>
        </div>
    </div>
</template>
<script>
    import schema from "async-validator";
    export default {
        inject: ["form"], // 注入form，获取model和rules
        props: {
            label: {
                type: String,
                default: ""
            },
            prop: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                validateStatus: "",
                errorMessage: ""
            };
        },
        created() {
            this.$on("validate", this.validate);
        },
        mounted() {
            if (this.prop) {
                this.$parent.$emit("formItemAdd", this);
            }
        },
        methods: {
            validate() {
                return new Promise(resolve => {
                    // 校验当前项：依赖async-validate
                    console.log(this.prop);
                    const descriptor = {
                        // 校验规则
                        [this.prop]: this.form.rules[this.prop]
                    };
                    const validator = new schema(descriptor);
                    validator.validate({
                        [this.prop]: this.form.model[this.prop]
                    }, errors => {
                        if (errors) {
                            // 校驗失敗
                            this.validateStatus = "error";
                            this.errorMessage = errors[0].message;
                            resolve(false)  // 校验失败
                        } else {
                            this.validateStatus = "";
                            this.errorMessage = "";
                            resolve(true)   // 校验成功
                        }
                    });
                });
            }
        }
    };
</script>

<style scoped>
</style>