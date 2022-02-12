import React from 'react';
import ReactDOM from 'react-dom';
import UserList from '@components/user-list/UserList';
import UserRepo from '@components/user-repo/UserRepo';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <HashRouter>
    <Link to="/">Home</Link> <br />
    <Link to="/repo/get-tag">Get</Link>
    <Routes>
      <Route path="/" element={<UserList />}></Route>
      <Route path="/repo/:repoName" element={<UserRepo />}></Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);