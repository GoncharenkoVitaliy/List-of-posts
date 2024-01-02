import { nanoid } from "nanoid/non-secure";
import { PostItem } from "./PostItem/PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./PostList.css";

export function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return <h2 style={{ textAlign: "center" }}>Посты не найдены!</h2>;
  }

  return (
    <div>
      <h2>{title}</h2>
      <TransitionGroup className="todo-list">
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

{
  /* <div>
      <h2>{title}</h2>
      <TransitionGroup className="todo-list">
        {posts.map((post, index) => (
          <CSSTransition
          key={nanoid()}
          // nodeRef={nodeRef}
          timeout={500}
          classNames="post"
        >
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div> */
}
