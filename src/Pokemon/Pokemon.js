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



function Pokemon  (){
    const [pokemons, setPokemons] = useState([]);
    //const [pokemonsCopy, setPokemonsCopy] = useState([]);
    const [loaded, setLoaded] = useState(false);
 

    
    const pokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'
    useEffect(() => {
        fetch(pokeUrl)
            .then((response) => response.json())
            .then((data) => {
                //console.log(data.results);
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
                        <Carousel data-bs-theme="dark" >  
                        {pokemons.map((pokemon) => 
                            <Carousel.Item  >
                               <SearchPCard pokemonUrl={pokemon.url}></SearchPCard>
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