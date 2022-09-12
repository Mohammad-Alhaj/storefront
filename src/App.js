import './App.css';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer'
import SimpleCart from './components/SimpleCart/SimpleCart';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Header/>
       <Routes>
        <Route path='/' element={ 
          <>
          <SimpleCart/>
          <Categories/>
          <Products/>
          </>
          
          }/>
     <Route path=':id' element={ <ProductDetails/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
