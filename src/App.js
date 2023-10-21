import logo from './logo.svg';
import './App.css';
import Header2 from './Header/Header2.js';
import Pokemon from './Pokemon/Pokemon.js';
import React, {useState, useEffect} from "react";
import Pokeball from './Pokeball/Pokeball';
import Footer  from './Footer/Footer';
function App() {
  //const [pokemonGeneration, setPokemonGeneration] = useState('https://pokeapi.co/api/v2/pokemon?limit=151');
  const [whichPage, setWhichPage] = useState('Gen1');
  const [backG, setBackG] = useState(`https://images4.alphacoders.com/934/thumb-1920-934051.png`);
  const [state, setState] = useState("dark");
  const [cardColour, setCardColour] = useState(["dark", "warning", "light"]);
  return (
    <>
    <Header2 setWhichPage = {setWhichPage} setBackG = {setBackG} setCardColour= {setCardColour} className="Head"/>
    <div className="App" style={{backgroundImage:`url(${backG})`, backgroundSize: "1071px 757px"}} data-bs-theme={state}>
      {(() => {
          switch (whichPage) {
            case 'Gen1': 
              // console.log("Gen1");
              // console.log(backG);
              //setBackG('https://images4.alphacoders.com/934/thumb-1920-934051.png');
              return <Pokemon pokemonGeneration ={'https://pokeapi.co/api/v2/pokemon?limit=151'} location={'Kanto'} cardColour={cardColour}/>
            case 'Gen2': 
              // console.log("Gen2");  
              // console.log(backG);
              //setBackG('https://static.wikia.nocookie.net/poke/images/5/5b/Kanto_HGSS_Art.png/revision/latest?cb=20131007045559');
              return <Pokemon pokemonGeneration ={'https://pokeapi.co/api/v2/pokemon?offset=151&limit=101'} location={'Johto'} cardColour={cardColour}/>
            case 'Gen3': 
              //console.log("Gen3");
              return <Pokemon pokemonGeneration ={'https://pokeapi.co/api/v2/pokemon?offset=251&limit=135'} location={'Hoenn'} cardColour={cardColour}/>
            case 'Gen4': 
              //console.log("Gen4");
              return <Pokemon pokemonGeneration ={'https://pokeapi.co/api/v2/pokemon?offset=386&limit=107'} location={'Sinnoh'} cardColour={cardColour}/>
            case 'Gen5': 
              //console.log("Gen5");
              return <Pokemon pokemonGeneration ={'https://pokeapi.co/api/v2/pokemon?offset=493&limit=156'} location={'Unova'} cardColour={cardColour}/>
            case 'Gen6': 
              //console.log("Gen6");
              return <Pokemon pokemonGeneration ={'https://pokeapi.co/api/v2/pokemon?offset=649&limit=72'} location={'Kalos'} cardColour={cardColour}/>
            case 'Gen7': 
              //console.log("Gen7");
              return <Pokemon pokemonGeneration ={'https://pokeapi.co/api/v2/pokemon?offset=721&limit=88'} location={'Alola'} cardColour={cardColour}/>
            case 'Gen8': 
              //console.log("Gen8");
              return <Pokemon pokemonGeneration ={'https://pokeapi.co/api/v2/pokemon?offset=809&limit=99'} location={'Galar'} cardColour={cardColour}/>
            case 'Gen9': 
              //console.log("Gen9");
              return <Pokemon pokemonGeneration ={'https://pokeapi.co/api/v2/pokemon?offset=905&limit=112'} location={'Paldea'} cardColour={cardColour}/>
            case 'Hisui': 
              //console.log("Hisui");
              return <Pokemon pokemonGeneration ={'https://pokeapi.co/api/v2/pokemon?offset=898&limit=7'} location={'Hisui'} cardColour={cardColour}/>
            case 'Refresh':
              return <Pokeball/>
            default:
              return null;
      }
      }) ()}
    </div>
    <Footer/>
    </>
  );
}

export default App;
