import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { user, wizyty, konto, placowki, rezerwacja } from '../routes/routes'


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
    border-bottom: solid black 2px;
}

  &.active{
  font-weight: bold;
}
`



const Navigation = () => {
  return (
    <>
      <Nav >
        <StyledLink exact to={user}>Start </StyledLink>
        <StyledLink to={wizyty}>Wizyty </StyledLink>
        <StyledLink to={konto}>Moje Konto </StyledLink>
        <StyledLink to={placowki}>Placówki </StyledLink>
        <StyledLink to={rezerwacja}>Zarezerwuj Wizytę </StyledLink>

      </Nav>

    </>
  );
}

export default Navigation;