import React from "react";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import EventHandling from "./components/EventHandling";
import StateManagement from "./components/StateManagement";
import Todo from "./components/Todo";
import { Toaster } from "react-hot-toast"
import Chat from "./components/chat";
import {AnimatePresence} from 'framer-motion'
import Booking from "./components/Booking";
import { SnackbarProvider } from "notistack";
import AddProduct from "./components/AddProduct";
import ManageUser from "./components/ManageUser";
import ProductList from "./components/ProductList";
import UpdateUser from "./components/UpdateUser";

const App = () => {
  return (
    <div>
      <Toaster position="top-right"/>
      <BrowserRouter>
      <SnackbarProvider>
      <AnimatePresence>
        {/* <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link> */}
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/register" element={ <Signup /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/eventhandling" element={ <EventHandling /> } />
          <Route path="/state" element={ <StateManagement /> } />
          <Route path="/todo" element={ <Todo /> } />
          <Route path="/chat" element={ <Chat /> } />
          <Route path="/booking" element={ <Booking /> } />
          <Route path="/addproduct" element={ <AddProduct /> } />
          <Route path="/manageuser" element={ <ManageUser /> } />
          <Route path="/updateuser/:id" element={ <UpdateUser /> } />
          <Route path="/productlist" element={ <ProductList /> } />

          <Route path="*" element={ <NotFound /> } />

        </Routes>
      </AnimatePresence>
      </SnackbarProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

// Contact