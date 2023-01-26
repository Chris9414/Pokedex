import React from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {

    const {id} = useParams();

    const [pokemon,setPokemon] = useState({})

    useEffect ( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then( res => setPokemon(res.data))
    },[])

    console.log(pokemon)
    return (
        <div>
            <h1>Pekemon Details</h1>
            <p>Nombre : {pokemon.name}</p>
            <img src={pokemon.sprites?.other.home.front_default} alt="" />
        </div>
    );
};

export default PokemonDetails;