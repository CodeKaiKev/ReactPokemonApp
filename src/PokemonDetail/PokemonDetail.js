import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import SearchPCardPara from "../SearchPCard/SearchPCardPara";
import { Link } from 'react-router-dom';
import PokeAbility from './PokeAbility';
import '../SearchBar.css'
const PokemonDetail = () => {
    const [whichPage, setWhichPage] = useState('');
    const [backG, setBackG] = useState(`https://images4.alphacoders.com/934/thumb-1920-934051.png`);
    const [cardColour, setCardColour] = useState(["dark", "warning", "light"]);
    //const [total, setTotal] = useState(0);
    //let checkD = 'generation-v.black-white';
    //const [pokemomPicked, setPokemonPicked] = useState();
    let location = useLocation();
    let pokemon = location.state;
    let totalX = 0;
    if(location.state != null) {
        for (let x of location.state.check.stats) {
            totalX = totalX + x.base_stat;
            //console.log(totalX);
        }
    }
    const pokeColours = {
        fire : "#EA7A3C",
        water: "#539AE2",
        grass: "#71C558",
        flying: "#7DA6DE",
        poison: "#B468B7",
        fighting: "#CB5F48",
        bug: "#94BC4A",
        dark: "#736C75",
        dragon: "#6A7BAF",
        electric: "#E5C531",
        fairy: "#E397D1",
        ghost: "#846AB6",
        ground: "#CC9F4F",
        ice: "#70CBD4",
        normal: "#AAB09F",
        pyschic: "#E5709B",
        rock: "#B2A061",
        steel: "#89A1B0",
        water: "#539AE2"
    }
    
    //console.log(location);
    //console.log(pokemon);
    return (
        <>
            <Header setWhichPage={setWhichPage} setBackG={setBackG} setCardColour={setCardColour}/>
            <div style={{backgroundColor: "#212529"}}>
                {/* <h1 style={{textAlign: "center"}}>#{pokemon.check.order} {pokemon.check.name.slice(1).toLowerCase()}</h1> */}
                <Card className="text-center" bg={cardColour[0]} text={cardColour[2]} style={{paddingBottom: "0rem",paddingTop: "1rem", marginLeft: "1px", marginRight: "1px"}}>
                
                <Card.Header style={{fontFamily: "'Pokemon Solid', sans-serif", color: "gold"}}><h1>#{pokemon.check.id} {pokemon.check.name.charAt(0).toUpperCase() + pokemon.check.name.slice(1).toLowerCase()}</h1></Card.Header>
                <Card.Body>
                    {/* <Card.Title style={{fontFamily: "'Pokemon Hollow', sans-serif", color: "white"}}>Type: {(pokemon.check.types).length == 1 ? pokemon.check.types[0].type.name.charAt(0).toUpperCase() + pokemon.check.types[0].type.name.slice(1).toLowerCase() :pokemon.check.types[0].type.name.charAt(0).toUpperCase() + pokemon.check.types[0].type.name.slice(1).toLowerCase()   + ' / ' + pokemon.check.types[1].type.name.charAt(0).toUpperCase() + pokemon.check.types[1].type.name.slice(1).toLowerCase()}</Card.Title> */}
                    <Card.Title style={{fontFamily: "'Pokemon Hollow', sans-serif", display: "inline-block"}}>{(pokemon.check.types).length == 1 ? <><h2>Type: </h2><h3 style={{color: pokeColours[pokemon.check.types[0].type.name], fontFamily: "'Pokemon Solid', sans-serif"}}>{pokemon.check.types[0].type.name.charAt(0).toUpperCase() + pokemon.check.types[0].type.name.slice(1).toLowerCase()}</h3></>:<><h2>Type: </h2><h3 style={{color: pokeColours[pokemon.check.types[0].type.name], fontFamily: "'Pokemon Solid', sans-serif"}}>{pokemon.check.types[0].type.name.charAt(0).toUpperCase() + pokemon.check.types[0].type.name.slice(1).toLowerCase()}</h3><h3 style={{color: pokeColours[pokemon.check.types[1].type.name], fontFamily: "'Pokemon Solid', sans-serif"}}>{pokemon.check.types[1].type.name.charAt(0).toUpperCase() + pokemon.check.types[1].type.name.slice(1).toLowerCase()}</h3></> }</Card.Title>
                    <Carousel data-bs-theme="light">
                    <Carousel.Item>
                        <img
                        style={{width: "20rem", imageRendering: "pixelated"}}
                        src={pokemon.check.sprites.front_default}
                        alt="First slide"
                        />
                        {/* <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        style={{width: "20rem", imageRendering: "pixelated"}}
                        src={pokemon.check.sprites.back_default}
                        alt="Second slide"
                        />
                        {/* <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        // className="d-block w-100"
                        src={pokemon.check.sprites.front_shiny}
                        alt="Third slide"
                        style={{width: "20rem", imageRendering: "pixelated"}}
                        />
                        {/* <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        // className="d-block w-100"
                        src={pokemon.check.sprites.back_shiny}
                        alt="Third slide"
                        style={{width: "20rem", imageRendering: "pixelated"}}
                        />
                        {/* <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    </Carousel>
                    <Card.Text>
                    <SearchPCardPara pokeUrl={pokemon.check.species.url}/>
                    </Card.Text>
                    <br/>
                    <br/>
                    {/* <Button variant="warning"><Link to="/">Return Back</Link></Button> */}
                </Card.Body>
                <Card  text={cardColour[0]} style={{ marginLeft: "10%", marginRight: "10%",  paddingTop: "0.5rem", paddingBottom: "0.5rem", backgroundColor: pokeColours[pokemon.check.types[0].type.name]}}>
                        <Card.Title  style={{fontFamily: "'NCL Aekabih Muskey', sans-serif", fontSize: "1.4rem", padding: "0.3rem"}}>Abilities:</Card.Title>
                        <Card bg="dark" text="light" style={{ marginLeft: "1rem", marginRight: "1rem", paddingBottom: "1rem",  paddingTop: "1rem", marginBottom: "1rem", fontFamily: "'NCL Aekabih Muskey', sans-serif", fontSize: "120%"}}>
                            
                            {pokemon.check.abilities.map((ability, idx) => 
                                    // setTotal(total + stat.base_stat)
                                    <Card.Text Key={idx}>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1).toLowerCase()}: <PokeAbility pokeUrl={ability.ability.url}/></Card.Text>
                            )}
                           
                        </Card>
                </Card>
                <br></br>
                <Card  text={cardColour[0]} style={{ marginLeft: "10%", marginRight: "10%",  paddingTop: "0.5rem", paddingBottom: "0.5rem", backgroundColor: pokeColours[pokemon.check.types[0].type.name]}}>
                        <Card.Title style={{fontFamily: "'NCL Aekabih Muskey', sans-serif", fontSize: "1.4rem", padding: "0.3rem"}}>Base Stats:</Card.Title>
                        <Card bg="dark" text="light" style={{ marginLeft: "1rem", marginRight: "1rem", paddingBottom: "1rem",  paddingTop: "1rem", marginBottom: "1rem", fontFamily: "'NCL Aekabih Muskey', sans-serif", fontSize: "120%"}}>
                            
                            {pokemon.check.stats.map((stat, idx) => 
                                    // setTotal(total + stat.base_stat)
                                    <Card.Text Key={idx}>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1).toLowerCase()}: {stat.base_stat}</Card.Text>
                            )}
                            <Card.Text><u>Base Stat Total: {totalX} </u></Card.Text>
                        </Card>
                </Card>
                
                
                <br></br>
                </Card>
                
            </div>
            
            <Footer positionK={"relative"}/>
        </>
    )
}

export default PokemonDetail;