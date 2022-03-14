import React from 'react';
import { ButtonContainer } from './styles/Buttoncard';
import { CgPokemon } from "react-icons/cg";


export default function CardButton({ type, onClick }) {

    return(
        <ButtonContainer type={type} onClick={onClick} >
            <CgPokemon/>
            
        </ButtonContainer>
    )
}