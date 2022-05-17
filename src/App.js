import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className='bg-white App max-w-7xl mx-auto px-12'> 
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/about' element={<Home></Home>}></Route>
        <Route path='/review' element={<Home></Home>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
