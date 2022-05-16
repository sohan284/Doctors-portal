import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className='bg-white'> 
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/apoinment' element={<Home></Home>}></Route>
        <Route path='/about' element={<Home></Home>}></Route>
        <Route path='/review' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
