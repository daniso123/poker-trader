import React from 'react';
import { ButtonContainer2 } from './styles/ButtonHistory';

export default function HistoryButton({ type, label, onClick }) {

    return(
        <ButtonContainer2 type={type} onClick={onClick} >
            {label}
        </ButtonContainer2>
    )
}