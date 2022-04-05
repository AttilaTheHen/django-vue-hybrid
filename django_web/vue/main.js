import Vue from 'vue/dist/vue'; // we need to specify Vue like this to have runtime compiler work with Vite

Vue.config.productionTip = false;
Vue.component('demo-component', () => import('./components/DemoComponent'));

new Vue({
  el: '#app',
  mounted() {
    console.log('Vue mounted');
  },
});
