import React from 'react';
import styled from 'styled-components'
import { withFirebase } from "../../../Firebase";


const BoxElement = styled.div`
font-size: 1.3rem;
display:flex;
justify-content: space-around;
align-items: baseline;
`

const OneElement = styled.div`
width: 33%;
`
const Page = styled.div`
background: #fff;
width: 100%
height:80%;
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



class FutureVisit extends React.Component {

    state = {
        wizyty: [],
        futureVisit: [],
        pastVisit: [],
        currentVisit: [],
        currentdoctor: '',
        users: []
    }

    componentWillMount() {
        this.getData()
    }

    componentDidMount() {
        this.getData()
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

            const pastVisit = []
            const futureVisit = []

            filterdoctor.map(item => {
                if (new Date().toISOString().slice(0, 10) > item.data)
                    pastVisit.push(item)
                else if (new Date().toISOString().slice(0, 10) === item.data && new Date().getHours() >= item.godzina.slice(0, 2))
                    pastVisit.push(item)
                else
                    futureVisit.push(item)
                return item
            })
            this.setState({ pastVisit, futureVisit })

        })

    }

    getDisplayName = (user) => {
        let find = this.state.users.find(item => item[1].email === user)
        return find[1].displayName
    }



    render() {
        console.log(this.state.users)
        return (
            <>
                {this.state.futureVisit.length === 0 ? <Page><Mess>Nie masz zaplanowanych wizyt</Mess> </Page> :
                    this.state.futureVisit.map(item => (
                        <Page key={Math.random(10000000000)}>
                            <BoxElement >
                                <OneElement>{item.godzina}</OneElement>
                                <OneElement> <strong>{item.data}</strong></OneElement>
                                <OneElement> <LoggenInAstyle className="fas fa-user" />{this.getDisplayName(item.user)}</OneElement>
                            </BoxElement>
                        </Page>
                    ))}
            </>
        );
    }
}

export default withFirebase(FutureVisit);