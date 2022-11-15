import React from 'react'

export default function Cart(props) {
    const cart=props.cart;
    let totalPopulation=0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation=totalPopulation + country.population;
    }
  return (
    <div>
        <h1>This is cart:{cart.length}</h1>
        <p>Total Populaton: {totalPopulation}</p>
    </div>
  )
}
