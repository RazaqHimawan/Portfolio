export type Project = {
  id: number;
  title: string;
  description: string;
  githubLink: string;
  websiteLink: string;
};

export type Categories = 'sveltekit' | 'svelte';
export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  categories: Categories[];
  published: boolean;
};
