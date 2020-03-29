import React from 'react';
import { withFirebase } from "../../../Firebase";
import FutureVisits from './FutureVisits';
import PastVisits from './PastVisit';
import styled from 'styled-components'

const Frame = styled.div`
background: #f4f5f6;
width:100%;
margin-top:30px;
padding: 10px 30px 20px 30px;
max-height: 60vh;
display:block;
`
const FrameScroll = styled.div`
overflow: auto;
max-height: 26vh;
padding-bottom:3px;
`
const Text = styled.a`
width:100%;
font-size: 1.2rem;
letter-spacing: 3px;
padding: 20px 0 5px 5px;
letter-spacing:1.1px;
display: flex;
border-bottom: 3px solid #ddd;
margin-bottom:10px;`

const Page = styled.div`
width: 100%
margin-top:15px
box-shadow: 1.5px 2.9px 0px 0px #d6d6d6;
padding: 10px;
background: #fff;
border: 1px solid #ddd;
`
const OneElement = styled.div`
padding: 10px 20px 10px 20px;
display: flex;
width: 100%;
align-items: baseline;
font-size: 1.5rem;
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
            var arr = [];
            for (let i = 0; i < futureVisit.length; i++)
                arr.push(futureVisit[i])
            function compareFuture(a, b) {
                if (parseInt(a.data.slice(-8)) === parseInt(b.data.slice(-8))) {
                    if (parseInt(a.data.slice(5, -3)) === parseInt(b.data.slice(5, -3))) {
                        if (parseInt(a.data.slice(8)) === parseInt(b.data.slice(8)))
                            return (parseInt(a.godzina.slice(0, -3) - parseInt(b.godzina.slice(0, -3))))
                        return parseInt(a.data.slice(8)) - parseInt(b.data.slice(8))
                    }
                    return (parseInt(a.data.slice(5, -3)) - parseInt(b.data.slice(5, -3)))
                }
                return (parseInt(a.data.slice(-8)) - parseInt(b.data.slice(-8)))
            }
            arr.sort(compareFuture);
            var pastarr = [];
            for (let i = 0; i < pastVisit.length; i++)
                pastarr.push(pastVisit[i])
            function comparePast(a, b) {
                if (parseInt(b.data.slice(-8)) === parseInt(a.data.slice(-8))) {
                    if (parseInt(b.data.slice(5, -3)) === parseInt(a.data.slice(5, -3))) {
                        if (parseInt(b.data.slice(8)) === parseInt(a.data.slice(8)))
                            return (parseInt(b.godzina.slice(0, -3) - parseInt(a.godzina.slice(0, -3))))
                        return parseInt(b.data.slice(8)) - parseInt(a.data.slice(8))
                    }
                    return (parseInt(b.data.slice(5, -3)) - parseInt(a.data.slice(5, -3)))
                }
                return (parseInt(b.data.slice(-8)) - parseInt(a.data.slice(-8)))
            }
            pastarr.sort(comparePast);

            this.setState({
                pastVisit: pastarr,
                futureVisit: arr,
                wizyty,
                wizytyAll: value.Rezerwacje.rezerwacje,
                currentuser: this.props.firebase.getCurrentEmail()
            })
        }
        )
    }
    render() {
        return (
            <>
                <Frame>
                    <Text>Nadchodzące wizyty</Text>

                    {this.state.futureVisit.length === 0 ?
                        <Page>
                            <OneElement>
                                Nie masz zaplanowanych wizyt
                                </OneElement>
                        </Page>
                        :
                        <FrameScroll>
                            {this.state.futureVisit.map(item =>
                                <FutureVisits
                                    key={Math.random(1000000)}
                                    hours={item.godzina}
                                    data={item.data}
                                    doctor={item.lekarz}
                                    placówka={item.placówka}
                                    wizytyAll={this.state.wizytyAll}
                                    currentuser={this.state.currentuser}
                                />)}
                        </FrameScroll>}
                </Frame>

                <PastVisits pastVisits={this.state.pastVisit} />



            </>


        );
    }
}

export default withFirebase(Wizyty);
