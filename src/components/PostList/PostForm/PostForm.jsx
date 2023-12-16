import { useRef, useState } from "react";
import { MyButton } from "../../UI/button/MyButton";
import { MyInput } from "../../UI/input/MyInput";
import { nanoid } from "nanoid/non-secure";

export function PostForm({create}) {
  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post, id: nanoid()
    };
    create(newPost);
    setPost({title: '', body: ''});
  };

  return (
    <form>
        <label>
          Название поста
          {/* управляемый компанент */}
          <MyInput
            value={post.title}
            onChange={(event) => setPost({
              ...post,
              title: event.target.value
            })}
            type="text"
            placeholder="Название поста"
          />
        </label>
        <label>
          Описание поста
          <MyInput
            value={post.body}
            onChange={(event) => setPost({
              ...post,
              body: event.target.value
            })}
            type="text"
            placeholder="Описание поста"
          />
        </label>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
  );
}
//   {
//     /* неуправляемый элемент */
//   }
//   const bodyInputRef = useRef();

// }
{
  /* <input ref={bodyInputRef} type='text' />*/
}

// <label>
//   Описание поста
//   {/* неуправляемый/неконтролируемый компанент */}
//   <MyInput
//     // передаем ссылку в компанент
//     ref={bodyInputRef}
//     type="text"
//     placeholder="Описание поста"
//   />
// </label>;