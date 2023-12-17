import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import Posts from "../pages/Post/Post";
import PostIdPage from "../pages/PostIdPage/PostIdPage";

export const routes = [
    {path:'/about', component: About, exact: true},
    {path:'/posts', component: Posts, exact: true},
    {path:'/posts/:id', component: PostIdPage, exact: true},
    // {path:'*', component: Error, exact: true},
]