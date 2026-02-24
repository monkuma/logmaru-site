import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");
const site = env.PUBLIC_SITE_URL;

if (!site) {
  throw new Error("PUBLIC_SITE_URL must be defined in .env");
}

export default defineConfig({
  site,
  integrations: [sitemap()]
});
