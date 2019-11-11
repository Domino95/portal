import React from 'react'
import styled from 'styled-components';
import { withFirebase } from "../../Firebase";


const LoggenInAstyle = styled.div`
font-size: 1.25rem;
color: black;
top: 30px;
padding: 5px;
`



class LoggenInAs extends React.Component {
    state = {
        currentuser: ''
    }

    componentDidMount() {
        this.props.firebase.db.ref(`users/${this.props.firebase.getCurrentInfoUser().uid}`).on('value', snapshot => {
            const value = snapshot.val()

            this.setState({
                currentuser: value.displayName
            })
        })
    }

    render() {

        return (
            <>
                <LoggenInAstyle>Zalogowany jako: <i>{this.state.currentuser}</i> </LoggenInAstyle>
            </>
        );
    }
}
export default withFirebase(LoggenInAs);