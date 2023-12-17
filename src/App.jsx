import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import About from "./pages/About/About";
import Posts from "./pages/Post/Post";
import Error from "./pages/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/UI/AppRouter/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;

//! Times: 2:36:40
// https://www.youtube.com/watch?v=GNrdg3PzpJQ&list=PL6DxKON1uLOHya4bDIynPTCwZHrezUlFs

// Работаем с <TransitionGroup> анимировали удаление/создание постов
// Декомпазиция - выносим логику по фильтрации и сортировки разносим по разным компанентам
// создаем свои хуки
// json placeholder
// axios - воспользовались библиотекой для создания запросов
// Загружаем посты с json placeholder
// отрисовка постов при загрузке страници
