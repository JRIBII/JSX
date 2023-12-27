import React from 'react';
import prod from "../prod";

const ProdPrice = () => {
  console.log(prod)
  return (
    <div>
      {prod.price}
    </div>
  )
}

export default ProdPrice