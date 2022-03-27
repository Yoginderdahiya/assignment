import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from "./components/Home";
import ProductUpdate from "./components/ProductUpdate";
import ProductAdd from "./components/ProductAdd";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import ProductSearch from "./components/ProductSearch";

function App() {
  return (
    <div className="App">
     <Router>
       <ul>
         <li><Link to="/"> Home</Link> </li>
         <li><Link to="/list"> List</Link> </li>
         <li><Link to="/add"> Add</Link> </li>
         <li><Link to="/search"> Search</Link> </li>
         <li><Link to="/details"> Deatils</Link> </li>
         <li><Link to="/update">  Update</Link> </li>
 
       </ul>
     
     <Routes>
       <Route path="/list" 
         element={<ProductList />}>
       </Route>
       <Route path="/add"
         element={<ProductAdd />}>
       </Route>
       <Route path="/search"
         element={<ProductSearch />}>
       </Route>
       <Route path="/details"
         element={<ProductDetail />}>
       </Route>
       <Route path="/update"
         element={<ProductUpdate />}> 
       </Route>
       <Route path="/" 
         element={<Home />}>
       </Route> 
       </Routes>
       </Router> 
    </div>
  );
}

export default App;
