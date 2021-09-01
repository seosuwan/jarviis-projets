import React from 'react'
import styled from 'styled-components';
import logout from '../images/logout.png'
import logo from '../images/logo.jpg'
import settings from '../images/settings.png'
import { Link } from 'react-router-dom';

const MyPage = () => {
    // const openNav = () => {
    //     document.getElementById('mypage').style.display = 'block';
    // }
    // const closeNav = () => {
    //     document.getElementById('mypage').style.display = 'none';
    // }
    return (<>
    {/* <button onClick={openNav}>openNav</button> */}
    <MyPageDiv id="mypage">
        {/* <ButtonX onClick={closeNav}>X</ButtonX> */}
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
    width: 250px;
    border: solid 2px #368c98;
    height: 50%;
    margin-right: 30px;
    border-radius: 42px;
`

const DivMyPage = styled.div`
    text-align:center;
    border: dotted 4px khaki;
    border-radius: 42px;

    
`
const Profile = styled.img`
    margin: auto;
    width:50%;
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
    padding:10px;
    font-family: "ls";
    font-size: 11px;
    
`
const Icon = styled.img`
    float:left;
    width: 10px;
    height: 10px;
    padding: 3px;
`