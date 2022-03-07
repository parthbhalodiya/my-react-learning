import React from 'react';
import { Routes, Route, Outlet, Link as RouterLink } from "react-router-dom";
import Container from './Containers/Container';
import Login from "./Containers/Login";
import Dashboard from './Pages/Dashboard/Dashboard';
import Users from "./Pages/Users/Users";
import PageNotFound from "./Containers/PageNotFound";
import Roles from "./Pages/Roles/Roles";
import UserList from './Pages/Users/UserList';
import UserAdd from './Pages/Users/UserAdd';
import PostsList from './Pages/Posts/PostList';
import Posts from './Pages/Posts/Posts';



const AppRoutes = () => {
  return (
    <Routes>
  <Route path="/" element={<Container />} >
    <Route path="/" element={<Dashboard />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="users" element={<Users />}>
      <Route path="/users" element={<UserList />} />
      <Route path="/users/add" element={<UserAdd />} />
      <Route path="/users/edit/:id" element={<UserAdd />} />
    </Route>
    <Route path="posts" element={<Posts />}>
      <Route path="/posts" element={<PostsList />} />
      {/* <Route path="/post/view" element={<UserAdd />} />
      <Route path="/post/edit/:id" element={<UserAdd />} /> */}
    </Route>
    <Route path="roles" element={<Roles />} />
  </Route>

  <Route path="/login" element={<Login />}></Route>
  <Route path="*"
    element={<PageNotFound />}
  />
</Routes>
  )
};

export default AppRoutes;
