import React from 'react';
import styled from 'styled-components'
import { withFirebase } from "../../../Firebase";
import Comment from './Comment'

const BoxElement = styled.div`
display:flex;
justify-content: space-around;
align-items: baseline;
font-size: 1.3rem;

`

const OneElement = styled.h4`
width: 33%;
padding-left: 20px;
font-size: 1.3rem;

`
const Page = styled.div`
background: #fff;
width: 100%
height:7%;
margin-top:15px
box-shadow: 1.5px 2.9px 0px 0px #d6d6d6;
padding: 15px;
`
const LoggenInAstyle = styled.div`
font-size: 1.7rem;
color: black;
padding: 5px;`

const Mess = styled.div`
font-size: 1.3rem;

`
const ReservationButtonStyle = styled.button`
width: 145px;
font-size: 0.85rem;
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



class CurrentVisit extends React.Component {

    state = {
        currentVisit: [],
        currentdoctor: '',
        users: [],
        commentActive: false,
        wizyty: []
    }


    addComment = () => {
        this.setState({ commentActive: !this.state.commentActive })
    }

    componentWillMount() {
        this.getData()
    }

    componentDidMount() {
        this.getData()
    }

    handleChange = (e) => {
        this.setState({ comment: e.target.value })
    }


    getData() {
        this.props.firebase.db.ref(`users/${this.props.firebase.getCurrentInfoUser().uid}`).on('value', snapshot => {
            const value = snapshot.val()
            this.setState({ currentdoctor: value.displayName })
        })
        this.props.firebase.db.ref(`users`).on('value', snapshot => {
            const value = snapshot.val()

            let users = Object.keys(value).map(function (key) {
                return [key, value[key]]
            })
            this.setState({ users })
        })

        this.props.firebase.Form().on('value', snapshot => {
            const value = snapshot.val()
            const filterdoctor = value.Rezerwacje.rezerwacje.filter(item => item.lekarz === this.state.currentdoctor)


            const currentVisit = []

            filterdoctor.map(item => {

                if (new Date().toISOString().slice(0, 10) === item.data && new Date().getHours() === parseInt((item.godzina.slice(0, 2))))
                    currentVisit.push(item)
                return item
            })
            this.setState({ currentVisit })
        })


    }

    getDisplayName = (user) => {
        let find = this.state.users.find(item => item[1].email === user)
        return find[1].displayName
    }



    render() {
        return (
            <>
                {
                    this.state.currentVisit.length === 0 ? <Page><Mess>Nie masz obecnie wizyty</Mess> </Page> :
                        this.state.currentVisit.map(item => (
                            <Page key={Math.random(10000000000)}>
                                <BoxElement >
                                    <OneElement>{item.godzina}</OneElement>
                                    <OneElement> <strong>{item.data}</strong></OneElement>
                                    <OneElement> <LoggenInAstyle className="fas fa-user" />{this.getDisplayName(item.user)}</OneElement>
                                    <ReservationButtonStyle onClick={() => this.addComment()}> Dodaj komentarz</ReservationButtonStyle>
                                </BoxElement>
                                {this.state.commentActive ? this.state.currentVisit.map(item => (
                                    <Comment key={item.user}
                                        godzina={item.godzina}
                                        data={item.data}
                                        placówka={item.placówka}
                                        lekarz={item.lekarz}
                                        user={item.user}
                                        comment={item.komentarz}
                                        addComment={() => this.addComment()}
                                        clicK={this.clicK}
                                    />)) : null}
                            </Page>
                        ))
                }
            </>
        );
    }
}

export default withFirebase(CurrentVisit);