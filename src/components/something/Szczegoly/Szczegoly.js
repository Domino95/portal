import React from 'react';
import styled from 'styled-components';

const Text = styled.a`
width:100%;
font-size: 1.8rem;
letter-spacing: 3px;
padding: 20px 0 5px 5px;
letter-spacing:1.1px;
display: flex;
border-bottom: 3px solid #ddd;
margin-bottom:10px;`

const Frame = styled.div`
background: #f4f5f6;
width:100%;
margin-top:10px;
padding: 10px 30px 20px 30px;
display:block;
`

const Page = styled.div`
width: 100%
margin-top:15px
box-shadow: 1.5px 2.9px 0px 0px #d6d6d6;
padding: 10px;
background: #fff;
border: 1px solid #ddd;
`

const Element = styled.div`
display: flex;
font-size: 1.5rem;
width: 10%;
font-weight: bold;
align-items: baseline;

`

const ElementUser = styled(Element)`
color: #00a271;
font-weight: normal;
width: 20%;
`

const Row = styled.div`
display:flex
padding:10px;`

const Comment = styled.a`
font-size: 1 rem;
letter-spacing: 1pxl;
display: block;
`

class Szczegoly extends React.Component {


    render() {

        const { data, godzina, lekarz, placówka, komentarz } = this.props.location.aboutProps
        console.log(komentarz)


        return (
            <>
                <Frame>
                    <Text>Szczegóły wizyty:</Text>

                    <Page>
                        <Row> <Element>   Data: </Element>   <ElementUser> {data} </ElementUser> </Row>
                        <Row>   <Element>   Godzina:  </Element> <ElementUser> {godzina} </ElementUser></Row>
                        <Row>   <Element> Doktor:  </Element> <ElementUser> {lekarz} </ElementUser></Row>
                        <Row>   <Element>  Placówka: </Element> <ElementUser> {placówka} </ElementUser></Row>
                    </Page>



                    <Text>Przebieg wizyty oraz wskazania doktora: </Text>
                    <Page>

                        {komentarz ? <Comment><pre>
                            {komentarz}</pre></Comment> : <h2>Brak komentarza</h2>}

                    </Page>

                </Frame>
            </>
        )
    }
}


export default Szczegoly