import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/articles',
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum([
      'guide',
      'food',
      'transport',
      'routes',
      'architecture',
      'history',
      'nearby',
    ]),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    gallery: z.array(z.object({ image: z.string(), alt: z.string() })).default([]),
    management: z.object({ heading: z.string(), body: z.string(), sourceUrl: z.string().url() }).optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    stayLabel: z.string().optional(),
    address: z.string().optional(),
    hoursSummary: z.string().optional(),
    admissionSummary: z.string().optional(),
    mapsQuery: z.string().optional(),
    showMapActions: z.boolean().default(true),
    related: z.array(z.string()).default([]),
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
    stops: z
      .array(
        z.object({
          name: z.string(),
          summary: z.string(),
          stayLabel: z.string().optional(),
          mapsQuery: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

export const collections = { articles };
