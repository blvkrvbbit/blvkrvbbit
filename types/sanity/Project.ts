import { PortableTextBlock } from 'sanity';

export type Project = {
  _id: string;
  _createdAt: Date;
  image: string;
  title: string;
  slug: string;
  categories: string[];
  description: PortableTextBlock[];
  github: string;
  liveSite: string;
};
