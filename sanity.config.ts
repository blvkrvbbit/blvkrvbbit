import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemas } from './sanity/schemas';
const config = defineConfig({
  projectId: '63fpo59h',
  dataset: 'production',
  title: "Blvk Rvbbit's blog",
  apiVersion: '2024-01-29',
  basePath: '/admin',
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
