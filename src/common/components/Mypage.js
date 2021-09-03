import React from 'react'
import styled from 'styled-components';
import logout from '../images/logout.png'
import logo from '../images/logo.jpg'
import settings from '../images/settings.png'
import { Link } from 'react-router-dom';

const MyPage = () => {
    return (<>
    <MyPageDiv id="mypage">
        <DivMyPage>
            <Profile src={logo} alt=""/>
            <h5>WELCOME, USER!</h5>
            <Menu>    
            <Menuul>
                <Menuli>
                    <Link to="/setting"style={{textDecorationLine:'none',color:'black',fontWeight:'bold'}}><Icon src = {settings} alt=""/>Setting</Link>
                </Menuli>
                <Menuli>
                    <Link to="/"style={{textDecorationLine:'none',color:'black',fontWeight: 'bold'}}><Icon src = {logout} alt=""/>LogOut</Link>
                </Menuli>
            </Menuul>
        </Menu>
        </DivMyPage>    
    </MyPageDiv>
    </>)
}
export default MyPage



const MyPageDiv = styled.div`
    float:left;
    width: 20vw;
    border: solid 2px #368c98;
    margin:2vw;
    border-radius: 4vw;
    height:30vw;
    position:fixed;
`

const DivMyPage = styled.div`
    text-align:center;
    border: dotted 5px khaki;
    border-radius: 4vw;
    margin:34px;
   
    

    
`
const Profile = styled.img`
    margin:34px;
    width:60%;
    height:10%;
`
const Menu = styled.div`
    float:left;
`
const Menuul = styled.ul`
    margin: 50%;
    padding:5px;
    list-style-type:none;
    
`
const Menuli = styled.li`
    font-family: "ls";
    font-size: 1.5vw;
    margin-left: 3vw;

    
`
const Icon = styled.img`
    float:left;
    width: 1vw;
    height: 1vw;
    padding: 1px;
`