export default function Card({ guitar,cart,setCart }) {
  const { name, price, image, description } = guitar;
  
  const handleClick = (item) => {
    setCart([...cart, item]);
  }

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="row align-items-center">
        <div className="col-4">
          <img
            className="img-fluid"
            src={`/img/${image}.jpg`}  
            alt={`imagen guitarra ${name}`}
          />
        </div>

        <div className="col-8">
          <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
          <p>{description}</p>
          <p className="fw-black text-primary fs-3">${price}</p>
          <button type="button" 
          className="btn btn-dark w-100" 
          onClick={() => handleClick(guitar)}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  )
}