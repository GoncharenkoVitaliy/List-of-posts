import React, { useState } from "react";
import styles from "./About.module.css";
import { description } from "../../components/state";

const About = () => {
  return (
    <div className={styles.container}>
      <h1>Описание приложения:</h1>
      {(description.length > 0) ? (
        description.map((elem) => {
          return <p key={elem.id}>{elem.text}</p>;
        })
      ) : (
        <h3>Описание отсутствует</h3>
      )}
    </div>
  );
};

export default About;

// <p>
//     В данном проекте использовано: Хуки: UseState, useRef, useMemo,
//     useHistory, useParams.
//   </p>
//   <p>
//     Мемоизация. Кеширование Декомпозиция. Кастомные хуки Управляемые и
//     неуправляемые компоненты.
//   </p>
//   <p>Props: аргументы компонента, props-children</p>
//   <p>
//     Работы со списками: реобразование массива объектов в массив React
//     элементов
//   </p>
//   <p>Форма создания поста. Отрисовка по условию</p>
//   <p>
//     Сортировка в выпадающем списоке. Поиск. Фильтрация. Модальное окно.
//     Переиспользуемый UI компоненты Анимации.
//   </p>
//   <p>Работа с сервером. Axios Жизненный цикл компонента.</p>
//   <p>React router. Постраничная навигация. Динамическая навигация.</p>
//   <p>Стилизация: CSS-Module.</p>
