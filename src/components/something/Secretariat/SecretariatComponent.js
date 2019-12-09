import React from 'react';
import styled from "styled-components";
import { withFirebase } from "../../../Firebase";
import InputsSecretariat from './InputsSecretariat'
import Modal from './Modal';

const Page = styled.div`
background: #fff;
width: 100%
height:90%;
margin:auto;
border: 1px solid #e8e8e8;
box-shadow: 1.5px 2.9px 0px 0px #d6d6d6;
overflow: hidden;`

const Frame = styled.div`
margin-top:10px;
background: #f4f5f6;
width:100%;
margin-top:50px;
padding: 30px 30px 30px 30px;
max-height: 80vh;
`

const Text = styled.a`
width:100%;
font-size: 2rem;
padding: 20px 0 5px 5px;
letter-spacing:1.1px;
display: flex;`

const Elements = styled.div`
display:flex;
border-top: 1px solid #ddd;
align-items:baseline;
`

const Elementss = styled.div`
display:flex;
justify-content: space-between;
padding: 12px; 20px 10px 20px;
background: #f4f5f6;
border-top: 2px solid #ddd;
margin-top:20px;`

const Doctor = styled.div`
font-size: 1.3rem;
padding: 5px;
color:#00a271
width:20%;
padding:10px;`

const Institution = styled.div`
font-size: 1.3rem;
padding: 5px;
width:20%;
padding:10px;`

const Data = styled.div`
font-size: 1.3rem;
padding: 5px;
width:20%;
padding:10px;`

const Hour = styled.div`
font-size: 1.3rem;
padding: 5px;
width:20%;
padding:10px;
font-weight: bold;
`
const Patient = styled.div`
font-size: 1.3rem;
padding: 5px;
font-weight:bol
width:20%;
padding:10px;
font-weight:bold`

const Panel = styled.div`
font-size: 1.5rem;
width: 20%;
padding:0 10px 0 10px;`

const LoggenInAstyle = styled.div`
font-size: 1.5rem;
color: black;
padding: 5px;
cursor:pointer;
`

const Mess = styled.h1`
font-size: 2rem;
color: #00a271;
marign: auto
padding: 30px;
text-align: center;
`


class SecretariatComponent extends React.Component {

    state = {
        wizyty: [],
        selectedwizyty: [],
        users: [],
        selectedData: '',
        selectedUser: "Wszyscy Pacjenci",
        date: new Date().toISOString().slice(0, 10),
        modal: false,
        user: ''
    }

    ChangeModal = (users) => {
        if (users) {
            const find = this.state.users.find(item => item[1].email === users)
            this.setState({ modal: !this.state.modal, user: find[1] })

        }
        else {
            this.setState({ modal: !this.state.modal })
        }

    }

    componentDidMount() {
        this.getData()
    }

    Compare = (a) => {
        let arr = [];
        for (let i = 0; i < a.length; i++)
            arr.push(a[i])
        function compare(a, b) {
            return (parseInt(a.godzina.slice(0, -3) - parseInt(b.godzina.slice(0, -3))))
        }
        arr.sort(compare);
        return arr
    }



    getData() {
        this.props.firebase.db.ref(`users`).on('value', snapshot => {
            const value = snapshot.val()

            let users = Object.keys(value).map(function (key) {
                return [key, value[key]];
            });
            let index = users.findIndex(item => item[1].displayName === "Sekretariat")
            users.splice(index, 1)

            let usersWithoutDoctor = users.filter(item => item[1].doctor !== true)

            this.setState({ users: usersWithoutDoctor })
        })

        this.props.firebase.Form().on('value', snapshot => {
            const value = snapshot.val()
            let selectedwizyty = value.Rezerwacje.rezerwacje.filter(item => item.data === this.state.date)
            this.setState({ wizyty: value.Rezerwacje.rezerwacje, selectedwizyty: this.Compare(selectedwizyty) })
        })
    }

    handleSelect = (e) => {
        this.setState({ [e.target.id]: e.target.value });
        const { id, value } = e.target;
        if (id === "date") {
            if (this.state.selectedUser !== "Wszyscy Pacjenci") {
                let userfilter = this.state.users.filter(item => item[1].displayName === this.state.selectedUser)
                const selectedwizyty = this.state.wizyty.filter(item => item.data === value && item.user === userfilter[0][1].email)
                this.setState({ selectedwizyty: this.Compare(selectedwizyty) })
            }
            else {
                const selectedwizyty = this.state.wizyty.filter(item => item.data === value)
                this.setState({ selectedwizyty: this.Compare(selectedwizyty) })
            }
        }

        if (id === "selectedUser") {
            if (value === "Wszyscy Pacjenci") {
                const selectedwizyty = this.state.wizyty.filter(item => item.data === this.state.date)
                this.setState({ selectedwizyty: this.Compare(selectedwizyty) })
            }
            else {
                const userfilter = this.state.users.filter(item => item[1].displayName === value)
                const selectedwizyty = this.state.wizyty.filter(item => item.data === this.state.date && item.user === userfilter[0][1].email)
                this.setState({ selectedwizyty: this.Compare(selectedwizyty) })
            }
        }
    }
    getUserDisplayName = (user) => {
        const find = this.state.users.find(item => item[1].email === user)
        return find[1].displayName
    }

    render() {
        return (
            <>
                {this.state.modal ? <Modal user={this.state.user}
                    ChangeModal={() => this.ChangeModal()} /> : null}
                <Frame>
                    <Text>Wizyty
                    <InputsSecretariat
                            users={this.state.users}
                            selectedUser={this.state.selectedUser}
                            handleSelect={this.handleSelect}
                            date={this.state.date}
                            selectedData={this.state.selectedData}
                        />
                    </Text>
                    <Elementss>
                        <Panel>Doktor</Panel>
                        <Panel>Godzina</Panel>
                        <Panel>Placówka</Panel>
                        <Panel>Data</Panel>
                        <Panel>Pacjent</Panel>

                    </Elementss>
                    <Page>
                        {this.state.selectedwizyty.length === 0 ?
                            <Mess>BRAK WIZYT</Mess> :
                            this.state.selectedwizyty.map(item => (
                                <Elements key={Math.random(100000000)}>
                                    <Doctor >{item.lekarz}</Doctor>
                                    <Hour>{item.godzina}</Hour>
                                    <Institution>{item.placówka}</Institution>
                                    <Data>{item.data}</Data>
                                    <Patient >
                                        <LoggenInAstyle className="fas fa-user"
                                            onClick={() => this.ChangeModal(item.user)}
                                        />
                                        {this.getUserDisplayName(item.user)}
                                    </Patient>




                                </Elements>))}
                    </Page>
                </Frame>

            </>
        );
    }
}

export default withFirebase(SecretariatComponent);
