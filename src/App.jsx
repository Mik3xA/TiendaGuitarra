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

  return (
    <div>

      <Header cart={cart} />

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