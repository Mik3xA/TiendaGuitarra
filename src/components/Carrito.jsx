import React from 'react'
import Item from './Item'

export default function Carrito({ cart, clearCart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div id="carrito" className="bg-white p-3">
      {cart.length === 0 ? (
        <p className="text-center">El carrito está vacío</p>
      ) : (
        <>
          <table className="w-100 table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((guitar) => (
                <Item 
                  key={guitar.id}
                  guitar={guitar}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  removeFromCart={removeFromCart}
                />
              ))}
            </tbody>
          </table>

          <p className="text-end">
            Total pagar: <span className="fw-bold">${total}</span>
          </p>

          <button 
            className="btn btn-dark w-100 mt-3 p-2"
            onClick={clearCart}
          >
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  )
}