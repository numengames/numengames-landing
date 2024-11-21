import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import svelte from '@astrojs/svelte';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import cookieConsent from "@jop-software/astro-cookieconsent";


// https://astro.build/config
export default defineConfig({
  site: "https://numen.games",
  integrations: [tailwind(), icon({
    iconDir: "public/icons",
  }), mdx(), sitemap(), svelte()],
});

// partytown({
//   config: {
//     forward: ["dataLayer.push"]
//   }
// }),
