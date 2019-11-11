import React from 'react';
import styled from 'styled-components';
import { withFirebase } from "../../../Firebase";
import OneElement from './OneElement';
import PastVisits from './PastVisit';

const Wrapper = styled.div`
border: 1px solid black;
width:100%;
border-radius:10px;
box-shadow: 0 0 2px inset black;
max-height: 45%;
overflow-y: scroll;
`
const Txt = styled.h2`
padding: 10px 0px 10px 15px;
background-color: #deebdd;
background-image: linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%);
`
const Mess = styled.p`
padding: 15px 0px 15px 15px;

`

class Wizyty extends React.Component {
    state = {
        wizytyAll: [],
        wizyty: [],
        currentuser: '',
        pastVisit: [],
        futureVisit: []

    }

    componentDidMount() {
        this.props.firebase.Form().on('value', snapshot => {
            const value = snapshot.val()

            const currentuser = this.props.firebase.getCurrentEmail()

            const wizyty = value.Rezerwacje.rezerwacje.filter(function (user) {
                return user.user === currentuser
            })


            const pastVisit = []
            const futureVisit = []

            wizyty.map(item => {
                if (new Date().toISOString().slice(0, 10) > item.data)
                    pastVisit.push(item)
                else if (new Date().toISOString().slice(0, 10) === item.data && new Date().getHours() >= item.godzina.slice(0, 2))
                    pastVisit.push(item)
                else
                    futureVisit.push(item)
                return item


            })
            this.setState({
                pastVisit,
                futureVisit,
                wizyty,
                wizytyAll: value.Rezerwacje.rezerwacje,
                currentuser: this.props.firebase.getCurrentEmail()
            })


        }
        )
    }



    render() {
        console.log(new Date().getHours())

        return (
            <>
                <Wrapper>
                    <Txt>Nadchodzące Wizyty:</Txt>

                    {this.state.futureVisit.length === 0 ? <Mess>Nie masz zaplanowanych wizyt.</Mess> :


                        this.state.futureVisit.map(item =>
                            <OneElement
                                hours={item.godzina}
                                data={item.data}
                                doctor={item.lekarz}
                                placówka={item.placówka}
                                wizytyAll={this.state.wizytyAll}
                                currentuser={this.state.currentuser} />)}
                </Wrapper >

                <PastVisits pastVisits={this.state.pastVisit} />



            </>


        );
    }
}

export default withFirebase(Wizyty);
