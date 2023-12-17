import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../../pages/About/About";
import Posts from "../../../pages/Post/Post";
import Error from "../../../pages/Error/Error";
import PostIdPage from "../../../pages/PostIdPage/PostIdPage";
import { routes } from "../../../router";
import { nanoid } from "nanoid/non-secure";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostIdPage />} />
      <Route path="*" element={<Error />} /> */
    </Routes>
  );
};

export default AppRouter;


// {routes.map((route) => (
//   <Route
//     key={nanoid()}
//     component={route.component}
//     path={route.path}
//     exact={route.exact}
//   />
// ))}