import React, {Fragment} from 'react';
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom'; 
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import { Landing } from './components/layout/Landing';
import './App.css';
// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
