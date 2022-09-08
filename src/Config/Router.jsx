import React, { Component } from"react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  import Home from "../Pages/Home"
  import AllCards from "../Components/AllCards"
  import Card from "../Components/Card"
  import Cart from "../Pages/Cart"
  import Details from "../Pages/Details"
  import NavBar from "../Components/Navbar"
  import Footer from "../Components/Footer"

  import SearchBar from "../Components/SearchBar"
  import Contact from "../Pages/ContactUs"
  import About from "../Pages/AboutUs"
import Categories from "../Pages/Categories";
import Category from "../Pages/Category";
import Chat from "../Components/Chat"
import CheckOut from "../Pages/CheckOut";










//   import Chat from "../Containers/Chat/index"


  class AppRouter extends Component{
      render() {
          return (
              <Router>
                <NavBar/>
                {/* <SearchBar/> */}
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/details" component={Details}/>
                  <Route exact path="/cart" component={Cart}/>
                  <Route exact path="/contact" component={Contact}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/categories" component={Categories}/>
                  <Route exact path="/category/:id" component={Category}/>
                  <Route exact path="/checkout" component={CheckOut}/>



                <Footer/>
                <Chat/>

              </Router>
          )
      }
  }

  export default AppRouter;