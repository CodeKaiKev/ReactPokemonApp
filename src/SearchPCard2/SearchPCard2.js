import React, {useState, useEffect} from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';

function SearchPCard2 ({pokemonUrl}) { 
    let [pokemon, setPokemon] = useState([]);
    let [loaded, setLoaded] = useState(false);
    
   
    useEffect(() => {
        try {
            fetch(pokemonUrl)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
                //console.log(data);
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
            <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={pokemon.sprites.front_default} fluid alt='...' />
                <MDBCardImage src={pokemon.sprites.back_default} fluid alt='...' />
                <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
                <MDBCardImage src={pokemon.sprites.front_shiny} fluid alt='...' />
                <MDBCardImage src={pokemon.sprites.back_shiny} fluid alt='...' />
                <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}</MDBCardTitle>
                <MDBCardText>
                </MDBCardText>
            </MDBCardBody>
            </MDBCard>
            </> : 
            <> </> }
        </>
    )
}

export default SearchPCard2;