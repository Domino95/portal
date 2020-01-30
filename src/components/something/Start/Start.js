import React from 'react';
import { withFirebase } from "../../../Firebase";
import styled from 'styled-components'

const H1Styled = styled.h1`
text-shadow: 0 1px 2px rgba(0,0,0,0.25);
font-weight:900;
letter-spacing:2px;
text-align: 1.5rem;
text-align:center;
color: #00a271;
`
const Page = styled.div`
background: #fff;
width: 100%
height:50vh;
margin:auto;
border: 1px solid #e8e8e8;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
overflow: hidden;
padding: 20px;
`

const Frame = styled.div`
background: #f4f5f6;
width:100%;
margin-top:20px;
padding: 25px;
margin-bottom:5%;
`

const Contener = styled.div`
margin-top:8%;
display:flex;
justify-content:space-around;
`

const Block = styled.div`
height:20vh;
width:35vh;
border-radius:5px;
text-align:center;
padding:10px;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

`

const Content = styled.ul`
list-style-position: inside;
font-size: 1.1rem;
list-style-type: square;
`
const Listyled = styled.li`
padding:5px;
margin-top:8px;
`


const H2Styled = styled.h2`
letter-spacing:2px;
margin-top:10px;
font-weight:bold;
color: #00a271;
margin-bottom: 20px;
text-align:center;
`
class Start extends React.Component {



    render() {
        return (
            <>
                <Frame>
                    <Page>
                        <H1Styled> Witaj na internetowym Portalu Pacjenta</H1Styled>
                        <Contener>
                            <Block >
                                <H2Styled>O Nas</H2Styled>
                                <Content>
                                    <Listyled> Świadczymy usługi od 2015 roku</Listyled>
                                    <Listyled>Działamy na terenie Wrocławia </Listyled>
                                    <Listyled>Posiadamy 3 placówki </Listyled>

                                </Content>
                            </Block>
                            <Block >
                                <H2Styled>Przygotowanie do wizyty</H2Styled>
                                <Content>
                                    <Listyled> Dowód osobisty</Listyled>
                                    <Listyled> Ewentualne wyniki badań </Listyled>
                                    <Listyled>Karta płatnicza / gotówka </Listyled>

                                </Content>
                            </Block>
                            <Block>
                                <H2Styled>Kontakt</H2Styled>
                                <Content>
                                    <Listyled> tel. 43 822 45 67</Listyled>
                                    <Listyled> Email: portalpacjenta@gmail.com </Listyled>
                                    <Listyled>Biuro: Warszawa, Marszałkowska 5/3 </Listyled>

                                </Content>
                            </Block>
                        </Contener>


                    </Page>
                </Frame>
            </>

        );
    }
}

export default withFirebase(Start);
