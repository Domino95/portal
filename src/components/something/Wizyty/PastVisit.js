import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const PastVisitsWrapper = styled.div`
margin-top: 50px;
border: 1px solid black;
width:100%;
max-height: 45%;
border-radius:10px;
box-shadow: 0 0 2px inset black;
overflow: auto;
box-shadow: 1.5px 2.9px 0px 0px #d6d6d6;
 `
const Txt = styled.h2`
padding: 10px 0px 10px 15px;
background-color: #deebdd;
background-image: linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%);
 `
const Mess = styled.p`
 padding: 15px 0px 15px 15px;
 
 `

const PastVisitsStyled = styled.div`
display: flex;
justify-content: space-around;
font-size: 1.2rem;
align-items: center;
border-top: 1px solid;
padding: 15px 0 15px;
`

const ReservationButtonStyle = styled.button`
width: 135px;
font-size: 1rem;
height: 50px;
background: rgb(64, 64, 64);
color: white;
border: 5px solid white;
border-radius: 20px;
transition: 0.3s;

`





const PastVisits = (props) => {



    return (

        <>
            <PastVisitsWrapper>
                <Txt>Odbyte Wizyty:</Txt>


                {props.pastVisits.length === 0 ?
                    <Mess>Nie odbyłeś jeszcze żadnych wizyt w naszych placówkach.</Mess> :


                    props.pastVisits.map(item =>
                        <PastVisitsStyled key={Math.random(1000000)}>

                            <p>{item.godzina}</p>
                            <p>{item.data}</p>
                            <p>{item.lekarz}</p>
                            <p>{item.placówka}</p>
                            <NavLink to={{
                                pathname: '/wizyty/szczegoly',
                                aboutProps: {
                                    godzina: item.godzina,
                                    data: item.data,
                                    lekarz: item.lekarz,
                                    placówka: item.placówka
                                }
                            }}>
                                < ReservationButtonStyle>Szczegóły</ReservationButtonStyle>
                            </NavLink>
                        </PastVisitsStyled>

                    )}




            </PastVisitsWrapper>
        </>
    );
}

export default PastVisits;