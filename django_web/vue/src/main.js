import Vue from 'vue/dist/vue'; // we need to specify Vue like this to have runtime compiler work with Vite

// import App from './App.vue';

Vue.config.productionTip = false;
// Vue.component('alert-message', AlertMessage);
// Vue.component('welcome-card', () => import('./components/WelcomeCard/WelcomeCard'));

new Vue({
  el: '#app',
  mounted() {
    console.log('Vue mounted');
  },
});
