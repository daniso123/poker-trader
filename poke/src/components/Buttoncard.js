import React from 'react';
import './styles/Buttoncard.css';

export default function CardButton({ type, onClick }) {

    
    return (
        <div className='ButtonContainer' type={type} onClick={onClick} >

            Escolher
        </div>
    )
}