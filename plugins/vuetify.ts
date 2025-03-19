// plugins/vuetify.ts
import { createVuetify } from "vuetify";
import "vuetify/styles";
import { aliases, mdi } from "vuetify/iconsets/mdi";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    defaults: {
      global: {
        ripple: false,
      },
    },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: { mdi },
    },
    rtl: true, // راست‌چین کردن پیش‌فرض
  });

  nuxtApp.vueApp.use(vuetify);
});
