// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset:"utf-8",
      viewport:"width=device-width, initial-scale=1",
      title: "Homepage",
      meta: [
        {name:"description", content:"Post page description"}
      ],
      link: [
        { rel:"icon", type:"image/x-icon", href:"favicon.ico"}
      ],
      script: [
        {src: "/js/bootstrap.bundle.min.js"},
        {src: "/js/functions.js", tagPosition : "bodyClose"}
      ]
    }
  },
  css: ['~/assets/scss/custom.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:`
            @import "~/assets/scss/_mixins.scss";
            @import "~/assets/scss/_functions.scss";
            @import "~/assets/scss/_variables.scss";
          `
        }
      }
    }
  }
})
