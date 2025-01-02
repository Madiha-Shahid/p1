
import './App.css';

import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Detailscart from './Components/Detailscart';
import Cart from './Components/Cart';
import Main from './Main';
import Listing1 from './Components/Listing1';


function App() {
  return (
  
    <>
    <Router>
      <Routes>
<Route path='/' element={<Main/>}/>
<Route path='/Listing1' element={<Listing1/>}/>
<Route path='/DetailsCart' element={<Detailscart/>}/>
<Route path='/Cart' element={<Cart/>}/>
</Routes>
</Router>
 
  
</>
  );
}

export default App;
