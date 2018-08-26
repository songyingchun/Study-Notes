import Vue from 'vue';
import App from './App.vue';
import router from 'src/router/router';

const app = new Vue({
    el: 'app',
    render: x => x(App),
    router: router
});
