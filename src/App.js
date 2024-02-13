import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import StudentLogin from './Components/StudentLogin';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin/>}/>
        <Route path="/studentlogin" element={<StudentLogin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
