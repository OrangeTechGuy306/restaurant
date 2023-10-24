

import Homepage from './pages/home/home';
import {Routes, Route} from "react-router-dom"
import { Login } from './pages/login/login';



function App() {

 

  return(
   <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
   </Routes>
  )
 
}

export default App;
