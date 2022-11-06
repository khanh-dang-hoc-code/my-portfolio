import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './page/404Page';
import Blog from './page/blog';
import Home from './page/home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}  errorElement={<ErrorPage />}/>
        <Route path='/Blog' element={<Blog/>}  errorElement={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
