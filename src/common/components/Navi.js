import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import navi from '../images/navi.jpg'


const Navi = () => (
    <NaviDiv>
     
     <NaviList>
     <Icon src = {navi}/><NaviItem><Link to='/history'style={{textDecorationLine:'none',color:'black'}}><strong>History</strong></Link></NaviItem>
            <NaviItem><Link to='/review'style={{textDecorationLine:'none',color:'black'}}><strong>Review</strong></Link></NaviItem>

            <NaviItem><Link to="/todolist"style={{textDecorationLine:'none',color:'black'}}><strong>To-do list</strong></Link></NaviItem>
            <NaviItem><Link to="/dairy"style={{textDecorationLine:'none',color:'black'}}><strong>Dairy</strong></Link></NaviItem>
            <NaviItem><Link to="/admin"style={{textDecorationLine:'none',color:'black'}}><strong>Admin</strong></Link></NaviItem>

            <NaviItem><Link to="/login"style={{textDecorationLine:'none',color:'black'}}><strong>Login</strong></Link></NaviItem>
            <NaviItem><Link to="/join"style={{textDecorationLine:'none',color:'black'}}><strong>Join</strong></Link></NaviItem>
            <NaviItem><Link to="/checklist"style={{textDecorationLine:'none',color:'black'}}><strong>Checklist</strong></Link></NaviItem>

            <NaviItem><Link to="/calendar"style={{textDecorationLine:'none',color:'black'}}><strong>Calendar</strong></Link></NaviItem>
            <NaviItem><Link to="/scheduler"style={{textDecorationLine:'none',color:'black'}}><strong>Scheduler</strong></Link></NaviItem>
            <NaviItem><Link to="/day"style={{textDecorationLine:'none',color:'black'}}><strong>Day</strong></Link></NaviItem>
            <NaviItem><Link to="/suggestion"style={{textDecorationLine:'none',color:'black'}}><strong>Suggestion</strong></Link></NaviItem>
        </NaviList>
    </NaviDiv>
)
export default Navi

const Icon = styled.img`
    width: auto; height: auto;
    max-width: 100px;
    max-height: 100px;
    display: flex;
    margin: -38px;
`

const NaviDiv = styled.div`
    padding-bottom: 30px;
    
`
const NaviList = styled.ul`
    display: flex;
    width: min-content;
    height:10px;
    margin: 30px
    
`

const NaviItem = styled.li`
    width: 110px;
    color: none;
    font-family: "ls";
    font-size: 1.5em;
    list-style: none;
    `