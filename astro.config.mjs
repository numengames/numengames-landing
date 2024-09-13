import mdx from "@astrojs/mdx";
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown';
import { defineConfig } from "astro/config";


// https://astro.build/config
export default defineConfig({
    site: "https://numen.games",
    integrations: [
        react(),
        tailwind(),
        mdx(),
        sitemap(),
        partytown({
            config: {
                forward: ["dataLayer.push"],
            },
        }),
    ]
});