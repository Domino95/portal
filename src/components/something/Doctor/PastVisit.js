import React from 'react';
import styled from 'styled-components'
import { withFirebase } from "../../../Firebase";


const BoxElement = styled.div`
font-size: 1.3rem;
display:flex;
justify-content: space-around;
align-items: baseline;
`

const OneElement = styled.h4`
width: 33%;
padding-left: 20px;
`
const Page = styled.div`
background: #fff;
width: 100%
height:7%;
margin-top:15px
box-shadow: 1.5px 2.9px 0px 0px #d6d6d6;
padding: 15px;
overflow: auto;
`
const LoggenInAstyle = styled.div`
font-size: 1.7rem;
color: black;
padding: 5px;`

const Mess = styled.div`
font-size: 1.3rem;
`
const FilterDay = styled.input`
position:absolute;
right: 14%;
top: 27%;
`

class PastVisits extends React.Component {

    state = {
        wizyty: [],
        pastVisit: [],
        currentdoctor: '',
        users: [],
        date: new Date().toISOString().slice(0, 10),

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

            const wizyty = []

            filterdoctor.map(item => {
                if (new Date().toISOString().slice(0, 10) > item.data)
                    wizyty.push(item)
                else if (new Date().toISOString().slice(0, 10) === item.data && new Date().getHours() > item.godzina.slice(0, 2))
                    wizyty.push(item)
                return item
            })
            let filterVisit = wizyty.filter(item => item.data === this.state.date)
            this.setState({ wizyty, pastVisit: filterVisit })

        })

    }

    getDisplayName = (user) => {
        let find = this.state.users.find(item => item[1].email === user)
        return find[1].displayName
    }

    handleSelect = (e) => {
        let filterVisit = this.state.wizyty.filter(item => item.data === e.target.value)
        this.setState({ [e.target.id]: e.target.value, pastVisit: filterVisit });
        console.log(this.state.pastVisit)
    }

    render() {
        return (
            <>
                <FilterDay id="date"
                    type="date"
                    value={this.state.date}
                    max="2020-04-07"
                    onChange={this.handleSelect} />

                {this.state.pastVisit.length === 0 ? <Page><Mess>Nie masz odbytych wizyt</Mess> </Page> :
                    this.state.pastVisit.map(item => (
                        <Page key={Math.random(10000000000)}>
                            <BoxElement >
                                <OneElement>{item.godzina}</OneElement>
                                <OneElement><strong>{item.data}</strong></OneElement>
                                <OneElement><LoggenInAstyle className="fas fa-user" />{this.getDisplayName(item.user)}</OneElement>
                            </BoxElement>
                        </Page>
                    ))}
            </>
        );
    }
}

export default withFirebase(PastVisits);