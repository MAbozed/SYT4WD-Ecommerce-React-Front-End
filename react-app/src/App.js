import React from 'react'


import { BrowserRouter ,  Navigate,  Route, Router, Routes} from 'react-router-dom';
import MasterLayout from './layout/admin/MasterLayout';
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';
import Home from './layout/frontend/Home';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='register' element={<Register />}/>
            <Route  path='/admin'  element={<MasterLayout/>}/>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/profile" element={<Profile />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
