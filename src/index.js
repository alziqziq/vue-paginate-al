import VuePaginateAl from './components/App.vue'

const plugin = {
  install: Vue => {
    Vue.component(VuePaginateAl.name, VuePaginateAl)
  }
}

VuePaginateAl.install = plugin.install

export default VuePaginateAl
