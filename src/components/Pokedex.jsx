import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom'
import Pagination from './Pagination';

const Pokedex = () => {

    const userName = useSelector(state => state.userName)

    const [pokemon, setPokemon] = useState([])
    const [inputSearch, setInputSearch] = useState("")
    const [types, settypes] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, SetCurrentPage] = useState(1)
    const [pokemonPerPage] = useState(12)


    const navigate = useNavigate()


    //https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279


    useEffect(() => {
        const pokemonPost = async () => {
            setLoading(true)
            const resPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279')
                .then(res => setPokemon(res.data.results))
            const resType = await axios.get('https://pokeapi.co/api/v2/type/')
                .then(res => settypes(res.data.results))
            setLoading(false)
        }
        pokemonPost()
    }, [])

    const indexOfLastPost = currentPage * pokemonPerPage
    const indexOfFirstPost = indexOfLastPost - pokemonPerPage
    const currentPost = pokemon.slice(indexOfFirstPost, indexOfLastPost)

    const totalPages = Math.ceil(pokemon.length / pokemonPerPage)

    const search = () => {
        navigate(`/pokedex/${inputSearch.toLowerCase()}`)
    }

    const filterType = e => {
        axios.get(e.target.value)
            .then(res => setPokemon(res.data.pokemon))
    }


    return (
        <div>

            <p className='initial-text'><span className='initial-hello'>Welcome <b>{userName}, </b></span>Here you can find your favorite Pokemon!.</p>
            <div className='pokedex-filter-container'>
                <div className='pokedex-search'>
                    <input type="text" placeholder='search Pokemon' value={inputSearch} onChange={e => setInputSearch(e.target.value)} />
                    <button onClick={search}>Search</button>
                </div>
                <h2>Find it by its type:</h2><select className="select-filter" onChange={filterType} name="" id="">
                    {types.map(type => (
                        <option value={type.url} key={type.url}>{type.name}</option>
                    ))}
                </select>
            </div>


            <ul className='pokemon_list'>
                {currentPost.map(pokemon => (
                    <PokemonCard
                        url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                        key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                    />
                ))}
            </ul>
            <Pagination currentPage={currentPage} setCurrentPage={SetCurrentPage} totalPages={totalPages} />
        </div>
    );
};

export default Pokedex;