import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import navi from '../images/navi.jpg'


const Navi = () => (
    <NaviDiv>
     
        <NaviList><Icon src = {navi}/>
            <NaviItem><Link to='/history'style={{textDecorationLine:'none',color:'black'}}><strong>History</strong></Link></NaviItem>
            <NaviItem><Link to='/review'style={{textDecorationLine:'none',color:'black'}}><strong>Review</strong></Link></NaviItem>
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
    width: 400px;
    margin: 0 auto;
    
`

const NaviItem = styled.li`
    width: 125px;
    margin-left: 5px;
    margin-top: 30px
    display: flex;
    color: none;
    font-family: "ls";
    font-size: 30px;
    text-align: right;
    list-style: none;
    `