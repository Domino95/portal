import React, { useState } from 'react';
import styled from 'styled-components'
import { withFirebase } from "../../../Firebase";


const CommentStyle = styled.div`
border-top: 2px solid #ddd
min-height: 30vh;
width: 100%;
`

const CommentText = styled.textarea`
border: 3px solid #ddd;
border-radius: 5px;
height:40vh;
width:100%;
margin-top:30px;
font-size:1.2rem;
padding: 20px;
outline: none; 
resize: none;
border: 3px solid #00a271;


`
const Button = styled.button`
width: 145px;
font-size: 1rem;
height: 55px;
background: rgb(64, 64, 64);
color: white;
border: 5px solid white;
border-radius: 20px;
transition: 0.3s;
&: hover,
&: focus {
    box - shadow: 0 0 2px 2px #343434;
}
`

const Comment = (props) => {
    const [comment, setComment] = useState(props.comment);

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const clicK = () => {
        props.firebase.Form().on('value', snapshot => {
            const value = snapshot.val()


            const rezerwacje = value.Rezerwacje.rezerwacje
            const index = rezerwacje.findIndex(item =>
                item.godzina === props.godzina &&
                item.data === props.data &&
                item.lekarz === props.lekarz &&
                item.placówka === props.placówka &&
                item.user === props.user)


            props.firebase.db.ref(`Form/Rezerwacje/rezerwacje/${index}/`).set(
                {
                    data: props.data,
                    godzina: props.godzina,
                    lekarz: props.lekarz,
                    placówka: props.placówka,
                    user: props.user,
                    komentarz: comment

                }
            )
            props.addComment()
        })

    }


    return (
        <CommentStyle>
            <form onSubmit={handleSubmit}>
                <CommentText name='textarea' value={comment} onChange={handleChange} ></CommentText>
                <Button onClick={clicK} >Zapisz </Button>
            </form>
        </CommentStyle>
    );
}

export default withFirebase(Comment);