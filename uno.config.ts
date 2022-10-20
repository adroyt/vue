import { defineConfig, presetIcons, presetUno } from "unocss";
import transformerDirective from "@unocss/transformer-directives";

export default defineConfig({
  theme: {},
  rules: [["custom-rule", { color: "red" }]],
  shortcuts: {
    cs: "text-lg text-orange hover:text-teal", // custom short-cut
    // bk: "cs", // power!!!!
  },
  presets: [presetUno(), presetIcons({ scale: 1.2 })],
  transformers: [transformerDirective()],
});
