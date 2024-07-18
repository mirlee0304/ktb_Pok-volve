import axios from 'axios';
import { useEffect, useState } from 'react';

function PokemonService() {
    const BASE_URL = 'https://pokeapi.co/api/v2';
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const allPokemonData = [];
            for (let i=1; i<=151; i++) {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
                const koreanName = speciesResponse.data.names.find(name => name.language.name === 'ko')
                
                allPokemonData.push({ ...response.data, korean_name: koreanName.name });
            }
            setPokemonData(allPokemonData);
        };
        fetchData();

    }, []);

    
    return (

    );

}

export default PokemonService;