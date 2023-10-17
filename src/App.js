import logo from './logo.svg';
import './App.css';
import Header2 from './Header/Header2.js';
import Pokemon from './Pokemon/Pokemon.js';
import React, {useState, useEffect} from "react";
function App() {
  //const [pokemonGeneration, setPokemonGeneration] = useState('https://pokeapi.co/api/v2/pokemon?limit=151');
  const [whichPage, setWhichPage] = useState('Gen1');
  // let pokeView;
  // switch (whichPage) {
  //       case 'Gen1': 
  //         pokeView = <Pokemon pokemonGeneration ={'https://pokeapi.co/api/v2/pokemon?limit=151'}/>
  //         console.log("Hi");
  //         break;
  //       case 'Gen2': 
  //         pokeView = <Pokemon pokemonGeneration ={'https://pokeapi.co/api/v2/pokemon?limit=251'}/>
  //         console.log("Hi 2");
  //         break;
  //       default:
  //         pokeView = null;
  //         break;
  // }
   //console.log(whichPage + " This ijsia");
  return (
    <>
    <Header2 setWhichPage = {setWhichPage}/>
    <div className="App">
      {(() => {
          switch (whichPage) {
            case 'Gen1': 
              console.log("Gen1");
              return <Pokemon pokemonGeneration ={'https://pokeapi.co/api/v2/pokemon?limit=151'}/>
            case 'Gen2': 
              console.log("Gen2");
              return <Pokemon pokemonGeneration ={'https://pokeapi.co/api/v2/pokemon?limit=251'}/>
            default:
              return null;
      }
      }) ()}
    </div>
    </>
  );
}

export default App;
