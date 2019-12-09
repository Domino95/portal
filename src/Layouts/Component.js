import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { wizyty, konto, artykuly, rezerwacja, user, szczegoly, sekretariat } from '../routes/routes'
import ReservationPage from '../components/something/ReservationPage/ReservationPage';
import MojeKonto from '../components/something/MojeKonto/MojeKonto';
import Wizyty from '../components/something/Wizyty/Wizyty';
import Start from '../components/something/Start/Start';
import Szczegoly from '../components/something/Szczegoly/Szczegoly'
import SecretariatComponent from "../components//something//Secretariat//SecretariatComponent"
import Doctor from '../components/something/Doctor/Doctor'
import Articles from '../components/something/Articles/Articles';


const Pag = styled.div` 
height:70vh;
background-color: #fff;
`

const Component = () => {
    return (
        <Pag>
            <Switch>
                <Route exact path={user} component={Start} />
                <Route exact path={wizyty} component={Wizyty} />
                <Route path={konto} component={MojeKonto} />
                <Route path={artykuly} component={Articles} />
                <Route path={rezerwacja} component={ReservationPage} />
                <Route path={szczegoly} render={(props) => <Szczegoly {...props} isAuthed={true} />} />
                <Route path={sekretariat} component={SecretariatComponent} />
                <Route path="/doctor" component={Doctor} />

            </Switch>

        </Pag>
    );
}

export default Component;