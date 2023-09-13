import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
} from "react-router-dom";
const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Navbar/>}>
  <Route path="/" element={<TextForm text="Enter the text below"/>}></Route> 
  <Route path="/TextForm" element={<TextForm text="Enter the text below"/>}></Route> 
  <Route path="/About" element={<About/>}></Route>
  </Route>
));
function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

