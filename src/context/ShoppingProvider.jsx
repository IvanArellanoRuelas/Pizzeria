/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

// Creación del context
export const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
  const [seleccion, setSeleccion] = useState([]);
  return (
    <ShoppingContext.Provider value={{ seleccion, setSeleccion }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingProvider;
