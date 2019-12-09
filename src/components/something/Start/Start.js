import React from 'react';
import { withFirebase } from "../../../Firebase";
import styled from 'styled-components'
import doctorss from './doctorss.png'

const H1Styled = styled.h1`
text-align: 1.5rem;
text-align:center;
color: #00a271;
`
const Page = styled.div`
background: #fff;
width: 100%
height:100%;
margin:auto;
border: 1px solid #e8e8e8;
box-shadow: 1.5px 2.9px 0px 0px #d6d6d6;
overflow: hidden;
padding: 20px;
`

const Frame = styled.div`
margin-top:10px;
background: #f4f5f6;
width:100%;
margin-top:20px;
padding: 18px;
height: 70vh;
`

const Content = styled.div`
width:100%;
height: 100%;
text-align: center;
`
const Doctors = styled.img`
padding-top:50px;
width:75%;
height:75%;
`


class Start extends React.Component {



    render() {
        return (
            <>
                <Frame>
                    <Page>
                        <H1Styled> Witaj na internetowym Portalu Pacjenta</H1Styled>
                        <Content>

                            <Doctors src={doctorss} alt="doctors" />
                        </Content>
                    </Page>
                </Frame>
            </>

        );
    }
}

export default withFirebase(Start);
