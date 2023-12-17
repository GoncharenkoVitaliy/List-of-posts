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