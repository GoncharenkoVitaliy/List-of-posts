import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // добываем из url id страницы
import useFetching from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import Loader from "../../components/UI/Loader/Loader";
import styles from "./PostIdPage.module.css";
import { nanoid } from "nanoid/non-secure";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const responce = await PostService.getById(id);
    setPost(responce.data);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const responce = await PostService.getCommentsByPostId(id);
    setComments(responce.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.content}>
        Вы открыли страницу поста c ID: {params.id}
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.content}>
          {post.id}. {post.title}
        </div>
      )}
      <h2 className={styles.comm}>Комментарии: </h2>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => {
            return (
              <div className={styles.comment} key={nanoid()}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
