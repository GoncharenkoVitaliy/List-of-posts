import React from "react";
import styles from './PostFilter.module.css';
import { MyInput } from "../UI/input/MyInput";
import { MySelect } from "../UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <div className={styles.post__input}>
        <MyInput
          value={filter.query}
          placeholder="Поиск..."
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        />
      </div>
      <div className={styles.post__filter}>
        <MySelect
          vaue={filter.sort}
          onChange={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
    </div>
  );
};

export default PostFilter;
