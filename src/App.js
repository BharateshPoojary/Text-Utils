import About from './components/About';//importing the about component
import Navbar from './components/Navbar';//imposting the nav component
import TextForm from './components/TextForm';//importing Textform component
import React from "react";//importing react library
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
} from "react-router-dom";//importing required elements for routing
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

