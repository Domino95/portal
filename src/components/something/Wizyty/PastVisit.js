import React from 'react'
import styled from 'styled-components';

const PastVisitsWrapper = styled.div`
margin-top: 50px;
border: 1px solid black;
width:100%;
max-height: 45%;
border-radius:10px;
box-shadow: 0 0 2px inset black;
overflow: auto;

 `
const Txt = styled.h2`
padding: 10px 0px 10px 15px;
background-color: #deebdd;
background-image: linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%);
 `
const Mess = styled.p`
 padding: 15px 0px 0px 15px;
 
 `

const PastVisitsStyled = styled.div`
display: flex;
justify-content: space-around;
font-size: 1.2rem;
align-items: center;
border-top: 1px solid;
padding: 15px 0 15px;
  `





const PastVisits = (props) => {



    return (

        <>
            <PastVisitsWrapper>
                <Txt>Odbyte Wizyty:</Txt>


                {props.pastVisits.length === 0 ?
                    <Mess>Nie odbyłeś jeszcze żadnych wizyt w naszych placówkach.</Mess> :


                    props.pastVisits.map(item =>
                        <PastVisitsStyled>
                            <p>{item.godzina}</p>
                            <p>{item.data}</p>
                            <p>{item.lekarz}</p>
                            <p>{item.placówka}</p>

                        </PastVisitsStyled>

                    )}




            </PastVisitsWrapper>
        </>
    );
}

export default PastVisits;