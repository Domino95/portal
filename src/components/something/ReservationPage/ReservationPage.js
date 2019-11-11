import React from 'react';
import Form from './FormReservation/Form'
import SelectedDay from './SelectedDay/SelectedDay'
import { withFirebase } from "../../../Firebase";






class ReservationPage extends React.Component {

    state = {
        firebaseData: {},
        doctors: [],
        placowki: [],
        specialization: [],
        selecteddoctor: "",
        selectedspecialization: "",
        selectedplacowka: "",
        date: new Date().toISOString().slice(0, 10),
    }


    handleSelect = e => {
        const { firebaseData, selectedplacowka, selectedspecialization } = this.state;
        const { id, value } = e.target;

        this.setState({ [e.target.id]: value });
        if (id === "selecteddoctor") {
            const selectedDoctor = firebaseData.doctors.find(d => d.name === value);
            const selectedplacowka = selectedDoctor.placowka;
            const selectedspecialization = selectedDoctor.specialization;
            this.setState({
                selectedspecialization,
                selectedplacowka
            });
        } else if (id === "selectedplacowka") {
            const availableDoctors = firebaseData.doctors.filter(
                d => d.placowka === value && d.specialization === selectedspecialization
            );
            this.setState({
                doctors: availableDoctors,
                selecteddoctor:
                    availableDoctors.length > 0 ? availableDoctors[0].name : ""
            });
        } else if (id === "selectedspecialization") {
            const availableDoctors = firebaseData.doctors.filter(
                d => d.placowka === selectedplacowka && d.specialization === value
            );
            this.setState({
                doctors: availableDoctors,
                selecteddoctor:
                    availableDoctors.length > 0 ? availableDoctors[0].name : ""
            });
        }
    };



    componentDidMount() {
        this.props.firebase.Form().on("value", snapshot => {
            const value = snapshot.val();
            this.setState({
                doctors: value.Doktorzy.doctors,
                placowki: value.Placówki.placowki,
                specialization: value.Specjalizacja.specialization,
                firebaseData: {
                    doctors: value.Doktorzy.doctors,
                    placowki: value.Placówki.placowki,
                    specialization: value.Specjalizacja.specialization
                }
            });
        });
    }



    render() {
        if (this.state.date < new Date().toISOString().slice(0, 10))
            this.setState({ date: new Date().toISOString().slice(0, 10) })

        return (
            <>
                <Form

                    doctors={this.state.doctors}
                    placowki={this.state.placowki}
                    handleSelect={this.handleSelect}
                    specialization={this.state.specialization}
                    selectedspecialization={this.state.selectedspecialization}
                    selectedplacowka={this.state.selectedplacowka}
                    date={this.state.date}

                />


                <SelectedDay
                    selecteddoctor={this.state.selecteddoctor}
                    selectedspecialization={this.state.selectedspecialization}
                    selectedplacowka={this.state.selectedplacowka}
                    date={this.state.date}

                />
            </>
        );
    }
}
export default withFirebase(ReservationPage);
