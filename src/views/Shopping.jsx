import { useContext } from 'react';
import Navbar from '../components/Navbar';
import { PizzasContext } from '../context/PizzaProvider';

export default function Shopping() {
  const { cart } = useContext(PizzasContext);

  let reduce = cart.reduce(
    (acumulador, actual) => acumulador + actual.price,
    0
  );
  console.log(reduce);
  return (
    <>
      <Navbar></Navbar>
      {cart.map((car) => (
        <div className="Shopping-item" key={car.id}>
          <div>
            <img className="card-img-shopp" src={car.img} alt="" />
          </div>
          <div>
            <h4>{car.name}</h4>
          </div>
          <div>
            <h4>precio: {car.price}</h4>
          </div>
        </div>
      ))}
    </>
  );
}
