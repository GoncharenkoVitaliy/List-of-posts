import styles from "./Post.module.css";
import { PostList } from "../../components/PostList/PostList";
import { useState, useEffect } from "react";
import { PostForm } from "../../components/PostList/PostForm/PostForm";
import PostFilter from "../../components/PostFilter/PostFilter";
import MyModal from "../../components/UI/MyModal/MyModal";
import { MyButton } from "../../components/UI/button/MyButton";
import { usePosts } from "../../hooks/usePosts";
import PostService from "../../API/PostService";
import Loading from "../../components/UI/Loading/Loading";
import useFetching from "../../hooks/useFetching";
import getPageCount from "../../utils/pages";
import Pagination from "../../components/UI/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  //Получаем post из дочернего компонента
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  //отрисовка постов при загрузке страници
  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  //Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  return (
    <div className={styles.post}>
      <div className={styles.button}>
        <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      </div>
      <hr className={styles.hr} />
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
        className={styles.post__filter}
      />
      {postError && <h2>Произошла ошибка: {postError}</h2>}
      {isPostsLoading ? (
        <div className={styles.loader}>
          <Loading />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постов JS"
        />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;

// Работаем с <TransitionGroup> анимировали удаление/создание постов
// Декомпазиция - выносим логику по фильтрации и сортировки разносим по разным компанентам
// создаем свои хуки
// json placeholder
// axios - воспользовались библиотекой для создания запросов
// Загружаем посты с json placeholder
// отрисовка постов при загрузке страници

// ! 1:38:30
