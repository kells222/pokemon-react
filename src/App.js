
import {useEffect,useState} from "react"
// import logo from './logo.svg';
import './App.css';
import axios from "axios"


const BASEURL = "https://pokeapi.co/api/v2"

function App() {
  const [pokemons,setPokemons]=useState([])
  useEffect(()=>{

async function getPokes (URL){
try {
  console.log("test 10")
   const result= await axios.get(`${URL}/pokemon`);
   console.log(result)  
   const {data} = result 
  //  console.log(data)
  setPokemons(data.results)

} catch (error) {
    console.log(error)
}}
console.log("test 16")
getPokes(BASEURL)
  },[])

console.log(pokemons)  
  return (
    <div className="App">{
      pokemons.map((pokemon)=>{
        return <p key={pokemon.name}>{pokemon.name} </p>
      })
    }
    </div>
  );
}

export default App;
