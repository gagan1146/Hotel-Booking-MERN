import React from 'react'
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  // const home = useLocation().pathname.includes("home");
  return (
    <div>
      {!isOwnerPath ?<Navbar/>:<></>}
      {/* {home ?<Home/>:<></>} */}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
