import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { futureVisit, pastVisit, currentVisit } from '../../../routes/routes'
import FutureVisit from '../Doctor/FutureVisit'
import CurrentVisit from '../Doctor/CurrentVisit'
import PastVisit from '../Doctor/PastVisit'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const Page = styled.div`
background: #fff;
width: 100%
height:80%;
margin-top:30px
border-bottom:1px solid #ddd;
box-shadow: 1.5px 2.9px 0px 0px #d6d6d6;
padding: 20px;
`

const Frame = styled.div`
margin-top:10px;
background: #f4f5f6;
width:100%;
margin-top:50px;
padding: 30px 30px 30px 30px;
`
const Text = styled.a`
width:100%;
font-size: 2rem;
padding: 20px 0 10px 5px;
letter-spacing:1.1px;
display: flex;
margin-bottom:30px;
border-bottom: 3px solid #ddd;`

const StyledLink = styled(NavLink)`
text-decoration: none;
color:black;
font-size: 1.5rem;
padding: 10px 20px 10px 10px;
margin-bottom:20px;


&.active{
    color: #00a271;
  }

`


const Doctor = () => {
    return (
        <>
            <Frame>
                <Text>Wizyty</Text>


                <StyledLink to={futureVisit}>Nadchodzące wizyty  </StyledLink>
                <StyledLink to={currentVisit}>Bieżąca wizyta </StyledLink>
                <StyledLink to={pastVisit}>Odbyte wizyty  </StyledLink>




                <Switch>
                    <Route exact path="/doctor"> <Page>Wybierz wizyte</Page> </Route>
                    <Route path={futureVisit} component={FutureVisit} />
                    <Route path={pastVisit} component={PastVisit} />
                    <Route path={currentVisit} component={CurrentVisit} />
                </Switch>



            </Frame >



        </>
    );
}

export default Doctor;
