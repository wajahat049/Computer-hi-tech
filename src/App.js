import logo from './logo.svg';
import './App.css';
import AppRouter from "./Config/Router"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/Navbar"
import SearchBar  from './Components/SearchBar';
import Footer  from './Components/Footer';




function App() {
  return (
  <AppRouter>
    {/* <ScrollToTop/> */}
    {/* <NavBar/> */}
    <Footer/>
  </AppRouter>

  );
}

export default App;



{/* <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script> */}