import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchPCard from './SearchPCard/SearchPCard';
import Button from 'react-bootstrap/Button';
import logoPoke from './LogosPoke/logoPoke.png';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './SearchBar.css';
// import { PageHeader } from 'antd';
export const SearchBar = ({items, location, showMore, setShowMore, cardColour}) => {
    //console.log("SearchBar", items);
    const [query, setQuery] = useState('');
    //const [ showMore, setShowMore ] = useState(false);
    //const [pokemons, setPokemons] = useState([]);
    //setPokemons(items);
    function chunkArray(array, size = 1) {
        const chunks = [];
    
        for (let i = 0; i < array.length; i += size) {
            const chunk = array.slice(i, i + size);
            chunks.push(chunk);
        }
    
        return chunks;
    }

    const chunks = chunkArray(items, 4);

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
      };
      
      if (query.length > 0) {
          items.filter((pokemon) => {
          return pokemon.name.includes(query.toLocaleLowerCase());
      });
      }

      function getFilterFn() {
        if (query == '') {
            return () => true;
        }

        return pokemon => pokemon.name.toLowerCase().includes(query.toLowerCase());
      }

      return (
        <>
            
            <br></br>
            <br></br>
            {/* <h2 style={{color: "yellow", textAlign: "center", fontFamily: "'Pokemon Solid', sans-serif", fontSize: "50PX"}}><span style={{backgroundColor: ""}}>   {location} Pokedex   </span></h2>  */}
            <h2 style={{color: "white", textAlign: "center", fontFamily: "'Platinum Hub Caps', sans-serif", width: "100%"}}><span style={{backgroundColor: "black", opacity: "0.9", borderRadius: "25px", padding: "1rem"}}> {location} Pokedex</span></h2> 
            {/* <a href="https://fontmeme.com/pokemon-font/"><img src="https://fontmeme.com/permalink/231022/ee1daf6ab5b6c5c75fb6c4c78c2cccaf.png" alt="pokemon-font" border="0"/></a> */}
            <br></br>
            {/* <input placeholder="Search Pokemon..." onChange={event => setQuery(event.target.value)} /> */}
            <InputGroup size="lg" style={{width: "80%", textAlign: "center", margin : "auto", fontFamily:"'Platinum Hub Caps', sans-serif"}}>
                <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm" placeholder="Search Pokemon..." onChange={event => setQuery(event.target.value) }
                />
            </InputGroup>
          
            <br></br>
            <Container>
                {chunks?.slice(0,3).map((chunk, idx) => (
                    <>
                    <Row key={idx}>
                        {chunk.filter(pokemon => {
                            // if (query == '') {
                            //     console.log(pokemon);
                            //     return pokemon;
                            // } else if ((pokemon.name.toLowerCase()).startsWith(query.toLowerCase())) {
                            //     return pokemon;
                            // } 
                            if((pokemon.name.toLowerCase()).startsWith(query.toLowerCase())) {
                                return pokemon;
                            } else if(query == '') {
                                return pokemon;
                            }
                        }).map(pokemon2 => (
                                    <Col key={pokemon2.name} style={{paddingBottom: '2%'}}>
                                        <SearchPCard pokemonUrl={pokemon2.url} cardColour= {cardColour} className="square border border-success"/>
                                    </Col>
                        ))}
                    </Row>
                    </>
                ))}
                {showMore && chunks?.slice(3).map((chunk, idx) => (
                    <>
                    <Row key={idx}>
                        {chunk.filter(pokemon => {
                            // if (query == '') {
                            //     console.log(pokemon);
                            //     return pokemon;
                            // } else if ((pokemon.name.toLowerCase()).startsWith(query.toLowerCase())) {
                            //     return pokemon;
                            // } 
                            if((pokemon.name.toLowerCase()).startsWith(query.toLowerCase())) {
                                return pokemon;
                            } else if(query == '') {
                                return pokemon;
                            }
                        }).map(pokemon2 => (
                                    <Col key={pokemon2.name} style={{paddingBottom: '2%'}}>
                                        <SearchPCard pokemonUrl={pokemon2.url} cardColour= {cardColour} className="square border border-success"/>
                                    </Col>
                        ))}
                    </Row>
                    </>
                ))}
                <br></br>
                <Button type="button" variant="danger" onClick={() => setShowMore(true)} style={{visibility: !(showMore) ? 'visible' : 'hidden' , width: "30%", fontFamily: "'NCL Aekabih Muskey', sans-serif"}} size="lg" >Load More   <img src={logoPoke} style={{width: "1.5rem"}}/></Button>
                <br></br>
            </Container>
            {/* <Container>
            <Row>
                {items.filter(pokemon => {
                    if (query == '') {
                        return pokemon;
                    } else if (pokemon.name.toLowerCase().startsWith(query.toLowerCase())) {
                        return pokemon;
                    }
                }).map((pokemon, index) => {
                    return (
                            <Col key={index} >
                                <SearchPCard pokemonUrl={pokemon.url} className="square border border-success"/>
                            </Col>
                    )
                })}
            </Row>
            <br></br>

            </Container> */}
        </>
      )

}

/* {items.filter(pokemon => {
                    if (query == '') {
                        //setPokemons(items)
                        //return pokemon;
                    } else if (pokemon.name.toLowerCase().includes(query.toLowerCase())) {
                        //console.log(pokemon.name);
                        return pokemon;
                    }
                    //console.log(items);
                })*/