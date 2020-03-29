import React from 'react'
import styled from 'styled-components';
import { withFirebase } from "../../../Firebase";
const Page = styled.div`
width: 100%
margin-top:15px
box-shadow: 1.5px 2.9px 0px 0px #d6d6d6;
padding: 10px;
background: #fff;
border: 1px solid #ddd;
`
const ButtonStyled = styled.button`
width: 135px;
font-size: 0.8rem;
height: 45px;
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
font-size: 1rem;
width: 20%;`

const ElementHour = styled.h2`
display: flex;
font-size: 1rem;
width: 20%;
color: #00a271;`

class FutureVisits extends React.Component {
    deleteReservation = () => {
        const rezerwacje = this.props.wizytyAll
        const index = rezerwacje.findIndex(item =>
            item.godzina === this.props.hours &&
            item.data === this.props.data &&
            item.lekarz === this.props.doctor &&
            item.placówka === this.props.placówka &&
            item.user === this.props.currentuser)

        rezerwacje.splice(index, 1)


        this.props.firebase.db.ref('Form/Rezerwacje/rezerwacje/').set(
            rezerwacje
        )
        alert("Rezerwacja pomyślnie usunięta!")
    }
    render() {
        const { hours, data, doctor, placówka } = this.props
        return (
            < Page >

                <OneElement>
                    <ElementHour>{hours}</ElementHour>
                    <Element>{data}</Element>
                    <Element>{doctor}</Element>
                    <Element>{placówka}</Element>
                    <ButtonStyled onClick={this.deleteReservation}>Odwołaj Wizytę</ButtonStyled>

                </OneElement>
            </Page >
        );
    }
}

export default withFirebase(FutureVisits);