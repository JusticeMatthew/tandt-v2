import { defineCollection, z } from "astro:content";

const imageCollection = defineCollection({
  type: 'data',
  schema: ({image}) => z.object({ 
    alt: z.string(),
    src: image()
  })
})

export const collections = {
  images: imageCollection
}