import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    muse: z.enum([
      'euterpe',
      'thalia',
      'erato',
      'polymnia',
      'melpomene',
      'urania',
      'clio',
      'calliope',
      'terpsichore',
      'void',
    ]).optional(),
    paraType: z.enum(['project', 'area', 'resource']).optional(),
    voiceTone: z.string().optional(),
    readingTime: z.number().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
