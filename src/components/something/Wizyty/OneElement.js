import React from 'react'
import styled from 'styled-components';
import { withFirebase } from "../../../Firebase";


const OneElemenStyled = styled.div`
display: flex;
justify-content: space-around;
font-size: 1.2rem;
align-items: center;
border-top: 1px solid;
padding: 15px 0 15px;


 `

const ButtonStyled = styled.button`
width: 135px;
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

class OneElement extends React.Component {






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


            <OneElemenStyled>
                <p>{hours}</p>
                <p>{data}</p>
                <p>{doctor}</p>
                <p>{placówka}</p>
                <ButtonStyled onClick={this.deleteReservation}>Odwołaj Wizytę</ButtonStyled>

            </OneElemenStyled>


        );
    }
}

export default withFirebase(OneElement);