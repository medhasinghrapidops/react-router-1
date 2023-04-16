// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Home} from './components/Home'
import About from './components/About';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import Products from './components/Products';
import NoMatch from './components/NoMatch';
import FeaturedProduct from './components/FeaturedProduct';
import NewProduct from './components/NewProduct';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
// import Admin from './components/AdminUser';
import AdminUser from './components/AdminUser';
import Contact from './components/Contact';
import Users1 from './components/Users1';
import Users1details from './components/Users1details';

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='about' element={<About />} />
        <Route  path='order-summary' element={<OrderSummary />}/>
        {/* <Route path='product' element={<Products />} /> */}

        <Route path='product' element={ <Products />}>
          {/* index route */}

          <Route  index element={<FeaturedProduct/>}/>


          <Route path='featured' element= {<FeaturedProduct/>}  />
          <Route path='newProduct' element= {<NewProduct />} />
        </Route>

        {/* <Route  path='users' element= { <Users />}/> */}
        {/* <Route path='users/1' element={<UserDetails/>} />
        <Route path='users/2' element={<UserDetails/>} />
        <Route path='users/3' element={<UserDetails/>} /> */}

        {/* we don't want to create route for each inidiual so, we=wil be creating a dynamic */}
        {/* <Route  path='users' element={<Users/>}>
        <Route path=':userId' element={<UserDetails/>}/>
        <Route path='admin' element={<AdminUser/>}/>
        </Route> */}
        <Route path='users1' element= { <Users1/>}>
          <Route  path=':userId' element={<Users1details />}/>
        </Route>
        <Route  path='contact' element={<Contact/>}/>
        <Route path='*' element={<NoMatch/>} />
      </Routes>
    </>
  );
}

export default App;
