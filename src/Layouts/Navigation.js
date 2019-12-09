import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { user, wizyty, konto, artykuly, rezerwacja } from '../routes/routes'


const Nav = styled.div`
height:100px;
text-align: center;



`
const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 25px;
  margin: 15px;
  text-transform: uppercase;
  line-height: 100px;
  font-weight: normal;

  &:hover{
    color: #00a271;
    -webkit-transition: opacity 500ms;
    -moz-transition: opacity 500ms;
    -o-transition: opacity 500ms;
    transition: opacity 500ms;
}

  &.active{
  font-weight: bold;
  color: #00a271;
  font-size: 30px;


}
`



const Navigation = () => {
  return (
    <>
      <Nav >
        <StyledLink exact to={user}>Start </StyledLink>
        <StyledLink to={wizyty}>Wizyty </StyledLink>
        <StyledLink to={konto}>Moje Konto </StyledLink>
        <StyledLink to={artykuly}>Artykuły </StyledLink>
        <StyledLink to={rezerwacja}>Zarezerwuj Wizytę </StyledLink>

      </Nav>

    </>
  );
}

export default Navigation;