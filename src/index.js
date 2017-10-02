// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import VuePaginateAl from './components/App.vue'

const plugin = {
  install: Vue => {
    Vue.component(VuePaginateAl.name, VuePaginateAl)
  }
}

VuePaginateAl.install = plugin.install

export default VuePaginateAl
