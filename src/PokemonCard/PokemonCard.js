import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pokeball from "../Pokeball/Pokeball";
import Carousel from 'react-bootstrap/Carousel';
import Spinner from '../Spinner/Spinner';
//import  './PokemonCard.css';
 function PokemonCard ({pokemonUrl}) {
    const [pokemon, setPokemon] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
   
    useEffect(() => {
        try {
            fetch(pokemonUrl)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
                //console.log(data.sprites);
                setLoaded(true);
            })
        } catch(error) {
            console.error(error)
        }
    }, [pokemonUrl]);


    
    return (
        <>
        {loaded ? 
        <>
            <div class="postion">
            <Card style={{width: "15rem"}} >
                <Card.Img variant="left" src={pokemon.sprites.front_default} />
                <div class="flex-container">
                    <Card.Img variant="left" src={pokemon.sprites.front_default} class="imgSize"/>
                    <Card.Img variant="right" src={pokemon.sprites.back_default} class="imgSize"/>
                </div>
                <div class="flex-container">
                    <Card.Img variant="left" src={pokemon.sprites.front_shiny} class="imgSize"/>
                    <Card.Img variant="right" src={pokemon.sprites.back_shiny} class="imgSize"/>
                </div>
                <Card.Body>
                    <Card.Title>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Capture me!</Button>
                </Card.Body>
            </Card> 
            </div>
            <br/>
            <br/>
            <br/>
            </> :
            <Spinner/>
            }
             
        </>
    )
    
}

export default PokemonCard;

