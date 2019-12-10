import styled from 'styled-components';
import React from 'react';
import SignOutButton from '../components/HeaderContent/SignOutButton';
import LoggedInAs from '../components/HeaderContent/LoggedInAs'



const Head = styled.div`
height:10vh;
background-color: #deebdd;
background-image: linear-gradient(315deg, #bbdbbe 0%, #00a271 74%);
display: flex;
align-items: flex-star;
justify-content: space-between;
padding-left:20px;
padding-right:20px;
padding-top: 20px;
margin-top:10px;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
border-radius:5px;
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