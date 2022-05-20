import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequirAuth from './Pages/Login/RequirAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import history from './Pages/Dashboard/MyHistory';
import MyHistory from './Pages/Dashboard/MyHistory';

function App() {
  return (
    <div className=' App max-w-7xl mx-auto px-12'> 
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={
        <RequirAuth>
<Appointment></Appointment>
        </RequirAuth>
        }></Route>
        <Route path='/about' element={<Home></Home>}></Route>
        <Route path='/review' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        
        <Route path='/dashboard' element={
        <Dashboard></Dashboard>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>

        </Route>

      </Routes>
      <ToastContainer />
      
    </div>
  );
}

export default App;
