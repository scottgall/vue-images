import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/oath2/callback', component: AuthHandler }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')