import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Componenets/Header';
import Hero from './Pages/Home pages/Hero';
import Top_categories from './Pages/Home pages/Top_categories';
import Our_top_collection from './Pages/Home pages/Our_top_collection';
import Clearance_Sale from './Pages/Home pages/Clearance_Sale';
import Footer from './Componenets/Footer';
import Castro_News from './Pages/Home pages/Castro_News';
import Card from './Pages/Home pages/card';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Hero/>}></Route>
      <Route path='/Home' element={<Hero/>}></Route>
    </Routes>
    <Top_categories/>
    <Our_top_collection/>
    <Clearance_Sale/>
    <Castro_News/>
    <Card/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
