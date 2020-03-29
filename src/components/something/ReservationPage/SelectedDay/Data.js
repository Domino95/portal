import React from 'react';
import styled from 'styled-components'
const DataFrame = styled.div`
width: 100%;
height: 10%;
border-bottom: 1px solid #00a271;
padding-bottom: 10px;
`
const DataStyle = styled.div`
justify-content: flex-end;
font-size: 1.5rem;
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