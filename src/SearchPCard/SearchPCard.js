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
import Spinner from "../Spinner/Spinner";
function SearchPCard ({pokemonUrl}) { 
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
    }, []);

    return (
        <>
        {loaded ? 
        <>
            <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={pokemon.sprites.front_default} fluid alt='...' />
                <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}</MDBCardTitle>
                <MDBCardText>
                </MDBCardText>
                <MDBBtn href='#'>Info</MDBBtn>
            </MDBCardBody>
            </MDBCard>
            </> : 
            <> 
            <Spinner/>
            </> }
        </>
    )
}

export default SearchPCard;