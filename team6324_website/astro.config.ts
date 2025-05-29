// @ts-check
import { defineConfig } from "astro/config";

import Components from "unplugin-vue-components/vite";
import tailwindcss from "@tailwindcss/vite";
import MotionResolver from "motion-v/resolver";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  server: {
    host: true,
    port: 6324,
  },
  build: {
    concurrency: 2,
    format: "file",
  },
  vite: {
    build: {
      minify: "esbuild",
      target: "modules",
    },
    plugins: [
      tailwindcss(),
      Components({
        collapseSamePrefixes: true,
        directoryAsNamespace: true,
        dts: true,
        resolvers: [MotionResolver()],
      }),
    ],
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
  integrations: [vue()],
});
