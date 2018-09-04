import { Component } from 'apprun';
import { State as BlogPostState } from '../BlogPost';
import { Item } from '../Sidebar';

export interface State {
  sidebar: {
    selected?: string;
    items: Item[];
  };
  blogPosts: BlogPostState[];
  blogPost?: BlogPostState;
}

const posts: BlogPostState[] = [
  {
    title: 'Going to the Store',
    content: 'Going to the Store',
    key: 'BlogPost-goingtostore',
    date: new Date(8),
  },
  {
    title: 'LMNOP FJFJFJF',
    content: 'LMNOP FJFJFJF',
    key: 'BlogPost-LMNOP FJFJFJF',
    date: new Date(),
  },
];

const initialItems = ([
  { key: 'Home', href: '#Home', label: 'Home' },
] as Item[]).concat(
  posts.map((p: BlogPostState) => (
    {
      key: p.key,
      // href: `#${p.key}`,
      href: '#BlogPost',
      label: p.title,
    } as Item
  ))
);

export const initialState: State = {
  sidebar: {
    selected: undefined,
    items: initialItems,
  },
  blogPosts: posts,
  blogPost: undefined,
};
