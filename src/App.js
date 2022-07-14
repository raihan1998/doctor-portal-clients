import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './pages/Appointment/Appointment';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='appointment' element={<Appointment/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='*' element={'This page is not found'}></Route>
      </Routes>
    </div>
  );
}

export default App;
