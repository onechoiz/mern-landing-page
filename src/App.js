
import './App.css';
import {Route, Routes} from "react-router-dom"
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import SubFooter from './layout/SubFooter/SubFooter';
import Home from './components/pages';
import Customers from './components/pages/home/components/Customers';

function App() {
  return (
    <div className="App">
      <Header/>
       
      <Routes>
        <Route path='/' element={<Home/>}/>
       
   
      </Routes>
    
      <Footer/>
      <SubFooter/>

    
    </div>
  );
}

export default App;
