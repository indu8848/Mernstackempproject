
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Employees from './components/Employees';
import Login from './components/Login';
import Main from './components/Main';
import AddEmployee from './components/AddEmployee';
import Signup from './components/Signup';



function App() {
  return (
    <div>
      <Routes>
      <Route path={'/'} element={<Login/>}></Route>
      <Route path={'/sign'} element={<Signup/>}></Route>
      <Route path={'/add'} element={<AddEmployee/>}></Route>
      
      <Route path={'/emp'} element={<Main child={<Employees/>}/>}></Route>


      </Routes>
     
    </div>
    
  );
}

export default App;
