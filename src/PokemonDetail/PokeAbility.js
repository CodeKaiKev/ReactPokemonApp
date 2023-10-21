import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
function PokeAbility ({pokeUrl})  {
    const [pokemonAbilities, setPokemonAbilities] = useState();
    const [loaded, setLoaded] = useState(false);
    const [effect, setEffect] = useState('');
    //console.log(pokeUrl);
    //console.log("sdasd");
    useEffect(() => {
               
                    try {
                        fetch(pokeUrl)
                        .then(response => response.json())
                        .then(data => {
                            setPokemonAbilities(data);
                            //console.log(data);
                            setLoaded(true);
                            for(let x of data.effect_entries) {
                                //console.log(x);
                                if(x.language.name == "en") {
                                    setEffect(x.effect);
                                    //onsole.log(effect);
                                }
                            }   
                        })
                    } catch(error) {
                        console.error(error)
                    }
                
                
    }, [pokeUrl]);

    return (
        <> 
        {/* <p>{effect}</p> */}
         {loaded ? 
         <><Card.Text class="hide">{effect}</Card.Text> </> : 
         <><Placeholder as={Card.Text} animation="glow">
         <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
         <Placeholder xs={6} /> <Placeholder xs={8} />
     </Placeholder></>}
        </>
    )


    
}
export default PokeAbility;