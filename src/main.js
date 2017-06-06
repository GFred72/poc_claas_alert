// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import Router from './Router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

window.axios = require('axios');
window.jQuery = window.$ = require('jquery')

require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')
require('./assets/css/navbar-fixed-side.css')
require('./assets/style.css')
require('./assets/js/bootstrap.min.js')


/* eslint-disable no-new */
Vue.component('icon', Icon)
new Vue({
  el: '#app',
  template: '<App/>',
  router: Router,
  components: { App }
})

