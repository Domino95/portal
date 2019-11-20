import React from 'react';
import styled from 'styled-components';
import Inputs from './Inputs'






const FormStyle = styled.div`
width: 100%;
border-radius:10px;
height: 10%;
align-items: center;
justify-content: center;
display: flex;
padding: 15px;
box-shadow: 1.5px 2.9px 0px 0px #d6d6d6;
background-color: #deebdd;
background-image: linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%);
`




const Form = ({
    handleSelect,
    doctors,
    placowki,
    specialization,
    selectedspecialization,
    selectedplacowka,
    date,
    selecteddoctor
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