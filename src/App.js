

import Homepage from './pages/home/home';
import {Routes, Route} from "react-router-dom"
import { Login } from './pages/login/login';
import View from './pages/view/view';
import MenuPage from './pages/menu/menu';



function App() {

 

  return(
   <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/menu' element={<MenuPage/>}/>
   </Routes>
  )
 
}

export default App;
