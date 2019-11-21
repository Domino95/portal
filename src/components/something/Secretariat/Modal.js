import React from 'react';
import styled from 'styled-components'

const ModalBackground = styled.div`
height:100%;
width: 100%;
left: 0;
top:0;
background-color: rgb(0,0,0,0.7);
display: flex;
justify-content: center;
align-items: center;
position:absolute;
`
const ModalContent = styled.div`
width: 45%;
height: 45%;
background-color: white;
border-radius:4px;
padding:20px;
text-align: center;
opacity: 1;
position:absolute;
padding-top:8%;

`

const Text = styled.div`
font-size: 1.5rem;
width: 50%;
margin: 10px auto;
display:flex;
align-items: baseline;
color: #00a271;
`

const Text2 = styled.p`
font-size: 1.5rem;
font-weight:bold;
margin-left: 22%
position:absolute;
color:black;

`

const Modal = (props) => {
    return (
        <>
            <ModalBackground onClick={() => props.ChangeModal()}>
                <ModalContent >
                    <Text> Imię i nazwisko  <Text2>{props.user.displayName}</Text2> </Text>
                    <Text> Email            <Text2>{props.user.email}</Text2> </Text>
                    <Text> Pesel            <Text2>{props.user.pesel}</Text2></Text>
                    <Text> Numer telefonu   <Text2>{props.user.phoneNumber}</Text2></Text>
                </ModalContent>

            </ModalBackground>
        </>
    );
}

export default Modal;