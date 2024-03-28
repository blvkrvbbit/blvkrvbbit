import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client.config';

export async function getProjects() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
    _id,
    _createdAt, 
    title,
    "slug": slug.current,
    "image": image.asset->url,
    categories[]-> {
      title
    },
    description,
    github,
    liveSite
  }
  `
  );
}
