import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchPCard from './SearchPCard/SearchPCard';
export const SearchBar = ({items}) => {
    //console.log("SearchBar", items);
    const [query, setQuery] = useState('');
    //const [pokemons, setPokemons] = useState([]);
    //setPokemons(items);
    
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
            <h1>Search Pokedex</h1> 
            <br></br>
            <input placeholder="Enter search title..." onChange={event => setQuery(event.target.value)} />
            <br></br>
            <Container>
            <Row>
            {/* {items.filter(pokemon => {
                if (query == '') {
                    //setPokemons(items)
                    //return pokemon;
                } else if (pokemon.name.toLowerCase().includes(query.toLowerCase())) {
                    //console.log(pokemon.name);
                    return pokemon;
                }
                //console.log(items);
            })*/items.filter(getFilterFn()).map((pokemon, index) => {
                // console.log("Checking: " + pokemon.url);
                return (
                    <Col key={index} >
                        <SearchPCard pokemonUrl={pokemon.url}/>
                    </Col>
                )
            })}
            </Row>
            </Container>
        </>
      )

}