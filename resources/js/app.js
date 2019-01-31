
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

window.axios = require('axios');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('users-component', require('./components/users/Users.vue').default);
Vue.component('user-create', require('./components/users/Create.vue').default);
Vue.component('user-edit', require('./components/users/Edit.vue').default);


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }


const routes = [
    { path: '/', component:  require('./components/ExampleComponent.vue').default },
    { path: '/foo', component:  Foo },
    { path: '/bar', component: Bar },
    { path: '/users', component: require('./components/users/Users.vue').default },
    { path: '/users/create', component: require('./components/users/Create.vue').default },
    { path: '/users/:id/edit', component: require('./components/users/Edit.vue').default },
  ]
  
  const router = new VueRouter({
    routes // short for `routes: routes`
  });
  

const app = new Vue({
    el: '#app',
    router // short for `routes: routes`   
});
