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
    
    //console.log(location);
    //console.log(pokemon);
    return (
        <>
            <Header setWhichPage={setWhichPage} setBackG={setBackG} setCardColour={setCardColour}/>
            <div >
                {/* <h1 style={{textAlign: "center"}}>#{pokemon.check.order} {pokemon.check.name.slice(1).toLowerCase()}</h1> */}
                <Card className="text-center" bg={cardColour[0]} text={cardColour[2]} style={{paddingBottom: "0rem",paddingTop: "1rem", marginLeft: "1px", marginRight: "1px"}}>
                
                <Card.Header style={{fontFamily: "-moz-initial"}}><h1>#{pokemon.check.id} {pokemon.check.name.charAt(0).toUpperCase() + pokemon.check.name.slice(1).toLowerCase()}</h1></Card.Header>
                <Card.Body>
                    <Card.Title style={{fontFamily: "-moz-initial"}}>Type: {(pokemon.check.types).length == 1 ? pokemon.check.types[0].type.name.charAt(0).toUpperCase() + pokemon.check.types[0].type.name.slice(1).toLowerCase() : pokemon.check.types[0].type.name.charAt(0).toUpperCase() + pokemon.check.types[0].type.name.slice(1).toLowerCase() + ' / ' + pokemon.check.types[1].type.name.charAt(0).toUpperCase() + pokemon.check.types[1].type.name.slice(1).toLowerCase()}</Card.Title>
                    <Carousel data-bs-theme="light">
                    <Carousel.Item>
                        <img
                        style={{width: "20rem"}}
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
                        style={{width: "20rem"}}
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
                        style={{width: "20rem"}}
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
                        style={{width: "20rem"}}
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
                <Card bg="warning" text={cardColour[0]} style={{ marginLeft: "10%", marginRight: "10%",  paddingTop: "0.5rem", paddingBottom: "0.5rem"}}>
                        <Card.Title text="dark" style={{fontFamily: "fantasy", fontSize: "1.4rem"}}>Abilities:</Card.Title>
                        <Card bg="dark" text="light" style={{ marginLeft: "1rem", marginRight: "1rem", paddingBottom: "1rem",  paddingTop: "1rem", marginBottom: "1rem", fontFamily: "monospace"}}>
                            
                            {pokemon.check.abilities.map((ability, idx) => 
                                    // setTotal(total + stat.base_stat)
                                    <Card.Text Key={idx}><strong>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1).toLowerCase()}:</strong> <PokeAbility pokeUrl={ability.ability.url}/></Card.Text>
                            )}
                           
                        </Card>
                </Card>
                <br></br>
                <Card bg="success" text={cardColour[2]} style={{ marginLeft: "10%", marginRight: "10%",  paddingTop: "0.5rem", paddingBottom: "0.5rem"}}>
                        <Card.Title style={{fontFamily: "fantasy", fontSize: "1.4rem"}}>Base Stats:</Card.Title>
                        <Card bg="dark" text="light" style={{ marginLeft: "1rem", marginRight: "1rem", paddingBottom: "1rem",  paddingTop: "1rem", marginBottom: "1rem", fontFamily: "monospace"}}>
                            
                            {pokemon.check.stats.map((stat, idx) => 
                                    // setTotal(total + stat.base_stat)
                                    <Card.Text Key={idx}><strong>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1).toLowerCase()}</strong>: {stat.base_stat}</Card.Text>
                            )}
                            <Card.Text><strong><u>Base Stat Total: {totalX} </u></strong></Card.Text>
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