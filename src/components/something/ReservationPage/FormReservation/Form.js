import React from 'react';
import styled from 'styled-components';
import Inputs from './Inputs'
const FormStyle = styled.div`
width: 100%;
border-radius:5px;
height: 10%;
align-items: center;
justify-content: center;
display: flex;
padding: 15px;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
background-image: linear-gradient(315deg, #00a271 0, #bbdbbe 74%);
`

const Form = ({
    handleSelect,
    doctors,
    placowki,
    specialization,
    selectedspecialization,
    selectedplacowka,
    date,
    selecteddoctor,
    handleDate
}) => {

    return (

        <FormStyle>
            <Inputs
                date={date}
                selectedplacowka={selectedplacowka}
                specialization={specialization}
                doctors={doctors}
                placowki={placowki}
                selectedspecialization={selectedspecialization}
                handleSelect={e => handleSelect(e)}
                selecteddoctor={selecteddoctor}
            />

        </FormStyle >
    );

}

export default Form;