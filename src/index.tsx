import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './components/user-list/UserList';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <Link to="/">Home</Link>
    <Routes>
      <Route path="/" element={<UserList />}></Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);