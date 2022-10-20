import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css"; // custom styles

import "@unocss/reset/tailwind.css"; // https://github.com/unocss/unocss#style-resetting
import "uno.css"; // https://github.com/unocss/unocss/tree/main/packages/vite#installation

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
