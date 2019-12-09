import React from 'react';
import styled from "styled-components";

const InputData = styled.input`
  font-size: 15px;
  padding: 10px;
  height: 40px;
  width: 13%;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 3px inset black;
  background-color: #fff;

  &::placeholder {
    font-size: 0.8rem;
  }`

const InputUser = styled.select`
font-size: 15px;
padding: 10px;
height: 40px;
width: 13%;
border: none;
border-radius: 5px;
box-shadow: 0 0 3px inset black;
background-color: #fff;
margin-right: 2%;

&::placeholder {
  font-size: 0.8rem;
}
`

const Container = styled.div`
justify-content: flex-end;
width: 100%;
text-align: right;
margin-left: 2%;

`



const InputsSecretariat = (props) => {
    const { selectedUser, users, handleSelect, date } = props
    return (
        <Container>
            <InputUser
                value={selectedUser ? selectedUser : ""}
                id='selectedUser'
                onChange={handleSelect}
            >

                <option value='Wszyscy Pacjenci' >
                    Wszyscy Pacjenci
                         </option>


                {users.map(item =>
                    <option value={item[1].displayName} key={Math.random(100000)}>
                        {item[1].displayName}
                    </option>
                )}
            </InputUser>

            <InputData
                id="date"
                type="date"
                value={date}
                max="2020-04-07"
                onChange={handleSelect} />

        </Container>
    );
}

export default InputsSecretariat;