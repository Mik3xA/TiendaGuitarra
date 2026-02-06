import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Card from './components/Card';
import { useState, useEffect} from 'react';
import { db } from './db/db.js';

//modificar nombre y variable 

function App() {

 // const [customer, setCustomer] = useState({});
 // const [total, setTotal] = useState(0);
 // const [products, setProducts] = useState([]);
  //const [modal, setModal] = useState(false);

  //console.log(total);
  //()=>setTotal(100);
  //if(auth){
   // const (modal, setModal)=useState(false);
 // }

 const [data, setData] = useState(db);
 const [cart, setCart] = useState([]);

 //useEffect(() => {
  //setData(db);
  //}, []);
console.log(data);
  function removeFromCart(id) {
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if(item.id === id && item.quantity < 5) { // MAX 5 items (opcional)
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if(item.id === id && item.quantity > 1) { // MIN 1 item
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  function clearCart() {
    setCart([])
  }

  return (
    <div>

      <Header cart={cart}
  removeFromCart={removeFromCart}
  increaseQuantity={increaseQuantity}
  decreaseQuantity={decreaseQuantity}
  clearCart={clearCart} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((guitar) => (
            <Card
              key={guitar.id}
              guitar={guitar} 
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </main>

      <Footer></Footer>

    </div>
  )
}

export default App;