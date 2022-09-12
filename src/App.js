
import './App.css';
import {Route, Routes} from "react-router-dom"
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import SubFooter from './layout/SubFooter/SubFooter';

function App() {
  return (
    <div className="App">
      <Header/>
       
      <Routes>
        {/* <Route path='/' element={<Header/>}/> */}
      </Routes>
      <Footer/>
      <SubFooter/>

    
    </div>
  );
}

export default App;
