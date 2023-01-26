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

    console.log(stats)

    


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
                                    <li>
                                        <p className='stats-label'>{stats[0]?.stat.name}</p>
                                        <span className={`stats-data ${pokemon.types?.[0].type.name}-color`}>{stats[0]?.base_stat}</span>
                                    </li>
                                    <li>
                                        <p className='stats-label'>{stats[1]?.stat.name}</p>
                                        <span className={`stats-data ${pokemon.types?.[0].type.name}-color`}>{stats[1]?.base_stat}</span>
                                    </li>
                                    <li>
                                        <p className='stats-label'>{stats[2]?.stat.name}</p>
                                        <span className={`stats-data ${pokemon.types?.[0].type.name}-color`}>{stats[2]?.base_stat}</span>
                                    </li>
                                    <li>
                                        <p className='stats-label'>{stats[3]?.stat.name}</p>
                                        <span className={`stats-data ${pokemon.types?.[0].type.name}-color`}>{stats[3]?.base_stat}</span>
                                    </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </li>
    );
};

export default PokemonCard;