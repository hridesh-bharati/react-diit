import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css";
import "./MediaQuery.css";
import "./utilities.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './store/reduxStore/store';
import ExamPortal from './Components/StudentComponent/ExamPortal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />}></Route>
        <Route path='/Exam-Portal' element={<ExamPortal />}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </Provider>
);