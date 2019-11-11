import React from 'react';
import styled from 'styled-components'
import { withFirebase } from '../../../Firebase'

const Lables = styled.label`
display: block;
margin-top:20px;
font-size: 1.2rem;
`

const IpnutStyled = styled.input`
font-size: 15px;
padding: 10px;
height: 100%;
margin-left: 5px;
width: 30%;
border: none;
border-radius: 5px;
box-shadow: 0 0 3px inset black;
&::placeholder {
  font-size: 0.8rem;
}
&:focus {
  background-color: #ddd;
}
`


const UpdateDataUser = styled.button`
margin-top:20px;
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



class MojeKonto extends React.Component {
    state = {
        username: '',
        phoneNumber: '',
        pesel: '',
        email: ''

    }
    componentDidMount() {

        this.props.firebase.db.ref(`users/${this.props.firebase.getCurrentInfoUser().uid}`).on('value', snapshot => {
            const value = snapshot.val()



            this.setState({
                username: value.displayName,
                phoneNumber: value.phoneNumber,
                pesel: value.pesel,
                email: value.email

            })


        })
    }



    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    UpdateData = () => {
        this.props.firebase.db.ref(`users/${this.props.firebase.getCurrentInfoUser().uid}/`).set(
            {
                displayName: this.state.username,
                pesel: this.state.pesel,
                phoneNumber: this.state.phoneNumber,
                email: this.state.email
            }
        )
        alert('Dane pomyślnie zaktualizowane')
    }


    render() {

        return (
            <>
                <Lables htmlFor="name">Twoję imię i nazwisko
            <IpnutStyled type="text" id="name" name='username' value={this.state.username}
                        onChange={this.handleChange}
                    ></IpnutStyled>
                </Lables>


                <Lables htmlFor="email">Twój adres email
            <IpnutStyled type="email" id="email" name="email" onChange={this.handleChange} value={this.state.email} disabled ></IpnutStyled></Lables>

                <Lables htmlFor="phoneNumber">Twój numer telefonu
            <IpnutStyled type="phoneNumber" id="phoneNumber" name='phoneNumber' value={this.state.phoneNumber}
                        onChange={this.handleChange}
                    ></IpnutStyled></Lables>

                <Lables htmlFor="pesel">Twój numer pesel
            <IpnutStyled type="pesel" id="pesel" name="pesel" value={this.state.pesel}
                        onChange={this.handleChange}
                    ></IpnutStyled></Lables>


                <UpdateDataUser onClick={this.UpdateData}>Aktualizuj dane</UpdateDataUser>
            </>




        );
    }
}


export default withFirebase(MojeKonto);


//this.state.infoUser.l