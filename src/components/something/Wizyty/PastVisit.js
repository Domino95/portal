import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Frame = styled.div`
background: #f4f5f6;
margin-top:10px;
width:100%;
padding: 10px 30px 30px 30px;
max-height: 47%;
display:block;
overflow: auto;
`
const Text = styled.a`
width:100%;
font-size: 1.8rem;
letter-spacing: 3px;
padding: 20px 0 5px 5px;
letter-spacing:1.1px;
display: flex;
border-bottom: 3px solid #ddd;
margin-bottom:10px;`

const FrameScroll = styled.div`
overflow: auto;
max-height: 18vh;
padding-bottom:3px;

`

const Page = styled.div`
width: 100%
margin-top:15px
box-shadow: 1.5px 2.9px 0px 0px #d6d6d6;
padding: 10px;
background: #fff;
border: 1px solid #ddd;
`



const ButtonStyled = styled.button`
width: 145px;
font-size: 1rem;
height: 50px;
background: rgb(64, 64, 64);
color: white;
border: 5px solid white;
border-radius: 20px;
transition: 0.3s;
&: hover,
&: focus {
    box - shadow: 0 0 2px 2px #343434;
}
`
const OneElement = styled.div`
width: 100%;
padding-left: 20px
display: flex;
width: 100%%;
align-items: baseline;
`

const Element = styled.h2`
display: flex;
font-size: 1.5rem;
width: 20%;`

const ElementHour = styled.h2`
display: flex;
font-size: 1.5rem;
width: 20%;
color: #00a271;`


const ElementNoVisit = styled.h2`
display: flex;
font-size: 1.5rem;
width: 100%;
padding: 10px 20px 10px 6px;`




const PastVisits = (props) => {



    return (

        <>
            <Frame>
                <Text>Odbyte Wizyty</Text>


                {props.pastVisits.length === 0 ?
                    <Page>
                        <OneElement>
                            <ElementNoVisit>
                                Nie odbyłeś jeszcze żadnych wizyt w naszych placówkach
                        </ElementNoVisit>
                        </OneElement>
                    </Page> :


                    <FrameScroll >
                        {props.pastVisits.map(item =>
                            <Page key={Math.random(1000000)}>
                                <OneElement>

                                    <ElementHour>{item.godzina}</ElementHour>
                                    <Element>{item.data} </Element>
                                    <Element> {item.lekarz}</Element>
                                    <Element>{item.placówka} </Element>
                                    <NavLink to={{
                                        pathname: '/user/wizyty/szczegoly',
                                        aboutProps: {
                                            godzina: item.godzina,
                                            data: item.data,
                                            lekarz: item.lekarz,
                                            placówka: item.placówka,
                                            komentarz: item.komentarz ? item.komentarz : null
                                        }
                                    }}>
                                        < ButtonStyled>Szczegóły</ButtonStyled>
                                    </NavLink>
                                </OneElement>
                            </Page>
                        )}
                    </FrameScroll>
                }
            </Frame>
        </>
    );
}




export default PastVisits;