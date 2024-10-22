
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';  //bootstrap css
import NavB from './NavB'
import Home from './Home'
import About from './About'
import ByeOnline from './ByeOnline'

import Contact from './Contact'
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
   <div>
    
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/About' element={<About></About>}></Route>
      <Route path='/ByeOnline' element={<ByeOnline></ByeOnline>}></Route>
      <Route path='/Contact' element={<Contact></Contact>}></Route>
    </Routes>

   </div>
  );
}

export default App;
