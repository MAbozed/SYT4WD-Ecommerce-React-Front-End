import React from 'react'


import { BrowserRouter ,  Navigate,  Route, Router, Routes} from 'react-router-dom';
import MasterLayout from './layout/admin/MasterLayout';
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';
import Home from './layout/frontend/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route  path='/admin'  element={<MasterLayout/>}/>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/profile" element={<Profile />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
