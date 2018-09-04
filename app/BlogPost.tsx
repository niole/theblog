import app from 'apprun';
import component from './store/store';

export interface State {
  title: string;
  content: string;
  key: string;
  date: Date;
}

const BlogPost = (state) => {
  const { date, title, key, content} = state.blogPost;
  return (
    <div className="blog-post" key={key}>
      <div className="title-container">
        <h1>
          {title}
        </h1>
        <span className="date">
          {JSON.stringify(date)}
        </span>
      </div>
      <div className="content">
        {content}
      </div>
    </div>
  );
};

export default () => component(
  BlogPost,
  {
    '#BlogPost': store => store
  }
);
