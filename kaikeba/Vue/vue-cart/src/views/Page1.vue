<template>
    <div>
        <h3>page1</h3>
        <p><button @click="gotoPage2()">跳转Page2</button></p>
        <p>{{foo}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            foo: {
                type: String,
                default: ''
            }
        },
        methods: {
            gotoPage2() {
                // this.$router.push('/page2/vuejs')
                this.$router.push({
                    name: 'page2',
                    params: {
                        id: 1,
                        msg: 'vuejs'
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>