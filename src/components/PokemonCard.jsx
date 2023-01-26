import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({url}) => {

    const [pokemon, setPokemon] = useState({})
    const [stats,setStats] = useState([])
    const navigate = useNavigate()

    useEffect( () => {
        axios.get(url)
        .then( res => setPokemon(res.data))
        axios.get(url)
        .then(res => setStats(res.data.stats))
    
    },[])
    
    console.log(pokemon)

    const filterStats = () => {
        stats.splice(3,1)
    }

    filterStats()

    


    return (
        <li className={`pokemon_card ${pokemon.types?.[0].type.name}`}>
            <div onClick={() => navigate(`/pokedex/${pokemon.id}`)} >
                <img src={pokemon.sprites?.other.home.front_default} alt="" className='pokemon-img'/>
                <div className='card-header'>

                </div>
                <div>
                    <div className='info-container'>
                        <h2 className={`pokemon-name ${pokemon.types?.[0].type.name}-color`}>{pokemon.name}</h2>
                        <ul className='pokemon-type-container'>    
                            {pokemon.types?.map( type => (
                                <li key={type.id} className='pokemon-type'>
                                    {" "}{type.type.name}
                                </li>
                            ))}
                        </ul>
                        <p className='label-type'>Type</p>
                    </div>
                    <div>
                        <div className='data-container'>
                            <ul className='data-stats'>
                                {stats.map( stat => (
                                    <li key={stat.id}>
                                        <p className='stats-label'>{stat.stat.name}</p>
                                        <span className={`stats-data ${pokemon.types?.[0].type.name}-color`}>{stat.base_stat}</span>
                                    </li>
                                 ))}
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </li>
    );
};

export default PokemonCard;