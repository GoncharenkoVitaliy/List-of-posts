import { useNavigate } from "react-router-dom";
import { MyButton } from "../../UI/button/MyButton";
import styles from "./PostItem.module.css";

export function PostItem(props) {
  const navigate = useNavigate();
  console.log(navigate);
//   console.log(props.post.id)

  return (
    <div className={styles.post}>
      <div className={styles.post__content}>
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div style={{ paddingLeft: "10px" }}>{props.post.body}</div>
      </div>
      <div className={styles.post__btns}>
        <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
}

// "react-dom": "^18.2.0",
// "react-router": "^6.21.0",
// "react-router-dom": "^6.21.0",
