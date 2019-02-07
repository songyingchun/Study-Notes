<template>
    <div>
        <h3>Page2</h3>
        <p>{{$route.params.msg}}</p>
    </div>
</template>

<script>
    export default {
        created() {
            console.log(this.$route.params.msg);
        }
    }
</script>

<style scoped>

</style>