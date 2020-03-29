import React from 'react';
import styled from 'styled-components'
import Data from './Data'
import SingleTerm from './ListAvaliableVisits/SingleTerm'
import { withFirebase } from "../../../../Firebase";



const SelectedDayStyle = styled.div`
`
class SelectedDay extends React.Component {
    state = {
        terminy: [
            {
                id: 0,
                hours: "08:00",
                czyZarezerwowane: false

            },
            {
                id: 1,
                hours: "09:00",
                czyZarezerwowane: false

            },
            {
                id: 2,
                hours: "10:00",
                czyZarezerwowane: false

            },
            {
                id: 3,
                hours: "11:00",
                czyZarezerwowane: false

            },
            {
                id: 4,
                hours: "12:00",
                czyZarezerwowane: false

            },
            {
                id: 5,
                hours: "13:00",
                czyZarezerwowane: false

            },
            {
                id: 6,
                hours: "14:00",
                czyZarezerwowane: false

            },
            {
                id: 7,
                hours: "15:00",
                czyZarezerwowane: false

            },
        ],
        rezerwacje: []
    }


    componentDidMount() {
        this.pobierzRezerwacje();
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.selecteddoctor !== this.props.selecteddoctor ||
            prevProps.date !== this.props.date

        )
            this.pobierzRezerwacje();
    }

    pobierzRezerwacje() {
        this.props.firebase.Form().on('value', snapshot => {
            const value = snapshot.val();

            const { selecteddoctor, date } = this.props;

            const rezerwacje = value.Rezerwacje.rezerwacje.filter(item => {
                return item.lekarz === selecteddoctor && item.data === date;
            })

            const terminy = this.state.terminy.map(item => {
                const czyZarezerwowane = rezerwacje.some(rezerwacja => {
                    return rezerwacja.godzina === item.hours;
                })
                return { id: item.id, hours: item.hours, czyZarezerwowane }
            })

            this.setState({ terminy });

        })
    }


    render() {

        const { date, selecteddoctor, selectedspecialization, selectedplacowka } = this.props;

        const isAll = selecteddoctor && selectedplacowka && selectedspecialization;

        return (

            <>
                {isAll &&
                    <SelectedDayStyle >
                        <Data date={date} />
                        <ul>
                            {
                                this.state.terminy.map(item => (
                                    <SingleTerm
                                        date={date}
                                        key={item.id}
                                        hours={item.hours}
                                        selecteddoctor={selecteddoctor}
                                        selectedspecialization={selectedspecialization}
                                        institutions={selectedplacowka}
                                        czyZarezerwowane={item.czyZarezerwowane}
                                    />
                                ))}
                        </ul>
                    </SelectedDayStyle >
                }
            </>
        )
    }
}
export default withFirebase(SelectedDay);























