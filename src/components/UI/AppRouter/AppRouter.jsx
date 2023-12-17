import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../../pages/About/About";
import Posts from "../../../pages/Post/Post";
import Error from "../../../pages/Error/Error";
import PostIdPage from "../../../pages/PostIdPage/PostIdPage";
import { privateRoutes, publicRoutes } from "../../../router/index";
import Login from "../../../pages/Login/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
    
  );
};

export default AppRouter;

// {privateRoutes.map((route) => (
//   <Route
//     key={route.id}
//     component={route.component}
//     path={route.path}
//     exact={route.exact}
//   />
// ))}
// {publicRoutes.map((route) => (
//   <Route
//     key={route.id}
//     component={route.component}
//     path={route.path}
//     exact={route.exact}
//   />
// ))}
