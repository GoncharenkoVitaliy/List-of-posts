import About from "../pages/About/About";
import Posts from "../pages/Post/Post";
import Error from "../pages/Error/Error";
import PostIdPage from "../pages/PostIdPage/PostIdPage";
import Login from "../pages/Login/Login";

export const privateRoutes = [
    {path:'/about', component: About, exact: true},
    {path:'/posts', component: Posts, exact: true},
    {path:'/posts/:id', component: PostIdPage, exact: true},
]
// {path:'*', component: Error, exact: true},

export const publicRoutes = [
    {path:'/login', component: Login, exact: true},
]
