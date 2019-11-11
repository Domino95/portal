import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { wizyty, konto, placowki, rezerwacja, user } from '../routes/routes'
import ReservationPage from '../components/something/ReservationPage/ReservationPage';
import Placowki from '../components/something/Placowki';
import MojeKonto from '../components/something/MojeKonto/MojeKonto';
import Wizyty from '../components/something/Wizyty/Wizyty';
import Start from '../components/something/Start/Start';






const Pag = styled.div` 
height:70vh;
background-color: #fff;
`

const Component = () => {
    return (
        <Pag>
            <Switch>
                <Route exact path={user} component={Start} />
                <Route path={wizyty} component={Wizyty} />
                <Route path={konto} component={MojeKonto} />
                <Route path={placowki} component={Placowki} />
                <Route path={rezerwacja} component={ReservationPage} />
            </Switch>

        </Pag>
    );
}

export default Component;