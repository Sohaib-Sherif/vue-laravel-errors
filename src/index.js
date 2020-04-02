import {vueLaravelErrors} from 'mixin'

export default {
    install(Vue, options) {
        Vue.mixin(vueLaravelErrors(options))

       }
   };