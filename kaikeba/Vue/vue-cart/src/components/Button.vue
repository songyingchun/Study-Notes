<template>
    <div>
        <button @click="handleClick">开课吧button</button>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick() {
                this.$emit('lalala', {msg: 'hello'})
            }
        },
    }
</script>

<style scoped>

</style>