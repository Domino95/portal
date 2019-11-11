import React from 'react';
import styled from "styled-components";




const InputStyle = styled.select`
  font-size: 15px;
  padding: 10px;
  height: 40px;
  margin-right: 20px;
  width: 17%;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 3px inset black;
  background-color: #fff;;
  
  &::placeholder {
    font-size: 0.8rem;
  }
 
`
const InputData = styled.input`
  font-size: 15px;
  padding: 10px;
  height: 40px;
  margin-right: 20px;
  width: 17%;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 3px inset black;
  background-color: #fff;
  
  &::placeholder {
    font-size: 0.8rem;
  }
 
`


const Inputs = ({
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
    <>
      <InputStyle
        value={selectedplacowka ? selectedplacowka : ""}
        id='selectedplacowka'
        onChange={handleSelect}>
        <option value='' disabled>
          Wybierz placówkę
        </option>
        {placowki.map(item => (
          <option value={item.name} key={item.id}>
            {item.name}
          </option>
        ))}
      </InputStyle>

      < InputStyle
        value={selectedspecialization ? selectedspecialization : ""}
        onChange={handleSelect}
        id='selectedspecialization'>
        <option value='' disabled>
          Wybierz specjalizację
      </option>

        {specialization.map(item => (
          <option value={item.name} key={item.id}>
            {item.name}
          </option>
        ))}
      </InputStyle>

      < InputStyle
        value={selecteddoctor ? selecteddoctor : ""}
        onChange={handleSelect}
        id='selecteddoctor'>
        <option value='' disabled>
          Wybierz doktora
      </option>
        {doctors.map(item => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}

      </InputStyle>

      < InputData
        id="date"
        onChange={handleSelect}
        value={date}
        type="date"
        min={new Date().toISOString().slice(0, 10)}
        max="2020-04-07"
      />
    </>
  );
}

export default Inputs;