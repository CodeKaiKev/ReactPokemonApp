import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import '../SearchBar.css'
function SearchPCardPara ({pokeUrl})  {
    const [pokemonSpecies, setPokemonSpecies] = useState();
    const [loaded, setLoaded] = useState(false);
    const [flavor_text, setFlavorText] = useState('');
    useEffect(() => {
               
                    try {
                        fetch(pokeUrl)
                        .then(response => response.json())
                        .then(data => {
                            setPokemonSpecies(data);
                            //console.log(data);
                            setLoaded(true);
                            for(let x of data.flavor_text_entries) {
                                //console.log(x);
                                if(x.language.name == "en") {
                                    setFlavorText(x.flavor_text);
                                }
                            }   
                        })
                    } catch(error) {
                        console.error(error)
                    }
                
                
            }, [pokeUrl]);

            // if(loaded) {
            //     for(let x of pokemonSpecies.flavor_text_entries) {
            //         console.log(x);
            //         if(x.language.name == "en") {
            //             setFlavorText(x.flavor_text);
            //         }
            //     }       
            // }
            return (
                <> 

                 {loaded ? 
                 <><Card.Text class="hide" style={{fontFamily: "'NCL Aekabih Muskey', sans-serif", fontSize: "20px"}}>{flavor_text}</Card.Text> </> : 
                 <><Placeholder as={Card.Text} animation="glow">
                 <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                 <Placeholder xs={6} /> <Placeholder xs={8} />
             </Placeholder></>}
                </>
            )

}

export default SearchPCardPara;