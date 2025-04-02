// // import React from 'react'
// // import Navbar from './Pages/Navbar'
// // import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
// // import Home from './Pages/Home'
// // import About from './Pages/About'
// // import Collection from './Pages/Collection'
// // import Contact from './Pages/Contact'
// // import Cart from './Pages/Cart'
// // import Login from'./Pages/Login'
// // import Regiester from './Pages/Regiester'
// // import Orders from './Pages/Orders'
// // export default function App() {
// //   return (
// //     <>

// //         <Router>
// //            <Navbar/>
// //           <Routes>
// //             <Route path="/" element={<Home />} />
// //             <Route path='/about' element={<About />} />
// //             <Route path ='/collection' element ={<Collection/>}/>
// //             <Route  path ='/contact' eleement ={<Contact/>}/>
// //             <Route path='/cart' element={<Cart />} />
// //             <Route path='/login' element={<Login />} />
// //             <Route path='/register' element={<Regiester />} />
// //             <Route path='/orders' element={<Orders />} />
// //           </Routes>
// //         </Router>
  
// //     </>

// //   )
// // }
// import React from 'react';
// import Navbar from './Pages/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Collection from './Pages/Collection';
// import Contact from './Pages/Contact';
// import Cart from './Pages/Cart';
// import Login from './Pages/Login';
// import Register from './Pages/Register';
// import Orders from './Pages/Orders';

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       {/* Add padding to push content below the fixed navbar */}
//       <div className="pt-16">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/collection" element={<Collection />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/orders" element={<Orders />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Collection from './Pages/Collection';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Orders from './Pages/Orders';
import Profile from './Pages/Profile';
import AdminPage from './Pages/AdminPage';

function Layout() {
  const location = useLocation();  
  const hideNavbarRoutes = ['/login', '/register']; // Pages where Navbar should be hidden

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element ={<Profile/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
