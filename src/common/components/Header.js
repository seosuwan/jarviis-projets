import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => (
      <div>
      <HomeButton><Link to='/Home' style={{textDecorationLine:'none'}}><Head>Jarviis</Head></Link></HomeButton>
        </div>
);
    
  //홈으로 돌아가는 버튼만들기
  
export default Header;

const Head = styled.h1`
    width: 100%;
    font-family: "ls";
    font-size: 100px;
    color:crimson;
    margin-top: 0;
`
const HomeButton = styled.button`
background-color: white;
border: none;
`