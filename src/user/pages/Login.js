import React from 'react'
import styled from 'styled-components'
import jarvis from 'common/images/jarviss.gif'

const Login = ()=> (
    <BodyDiv id="body">
    <Img src={jarvis}/>
        <Div>
            <From>
                <H1>Jarvis</H1>
                <br/>
                <Button>Google Login</Button>
                <br/>
                <Button>Facebook Login</Button>
                <br/>
                <Button>Twiter Login</Button>
                <br/>
                <LoginButton >Login</LoginButton>
                <>&nbsp;</>
                <JoginButton>Join</JoginButton>
            </From>
        </Div>
    </BodyDiv>
)

export default Login

const From = styled.form`
    z-index: 2;
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

const BodyDiv = styled.div`
    width: 100%;
    height: 100%;
    
`

const JoginButton = styled.button`
    border-width: 3px;
    height: 30px;
    width: 20%;
    ;
`


const LoginButton = styled.button`
    border-width: 3px;
    height: 30px;
    width: 78%;
`

const Button = styled.button`
    border-width: 3px;
    height: 30px;
    width: 300px;
`

const Div = styled.div`
    float : center;
    display: flex;
    justify-content: center;
    line-height:3em;
`

const H1 = styled.h1`
    width: 100%;
    height: 30px;
    color : white;
    font-size: 100px;
    margin-top: 70%;

    
`

