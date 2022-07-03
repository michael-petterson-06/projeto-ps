import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CarContext from './CarContext';

function CarProvider({ children }) {
  
  const valor = JSON.parse(localStorage.getItem('car'))
  
  const [loggedCar, setLoggedCar] = useState(valor ? valor : []);
  const [aux, setAux] = useState(0);

  return (
    <CarContext.Provider
      value={ {
        loggedCar,
        setLoggedCar,
        aux,
        setAux,
      } }
    >
      {children}
    </CarContext.Provider>
  );
}

CarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CarProvider;
