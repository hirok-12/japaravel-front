// https://github.com/Maronato/vue-toastification
import Toast, { PluginOptions } from 'vue-toastification'
import { defineNuxtPlugin } from '#app'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  const options: PluginOptions = {
    // You can set your default options here
  }

  nuxtApp.vueApp.use(Toast, options)
})
