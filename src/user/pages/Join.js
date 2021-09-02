import React from 'react'
import styled from 'styled-components'
import jarvis from 'user/images/jarviss.gif'
const Join = () =>(
    <BodyDiv>
        <Img src={jarvis}/>
        <Div id="join">
            <Form>
                <H1>Jarvis</H1>
                <br/>
                <P>ID ?</P>
                <Input id="id" type="text"/>
                <P>PASSWORD ?</P>
                <Input id="user_password" type="password"/>
                <P>PASSWORD Check?</P>
                <Input id="user_passwordCheck" type="password"/>
                <br/>
                <P>NAME?</P>
                <Input id="name" type="text"/>
                <P>Birthday</P>
                <Input id="birthday" type="date"/>
                <P>Email</P>
                <Input id="email" type="email"/>
                <P>Phon Number</P>
                <Input id="phone" type="tel" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"/>
                <br/>
                <small color="white" >(Format: 123-4567-8910)</small>
                <br/>
                <br/>
                <ButtonJoin>Join</ButtonJoin>
            </Form>
        </Div>
    </BodyDiv>
)

export default Join
const P = styled.p`
    color: white;
`
const Form = styled.form`
    z-index: 3;
    
`
const BodyDiv = styled.div`
    width: 100%;
    height: 100%;
    
`
const Div = styled.div`
    display: flex;
    justify-content: center;
    z-index: 2;
`
const Input = styled.input`
    size: 10px;
    width: 100%
`

const ButtonJoin = styled.button`
    border-width: 2px;
    height: 25px;
    width: 100%;
`
const H1 = styled.h1`
    width: 100%;
    height: 30px;
    color : white;
    font-size: 100px;
    margin-top: 30%;
    
`
const Img = styled.img`
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    z-index: -1;
`