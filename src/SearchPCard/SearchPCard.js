import React, {useState, useEffect} from "react";
import '../SearchBar.css';
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
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import logoPoke from '../LogosPoke/logoPoke.png';
import SearchPCardPara from "./SearchPCardPara";
import './SearchPCard.css';
import { Routes, Route, Link } from 'react-router-dom';

function SearchPCard ({pokemonUrl, cardColour}) { 
    const [pokemon, setPokemon] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [hover, setHover] = useState(false);
   
    const onHover = (e) => {
        e.preventDefault();
        setHover(true);
        //console.log("hovered");
      };
    
      const onHoverOver = (e) => {
        e.preventDefault();
        setHover(false);
      };

    useEffect(() => {
        try {
            fetch(pokemonUrl)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
                //console.log(pokemon.data);
                setLoaded(true);
                
            })
        } catch(error) {
            console.error(error)
        }
    }, [pokemonUrl]);
    if (pokemon) {
        //console.log(pokemon.name);
    };
    // if (loaded) {
    //     useEffect(() => {
    //         //console.log(pokemon);
    //         if(pokemon.species.url){
    //             try {
    //                 fetch(pokemon.species.url)
    //                 .then(response => response.json())
    //                 .then(data => {
    //                     setPokemonSpecies(data);
    //                 })
    //             } catch(error) {
    //                 console.error(error)
    //             }
    //         }
            
    //     }, []);
    // }
       
    //console.log(cardColour);
    return (
        <>
        {loaded ? 
        <>
            {/* <MDBCard>
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
            </MDBCard> */}
            
            <div className="d-flex justify-content-around">
            <Card class="card" style={{ width: '18rem'}} onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => onHoverOver(e)} bg={cardColour[0]} border={cardColour[1]} text={cardColour[2]}>
                {loaded ? <Card.Img variant="top" src={pokemon.sprites.front_default} style={{imageRendering: "pixelated"}}/> : <Card.Img variant="top" src="holder.js/100px180" />}
                <Card.Body>
                <Card.Title style={{ fontFamily: "'Pokemon Solid', sans-serif", fontSize: "30px", color: "gold" }}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}</Card.Title>
                <br></br>
                {hover && <SearchPCardPara pokeUrl={pokemon.species.url}/>}
                <br></br>
                {/* <Card.Text>{pokemonSpecies.flavor_text_entries[0].flavor_text}</Card.Text> */}
                <Button variant={`outline-${cardColour[1]}`} size="small" style={{width: "25%"}}><Link to={'/view'} state={{check: pokemon}}><img src={logoPoke} style={{width: "100%"}}/></Link></Button>
                </Card.Body>
                <br></br>
            </Card>
            </div>

            </> : 
            <> 
            <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
            </Card>
            </div>
            </> }
        </>
    )
}

export default SearchPCard;