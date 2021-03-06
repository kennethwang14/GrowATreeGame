import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './views/App.vue';
import router from './router';
import store from './store';
import js from './js/import';

sync(store, router);

const app = new Vue({
    router,
    store,
    ...App,
});

export { app, router, store };
