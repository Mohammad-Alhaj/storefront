import './App.css';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer'
import SimpleCart from './components/SimpleCart/SimpleCart';

function App() {
  return (
    <div className="App">
     <Header/>
     <SimpleCart/>
     <Categories/>
     <Products/>
     <Footer/>
    </div>
  );
}

export default App;
