import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchPCard from './SearchPCard/SearchPCard';
export const SearchBar = ({items, location}) => {
    //console.log("SearchBar", items);
    const [query, setQuery] = useState('');
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

    const chunks = chunkArray(items, 6);

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
            <h1 style={{color: "white"}}>{location} Pokedex</h1> 
            <br></br>
            <input placeholder="Search Pokemon..." onChange={event => setQuery(event.target.value)} />
            <br></br>
            <br></br>
            <br></br>
            <Container>
                {chunks.filter(getFilterFn()).map((chunk, index) => (
                    <>
                    <Row key={index}>
                        {chunk.map(pokemon => (
                            <Col key={index} >
                                <SearchPCard pokemonUrl={pokemon.url} className="square border border-success"/>
                            </Col>
                        ))}
                        <br></br>
                    </Row>
                    <br></br>
                    </>
                ))}
            </Container>
            {/* <Container>
            <Row>
                {items.filter(getFilterFn()).map((pokemon, index) => {
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