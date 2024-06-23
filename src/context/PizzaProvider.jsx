/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

// Creación del context
export const PizzasContext = createContext();

// Provider con la fuente de datos
const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  // Obtener las pizzas
  const getPizzas = async () => {
    const res = await fetch('/pizzas.json');
    const pizzas = await res.json();
    setPizzas(pizzas);
    console.log(pizzas);
  };

  return (
    <PizzasContext.Provider value={{ pizzas, setPizzas, cart, setCart }}>
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;
