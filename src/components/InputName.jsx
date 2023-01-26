import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/slices/userName.slice';
import logo from '../assets/images/pokemonLogo.png'
import quien from '../assets/images/quien.webp'
import pokeball from '../assets/images/pokeball.png'
import hello from '../assets/images/hello.gif'


const InputName = () => {

    const userName = useSelector(state => state.userName)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("")

    const clickButtom = () => {
        dispatch(changeUserName(inputValue))
        navigate('/Pokedex')
    }

    return (
        <div className='home-container'>
            <div className='name-container'>
                <img src={hello} alt="" className='hello'/>
                <h1>Hello Trainer!</h1>
                <p>To start this adventure, tell me what is your name?</p>
                <div className='home-input-container'>
                    <img src={pokeball} alt="" />
                    <input type="text" placeholder="Your name..." value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                    <button onClick={clickButtom}>Start!</button>
                </div>
            </div>
            <div className='home-img-container'>
                <img src={logo} alt="" />
                <img src={quien} alt="" className='quien'/>
            </div>
        </div>
    );
};

export default InputName;