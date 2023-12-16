import { MyButton } from "../../UI/button/MyButton"
import styles from "./PostItem.module.css"

export function PostItem(props) {
    return (
        <div className={styles.post}>
            <div className={styles.post__content}>
                <strong>{props.number}. {props.post.title}</strong>
                <div style={{paddingLeft: '10px'}}>
                    {props.post.body}
                </div>
            </div>
            <div className={styles.post__btns}>
                <MyButton onClick={() => props.remove(props.post)}>
                    Delete
                </MyButton>
            </div>
        </div>
    )
}