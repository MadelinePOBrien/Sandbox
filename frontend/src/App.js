import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import Pantry from "./pages/Pantry";
import Cookbook from "./pages/Cookbook";
import Postings from "./pages/Postings";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='CreateAccount' element={<CreateAccount />} />
        <Route path='Home' element={<Home />}> 
          <Route path='Pantry' element={<Pantry />}/>
          <Route path='Cookbook' element={<Cookbook />}/>
          <Route path ='Postings' element={<Postings />}/>
        </Route>       
      </Routes>
    </div>
  );
}

export default App;
