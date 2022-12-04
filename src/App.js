import './App.css';
import Navbar from './components/Navbar.js';
import Marketplace from './components/Marketplace';
import Profile from './components/Profile';
import SellNFT from './components/SellNFT';
import NFTPage from './components/NFTpage';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignupPage';
import Home from './components/Home';


function App() {
  return (
    <div className="container">
        <Routes>
          <Route path='/' element={<LoginPage></LoginPage>}></Route>
          <Route path='/signup' element={<SignUpPage></SignUpPage>}></Route> 
          <Route path='/home' element={<Home></Home>}></Route>   
          <Route path='/marketplace' element={<Marketplace></Marketplace>}></Route>     
          <Route path='/profile' element={<Profile></Profile>}></Route>     
          <Route path='/sellNFT' element={<SellNFT></SellNFT>}></Route>         
          <Route path='/nftpage' element={<NFTPage></NFTPage>}></Route>           
        </Routes> 
    </div>
  );
}

export default App;
