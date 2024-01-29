import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

const config = defineConfig({
  projectId: '1z3felt8',
  dataset: 'production',
  title: "Blvk Rvbbit's blog",
  apiVersion: '2024-01-29',
  basePath: '/admin',
  plugins: [structureTool()],
});

export default config;
