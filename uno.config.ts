// alteranative import
// import {
//   defineConfig,
//   presetIcons,
//   presetUno,
//   presetAttributify,
//   transformerDirectives,
//   transformerVariantGroup,
// } from "unocss";

import { defineConfig } from "@unocss/vite"; // https://github.com/unocss/unocss/tree/main/packages/vite
import presetUno from "@unocss/preset-uno"; // https://github.com/unocss/unocss/tree/main/packages/preset-uno
import presetAttributify from "@unocss/preset-attributify"; // https://github.com/unocss/unocss/tree/main/packages/preset-attributify
import presetIcons from "@unocss/preset-icons"; // https://github.com/unocss/unocss/tree/main/packages/preset-icons
import transformerDirective from "@unocss/transformer-directives"; // https://github.com/unocss/unocss/tree/main/packages/transformer-directives
import transformerVariantGroup from "@unocss/transformer-variant-group"; // https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group

// https://github.com/unocss/unocss#configurations
export default defineConfig({
  // https://github.com/unocss/unocss#extend-theme
  // same with tailwindcss / windicss
  theme: {},

  // https://github.com/unocss/unocss#custom-rules
  rules: [],

  // https://github.com/unocss/unocss#shortcuts
  shortcuts: {},

  // https://github.com/unocss/unocss#using-presets
  presets: [presetUno(), presetIcons({ scale: 1.2 }), presetAttributify({ prefix: "un-" })],
  transformers: [transformerDirective(), transformerVariantGroup()],
});
