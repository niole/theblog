import app, {Component} from 'apprun';
import './style/sidebar.sass';

export interface Item {
  key: string;
  href?: string;
  label: string;
};

export interface Props {
  selected?: string;
  items: Item[];
}

export interface State {
  selected?: string;
  items: Item[];
}

const handleItemClick = (key: string) => () => {
  app.run('updateSelectedSidebarItem', key);
}

const Sidebar = (state: State) => (
  <div className="sidebar">
    <ul>
      {state.items.map((item: Item) => (
        <li onclick={handleItemClick(item.key)} className={`item${item.key === state.selected ? ' selected' : ''}`}>
          {item.href ? (
              <a href={item.href}>
                {item.label}
              </a>
            ):
            item.label}
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
