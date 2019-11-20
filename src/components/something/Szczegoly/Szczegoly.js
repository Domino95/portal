import React from 'react';
import styled from 'styled-components';



const DetailsWrapper = styled.div`
margin-top: 50px;
border: 1px solid black;
width:100%;
border-radius:10px;
box-shadow: 0 0 2px inset black;
overflow: auto;
 `

const OneDetails = styled.div`
font-size: 1.2rem;
padding: 15px
`

const Comment = styled.div`
border-top: 1px solid
min-height:25vh;;
font-size: 1.6rem;
padding: 15px;
`

const Txt = styled.h2`
padding: 10px 0px 10px 15px;
background-color: #deebdd;
background-image: linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%);
 `

const Txt2 = styled.h2`
 border-top: 1px solid;
 margin-top:10px;
 padding: 10px 0px 10px 15px;
background-color: #deebdd;
background-image: linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%);
 `

class Szczegoly extends React.Component {


    render() {
        const { data, godzina, lekarz, placówka } = this.props.location.aboutProps



        return (
            <>
                <DetailsWrapper>
                    <Txt>Szczegóły wizyty:</Txt>
                    <OneDetails>   <b>Data:</b>   {data}  </OneDetails>
                    <OneDetails>   <b>Godzina:</b>   {godzina}  </OneDetails>
                    <OneDetails> <b>Doktor:</b> {lekarz}  </OneDetails>
                    <OneDetails>  <b>Placówka:</b>  {placówka} </OneDetails>



                    <Txt2>Przebieg wizyty oraz wskazania doktora: </Txt2>
                    < Comment>
                        <text> DUPA
                         BLADA
                         OLGA
                         BABA
                         JAGA

                         DUPA
                         BLADA
                         OLGA
                         BABA
                        JAGA</text>
                    </Comment>
                </DetailsWrapper>
            </>
        );
    }
}


export default Szczegoly