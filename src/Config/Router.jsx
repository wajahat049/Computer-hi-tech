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
  import Cart from "../Components/Cart"
  import Details from "../Pages/Details"
  import NavBar from "../Components/Navbar"
  import Footer from "../Components/Footer"

  import SearchBar from "../Components/SearchBar"

  import Memories from "../Pages/Memory/index"
  import Contact from "../Pages/ContactUs"
  import About from "../Pages/AboutUs"
import Categories from "../Pages/Categories";









//   import Chat from "../Containers/Chat/index"


  class AppRouter extends Component{
      render() {
          return (
              <Router>
                <NavBar/>
                {/* <SearchBar/> */}
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/details" component={Details}/>
                  <Route exact path="/memories" component={Memories}/>
                  <Route exact path="/cart" component={Cart}/>
                  <Route exact path="/contact" component={Contact}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/categories" component={Categories}/>
                <Footer/>

              </Router>
          )
      }
  }

  export default AppRouter;