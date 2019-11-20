import React from 'react'
import styled from 'styled-components';
import { withFirebase } from "../../Firebase";


const LoggenInAstyle = styled.div`
font-size: 2rem;
color: black;
padding: 5px ;

`
const H2Styled = styled.a`
font-size: 1.2rem ;

`
const LoggeUser = styled.div`
text-align:center;
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
                <LoggeUser> <LoggenInAstyle className={"fas fa-user"} /> <H2Styled>{this.state.currentuser}</H2Styled> </LoggeUser>
            </>
        );
    }
}
export default withFirebase(LoggenInAs);