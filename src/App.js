//import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import { Country } from './components/Country/Country';
import Cart from './components/Country/Cart/Cart';

function App() {
  const [countries, setCountries]=useState([]);
const[cart, setCart]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=>{
      setCountries(data);   
    }
      )
    .catch(error=>console.log(error))
  },[]);

  const handleAddCountry= (country) => {
    const newCart=[...cart, country];
    setCart(newCart);
    console.log(`${country.name.common} is Added `);
    document.getElementById("pid").innerHTML=`${country.name.common} is Added `
    
    ;
  }

  return (
    <div className="App">
      
        <h1> Data Loaded: {countries.length}</h1>
        <h1>Toatal Country Added:{cart.length} </h1>
        <Cart cart={cart} ></Cart>
        <p id="pid">Country</p>
          {countries.map((country,index) => <Country country={country} key={ index}  handleAddCountry={handleAddCountry} />)}
        
    </div>
  );
}

export default App;
