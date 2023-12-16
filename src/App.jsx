import styles from "./App.module.css";
import { PostList } from "./components/PostList/PostList";
import { useMemo, useState } from "react";
import { PostForm } from "./components/PostList/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import { MyButton } from "./components/UI/button/MyButton";
import { usePosts } from "./components/hooks/usePosts";
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  //Получаем post из дочернего компонента
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data)
  }

  //Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POSTS</button>
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов JS"
      />
    </div>
  );
}

export default App;

// Работаем с <TransitionGroup> анимировали удаление/создание постов
// Декомпазиция - выносим логику по фильтрации и сортировки разносим по разным компанентам
// создаем свои хуки
// json placeholder
// axios - воспользовались библиотекой для создания запросов
// Загружаем посты с json placeholder

// ! 1:38:30