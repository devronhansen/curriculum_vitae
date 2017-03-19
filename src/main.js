// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.component('heading', require('./components/heading.vue'));
Vue.component('persoenlichedaten', require('./components/persoenlichedaten.vue'));
Vue.component('beruf', require('./components/beruf.vue'));
Vue.component('kenntnisse', require('./components/kenntnisse.vue'));
Vue.component('interessen', require('./components/interessen.vue'));
Vue.component('profil', require('./components/profil.vue'));
Vue.component('footing', require('./components/footing.vue'));
Vue.component('scroll-button', require('./components/scroll-button.vue'));
Vue.component('schulzeugnis', require('./components/schulzeugnis.vue'));
Vue.component('kontaktform', require('./components/kontaktform.vue'));
Vue.component('flipper', require('./components/flipper.vue'));

new Vue({
    el: '#app',
})
