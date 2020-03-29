import React from 'react';
import styled from 'styled-components'
import { withFirebase } from '../../../Firebase'

const Page = styled.div`
background: #fff;
width: 100%
height:90%;
margin:auto;
border: 1px solid #e8e8e8;
box-shadow: 1.5px 2.9px 0px 0px #d6d6d6;
overflow: hidden;
padding-bottom: 10px;
padding-left: 20px;
`
const Frame = styled.div`
margin-top:10px;
background: #f4f5f6;
width:100%;
margin-top:50px;
padding: 15px;
`
const Lables = styled.label`
display: block;
margin-top:20px;
font-size: 1rem;
margin-bottom:5px;
`
const IpnutStyled = styled.input`
font-size: 14px;
padding: 10px;
margin-left: 5px;
width: 30%;
border: none;
border-radius: 5px;
position: absolute;
left: 28%;
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
font-size: 0.8rem;
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
                <Frame>
                    <Page>


                        <Lables htmlFor="name">Twoje imię i nazwisko
            <IpnutStyled type="text" id="name" name='username' value={this.state.username}
                                onChange={this.handleChange} disabled
                            ></IpnutStyled>
                        </Lables>


                        <Lables htmlFor="email">Twój adres email
            <IpnutStyled type="email" id="email" name="email" onChange={this.handleChange} value={this.state.email} disabled ></IpnutStyled></Lables>

                        <Lables htmlFor="phoneNumber">Twój numer telefonu
            <IpnutStyled type="tel" id="phoneNumber" name='phoneNumber' value={this.state.phoneNumber}
                                onChange={this.handleChange}
                            ></IpnutStyled></Lables>

                        <Lables htmlFor="pesel">Twój numer PESEL
            <IpnutStyled type="pesel" id="pesel" name="pesel" value={this.state.pesel}
                                onChange={this.handleChange}
                            ></IpnutStyled></Lables>


                        <UpdateDataUser onClick={this.UpdateData}>Aktualizuj dane</UpdateDataUser>
                    </Page>
                </Frame>
            </>




        );
    }
}


export default withFirebase(MojeKonto);



