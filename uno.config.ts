// alteranative import
import {
  defineConfig,
  presetIcons,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

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
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
