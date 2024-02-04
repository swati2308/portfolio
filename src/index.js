import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} /> 
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// index.js humari main file hoti hai
// ise c++ ka main program samajh lo, ha age btao
// ye App jo hai upar, kuch ni hai, app.js import kiya hai aur use kiya h
//ok?han
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// so mt jana
// sory thoda import ka issue hogya tha
// puchna h kuch?han ye import do tarike se kr rhe ho kya difference h
// vo home wala component hai, isliye use aisa import kiya
// aur dusra css file hai
// iski tension mt lo
// tum import krogi to vo khud suggestion dikha dega
//ok?ok
// routing kre?hn
//routing se hm ek page se dusre page pe move krte h?
// ha pdhaku..are puch rhe , bilkul pucho kya hua, nothing,shi h, yes

// jo bhi pages me js files hain
// un sabke initial capital krdo
// this is a good practice