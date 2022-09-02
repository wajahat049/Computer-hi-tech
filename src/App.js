import logo from './logo.svg';
import './App.css';
import AppRouter from "./Config/Router"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/Navbar"
import SearchBar  from './Components/SearchBar';
import Footer  from './Components/Footer';
import {Provider} from "react-redux"
import {store,persistor} from './Store/index';
import { PersistGate } from 'redux-persist/integration/react'



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
  <AppRouter/>
    {/* <ScrollToTop/> */}
    {/* <NavBar/> */}
    {/* <Footer/> */}
  {/* </AppRouter> */}
  </PersistGate>
        </Provider>
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