import styled from 'styled-components';
import React from 'react';
import SignOutButton from '../components/HeaderContent/SignOutButton';
import LoggedInAs from '../components/HeaderContent/LoggedInAs'



const Head = styled.div`
height:10vh;
background-color: #deebdd;
background-image: linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%);
display: flex;
align-items: flex-star;
justify-content: space-between;
padding-left:20px;
padding-right:20px;
padding-top: 20px;
margin-top:10px;
box-shadow: 1.5px 2.9px 0px 0px #d6d6d6;

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