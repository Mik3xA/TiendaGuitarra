import React from 'react'

export default function Item({ guitar, increaseQuantity, decreaseQuantity, removeFromCart }) {
  const { id, name, image, price, quantity } = guitar

  return (
    <tr>
      <td>
        <img
          className="img-fluid"
          src={`/img/${image}.jpg`}
          alt={`imagen guitarra ${name}`}
        />
      </td>
      <td>{name}</td>
      <td className="fw-bold">${price}</td>
      <td className="d-flex align-items-center gap-2">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => decreaseQuantity(id)}
        >
          -
        </button>
        {quantity}
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => increaseQuantity(id)}
        >
          +
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => removeFromCart(id)}
        >
          X
        </button>
      </td>
    </tr>
  )
}