import app from 'apprun';
import Sidebar, { Item } from './Sidebar';
import BlogPost, { State as BlogPostState } from './BlogPost';
import Home from './Home';
import { initialState, State } from './store/state';
import component, { initStore } from './store/store';
import './style/main.sass';

initStore(initialState);

function getBlogPostFromKey(key: string, posts: BlogPostState[]): BlogPostState | undefined {
  return posts.find((post: BlogPostState) => post.key === key);
}

const mainUpdater = {
  updateSelectedSidebarItem: (state: State, key: string) => {
    state.sidebar.selected = key;
    if (isBlogPost(key)) {
      state.blogPost = getBlogPostFromKey(key, state.blogPosts);
    }
    return state;
  },
};

function isBlogPost(key?: string): boolean {
  return key !== undefined && key.startsWith('BlogPost');
}

function getHash(sidenavItems: Item[]): string | undefined {
  const hash = window.location.hash;
  if (hash) {
    const found = sidenavItems.find((item: Item) => item.href === hash);
    if (found) {
      return found.key;
    }
  }
  return;
}

app.on('#', _ => app.run('#Home'))

const view = state => (
  <div className="app-content">
    <Sidebar
      items={state.sidebar.items}
      selected={state.sidebar.selected || getHash(state.sidebar.items) || 'Home'}
    />
    <div className="main" id="my-app"></div>
  </div>
);


const Root = component(view, mainUpdater);
const opts = { render: true, global_event: true };
Root.mount(document.getElementById('main'), opts);

const element = 'my-app';
new Home().mount(element);
BlogPost().mount(element);
