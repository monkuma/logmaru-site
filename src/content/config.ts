import { defineCollection, z } from "astro:content";

const changelog = defineCollection({
  type: "content",
  schema: z.object({
    lang: z.enum(["en", "ja"]),
    version: z.string(),
    date: z.coerce.date(),
    fileSize: z.string(),
    sha256: z.string(),
    assetName: z.string()
  })
});

export const collections = {
  changelog
};
