import React from 'react';
import ReactDOM from 'react-dom';
import UserList from '@components/user-list/UserList';
import UserRepo from '@components/user-repo/UserRepo';
import Header from '@components/layouts/Header';
import { HashRouter, Routes, Route } from 'react-router-dom';
import store from '@redux/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="/repo/:repoName" element={<UserRepo />}></Route>
      </Routes>
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
);