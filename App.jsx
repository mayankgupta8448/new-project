import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import MainLayout from './components/MainLayout'; 

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="Login" element={<Login />} />w
            <Route path="Registration" element={<Registration />} />
            <Route path="Dashboard" element={<Dashboard />} /> 
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
