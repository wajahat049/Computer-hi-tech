// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Button,} from "react-bootstrap";
import ModalSignup from "./Signup"
import NavBar from "./Navbar"
import ControlledCarousel from "./Carousel"

function SearchBar() {
  return (
    <div class="container">
    <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-8">
            <div class="search"> <i class="fa fa-search"></i> <input type="text" class="form-control" placeholder="Search Anything"/> <Button variant="dark">Search</Button> </div>
        </div>
    </div>
</div>
  );
}

export default SearchBar;
