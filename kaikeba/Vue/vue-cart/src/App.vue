<template>
    <div id="app" data-attr="inner-app">
        <!-- element测试 -->
        <form-test :title="titleVar"></form-test>
        <k-button @lalala="handleClick"></k-button>
        <Win>
            <template slot="head">
                head
            </template>
            <div>13123123</div>
            <div class="content">content</div>
            <template slot="foot">
                foot
            </template>
        </Win>
        <!-- 条件语句 -->
        <p v-if="showName">{{name}}</p>
        <!-- 循环语句 -->
        <ul>
            <li v-for="(good,index) in goods" :key="good.id">
                <span>{{good.text}}</span>
                <span>￥{{good.price}}</span>
                <button @click="addGood(index)">加购物车</button>
            </li>
        </ul>
        <Cart :name="name"></Cart>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Cart from './components/Cart.vue';
    import FormTest from './components/FormTest.vue';
    import KButton from './components/Button.vue';
    import axios from 'axios';
    import Win from './components/Win.vue';

    export default {
        name: 'app',
        provide () {
            return {
                someValue: '来自'
            }
        },
        data() {
            return {
                name: '开课吧购物中',
                showName: true,
                text: '',
                goods: [
                    
                ],
                titleVar: '',
                foo: {bar: 1}
            }
        },
        components: {
            HelloWorld,
            Cart,
            FormTest,
            KButton,
            Win
        },
        async created() {
            // 查询产品列表
            const ret = await axios.get('/api/goods')
            console.log(ret)
            this.goods = ret.data.list
        },
        methods: {
            addGood(i) {
                //获取goods中对应项
                const good = this.goods[i];
                this.$bus.$emit('addCart', good, this.$bus);
            },
            handleClick(obj) {
                console.log(obj);
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>