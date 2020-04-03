import {vueLaravelErrors} from './vueLaravelErrors'

export default {
    install(Vue, options) {
        Vue.mixin(vueLaravelErrors(options))

       }
   };