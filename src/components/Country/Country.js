import React from 'react';

export const Country = (props) => {
   const {name, capital,region,population,flags}=props.country;
   const handleAddCountry=props.handleAddCountry;
   const FlagStyle={height:'150px'};
const countryStyle={border:'1px solid gray', margin:'10px', padding:'10px'}
  return (
    <div style={countryStyle}>
      <h2>Country Name: {name.common}</h2>
      <img src={flags.svg} style={FlagStyle} alt="" />
      <p> The Name of Capital of {name.common} is : {capital}</p>
    <p>Region Name: {region}</p>
    <p>Populaton : {population}</p>
    <button onClick={() => handleAddCountry(props.country)} > Add Country</button>
   </div>
  )
}
