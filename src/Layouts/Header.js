import styled from 'styled-components';
import React from 'react';
import SignOutButton from '../components/HeaderContent/SignOutButton';
import LoggedInAs from '../components/HeaderContent/LoggedInAs'



const Head = styled.div`
height:15vh;
background-color: #deebdd;
background-image: linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%);
display: flex;
align-items: flex-star;
justify-content: space-between;
padding-left:20px;
padding-right:20px;
border-radius: 10px
padding-top: 20px;
`


class Header extends React.Component {






    render() {
        console.log()
        return (
            <>
                <Head >

                    <LoggedInAs />
                    <SignOutButton LogOutFunctions={this.props.LogOutFunctions} />
                </Head>
            </>
        );
    }
}
export default (Header);