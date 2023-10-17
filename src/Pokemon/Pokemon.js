import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import './Pokemon.css';
import PokemonCard from "../PokemonCard/PokemonCard";
import Pokeball from "../Pokeball/Pokeball"
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchBar } from "../SearchBar";
import SearchPCard from "../SearchPCard/SearchPCard";
import SearchPCard2 from "../SearchPCard2/SearchPCard2";



function Pokemon  ({pokemonGeneration}){
    let [pokemons, setPokemons] = useState([]);
    //const [pokemonsCopy, setPokemonsCopy] = useState([]);
    let [loaded, setLoaded] = useState(false);
    //const [pokemonGeneration, setPokemonGeneration] = useState('https://pokeapi.co/api/v2/pokemon?limit=151');
    console.log(pokemonGeneration);
    
    //let pokeUrl = pokemonGeneration;
    useEffect(() => {
        fetch(pokemonGeneration)
            .then((response) => response.json())
            .then((data) => {
                console.log(pokemonGeneration + "Hiasdsd");
                console.log(data.results);
                setPokemons(data.results); 
                
                setTimeout(() =>{
                    setLoaded(true);
                }, 2000);
                
                //console.log("Hi" + pokemons);
            })
            .catch((error) => {
                console.error(error);
            });
    },[]);
 
    if (loaded) {
    return (
        <>      
                
                {/* <div> */}
                    <div>
                        <Carousel data-bs-theme="dark" autoPlay={true} interval={1000} controls={false} indicators={false}  >  
                        {pokemons.map((pokemon) => 
                            <Carousel.Item  >
                               <SearchPCard2 pokemonUrl={pokemon.url}></SearchPCard2>
                            </Carousel.Item>
                        )}
                        </Carousel>
                    </div> 

                    <div  >
                        <div>
                            <SearchBar items={pokemons} />
                        </div>
                    </div>
                    {/* <div>
                        <Container>
                            <Row>
                            {pokemons.map((pokemon, index) =>
                                <Col key={index}>
                                    <SearchPCard pokemonUrl={pokemon.url}></SearchPCard>
                                </Col>
                            )}  
                            </Row>
                        </Container>
                              
                    </div> */}
                    
                {/* </div>     */}
                
            
        </>
    )}  else {
        return (
            <>
                <Pokeball/>
            </>
        )
    }}
   


export default Pokemon;