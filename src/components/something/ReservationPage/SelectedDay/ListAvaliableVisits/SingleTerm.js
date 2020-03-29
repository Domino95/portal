import React from 'react';
import styled from 'styled-components'
import { withFirebase } from "../../../../../Firebase";

const SingleTermStyle = styled.div`
border-bottom: 1px solid #00a271;
width:100%;
height: 10%;
display: flex;
justify-content: space-around;
padding: 5px 0px 5px 10px;
align-items: baseline;
`
const ReservationButtonStyle = styled.button`
width: 135px;
font - size: 0.9rem;
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
const ReservationButonPast = styled.button`
width: 135px;
font - size: 0.9rem;
height: 50px;
background: rgb(235, 235, 235);
color: black;
border: 5px solid white;
border-radius: 20px;
transition: 0.3s;
&: hover,
&: focus {
    box - shadow: 0 0 2px 2px #343434;
}
`
const ReservationButtonStyleRed = styled.button`
width: 135px;
font - size: 1rem;
height: 50px;
background: rgb(220,20,60);
color: white;
border: 5px solid white;
border-radius: 20px;
transition: 0.3s;
&: hover,
&: focus {
    box - shadow: 0 0 2px 2px #343434;
}
`
class SingleTerm extends React.Component {

    state = {
        rezerwacje: "",
        PastVisit: false
    }
    addReservation = () => {

        this.props.firebase.db.ref('Form/Rezerwacje/rezerwacje/' + this.state.rezerwacje.length).set(
            {
                godzina: this.props.hours,
                data: this.props.date,
                lekarz: this.props.selecteddoctor,
                placówka: this.props.institutions,
                user: this.props.firebase.getCurrentEmail()
            }
        )
        alert("Rezerwacja dodana pomyslnie!")
        console.log(this.state.rezerwacje.length, this.props.firebase.getCurrentEmail())
    }
    componentDidMount() {
        this.props.firebase.Form().on("value", snapshot => {
            const value = snapshot.val();
            this.setState({
                rezerwacje: value.Rezerwacje.rezerwacje
            })
        })
    }
    render() {
        const {
            institutions,
            selectedspecialization,
            selecteddoctor,
            hours,
            czyZarezerwowane,
            date

        } = this.props
        return (
            <>
                < SingleTermStyle >
                    <h3>{hours}</h3>
                    <p>{institutions} </p>
                    <p>{selectedspecialization} </p>
                    <h4>{selecteddoctor}  </h4>

                    {new Date().toISOString().slice(0, 10) === date && new Date().getHours() >= hours.slice(0, 2) ?
                        <ReservationButonPast disabled>ODBYTA</ReservationButonPast> :
                        czyZarezerwowane ?
                            <ReservationButtonStyleRed disabled> ZAREZERWOWANE</ReservationButtonStyleRed> :
                            <ReservationButtonStyle onClick={this.addReservation}> ZAREZERWUJ</ReservationButtonStyle>}

                </SingleTermStyle >

            </>
        )
    }
}
export default withFirebase(SingleTerm);