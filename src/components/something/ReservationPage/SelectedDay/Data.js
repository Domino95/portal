import React from 'react';
import styled from 'styled-components'

const DataFrame = styled.div`
width: 100%;
height: 10%;
border-bottom: 1px solid black;
box-shadow: 0 0 1px inset black;
padding-bottom: 20px;
`

const DataStyle = styled.div`
justify-content: flex-end;
font-size: 2rem;
align-items: center;
font-weight:bold;
text-align:right;
margin: 20px 80px 0px 0px;
`


const Data = ({ date }) => {
    return (

        <DataFrame>
            <DataStyle>  {date}  </DataStyle>
        </DataFrame>


    );
}

export default Data;