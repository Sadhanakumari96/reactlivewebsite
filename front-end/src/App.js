import './App.css';
import Nav from './component//Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import SignUp from './component/SignUp';
import PrivateComponent from './component/PrivateComponent';
import Login from './component/Login';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import UpdateProduct from './component/UpdateProduct';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route element={<PrivateComponent />}>
      <Route path='/' element={<ProductList />}></Route>
      <Route path='/add' element={<AddProduct />}></Route>
      <Route path='/update/:id' element={<UpdateProduct />}></Route>
      <Route path='/logout' element={<h1>Logout Component</h1>}></Route>
      <Route path='/profile' element={<h1>Profile Component</h1>}></Route>
      
      </Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
