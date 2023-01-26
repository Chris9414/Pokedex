import React from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import pokeball from '../assets/images/pokeball.png'


const PokemonDetails = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [])



    console.log(pokemon)
    return (
        <div className='pokemon-details-container'>
            <div className='pokemon-stats-detail'>
                <div className={`pokemon_card_details ${pokemon.types?.[0].type.name}`}>
                    <img className='pokemon-img-details' src={pokemon.sprites?.other.home.front_default} alt="" />
                </div>
                <div className="pokemon-details-data">
                    <div className='pokemon-details-id'>
                        #{pokemon.id}
                    </div>
                    <div className='pokemon-details-name-container'>
                        <div className='line-name'></div>
                        <h2 className='pokemon-details-name'>{pokemon.name}</h2>
                        <div className='line-name'></div>
                    </div>
                    <div className='pokemon-details-item-container'>
                        <div>
                            <p className='pokemon-details-label'>Weight</p>
                            <span className='pokemon-details-item'>{pokemon.weight}</span>
                        </div>
                        <div>
                            <p className='pokemon-details-label'>Height</p>
                            <span className='pokemon-details-item'>{pokemon.height}</span>
                        </div>
                    </div>
                </div>
                <div className='pokemon-details-type'>
                    <div>
                        <h2>Type</h2>
                        <ul className='container-type-details'>
                            {pokemon.types?.map(type => (
                                <li key={type.url} className={`li-type-details ${type.type.name}-background-color`}>
                                    {type.type.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2>Abilities</h2>
                        <ul className='container-ability-details'>
                            {pokemon.abilities?.map(ability => (
                                <li key={ability.ability.url} className="li-ability-details">
                                    {ability.ability.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='stats-title'>
                        <h2>Stats</h2>
                        <div></div>
                        <img src={pokeball} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <div className='stats-progress'>
                                <span>HP</span>
                                <span>{pokemon.stats?.[0]?.base_stat}/150</span>
                            </div>
                            <div className={`progress-bar ${pokemon.types?.[0].type.name}-background-color`}></div>
                        </div>
                        <div>
                            <div className='stats-progress'>
                                <span>ATTACK</span>
                                <span>{pokemon.stats?.[1]?.base_stat}/150</span>
                            </div>
                            <div className={`progress-bar ${pokemon.types?.[0].type.name}-background-color`}></div>
                        </div>
                        <div>
                            <div className='stats-progress'>
                                <span>DEFENSE</span>
                                <span>{pokemon.stats?.[2]?.base_stat}/150</span>
                            </div>
                            <div className={`progress-bar ${pokemon.types?.[0].type.name}-background-color`}></div>
                        </div>
                        <div>
                            <div className='stats-progress'>
                                <span>SPEED</span>
                                <span>{pokemon.stats?.[5]?.base_stat}/150</span>
                            </div>
                            <div className={`progress-bar ${pokemon.types?.[0].type.name}-background-color`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='moves-container'>
                <div className='stats-title'>
                    <h2>Movements</h2>
                    <div></div>
                    <img src={pokeball} alt="" />
                </div>
                <ul className='move-container'>
                    {pokemon.moves?.map(move => (
                        <li key={move.move.url} className="move-box">
                            {move.move.name}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default PokemonDetails;