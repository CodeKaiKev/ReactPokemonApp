import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchPCard from './SearchPCard/SearchPCard';
import Button from 'react-bootstrap/Button';
import logoPoke from './LogosPoke/logoPoke.png';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
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
            <h2 style={{color: "white", textAlign: "center", fontFamily: "red serif", fontSize: "50px"}}><span style={{backgroundColor: ""}}>   {location} Pokedex   </span></h2> 
            <br></br>
            {/* <input placeholder="Search Pokemon..." onChange={event => setQuery(event.target.value)} /> */}
            <InputGroup size="lg" style={{width: "80%", textAlign: "center", margin : "auto"}}>
                <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm" placeholder="Search Pokemon..." onChange={event => setQuery(event.target.value)}
                />
            </InputGroup>
            <br></br>
            <br></br>
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
                <Button type="button" variant="danger" onClick={() => setShowMore(true)} style={{visibility: !(showMore) ? 'visible' : 'hidden' , width: "30%"}} size="lg" >Load More   <img src={logoPoke} style={{width: "1.5rem"}}/></Button>
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