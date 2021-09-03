import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import review1 from '../images/review1.png';
import review2 from '../images/review2.png';
import review3 from '../images/review3.png';
import review4 from '../images/review4.png';
import review5 from '../images/review5.png';

const Setting = () =>(
    <div>
        <Reviewdiv>
        <Reviewul>
            <Reviewli>
            <Link to="/"style={{textDecorationLine:'none',color:'black',fontWeight:'bold'}}><Icon src = {review1} alt=""/>Setting</Link></Reviewli>
            <Reviewli><Link to="/"style={{textDecorationLine:'none',color:'black',fontWeight:'bold'}}><Icon src = {review2} alt=""/>Privacy</Link></Reviewli>
            <Reviewli><Link to="/"style={{textDecorationLine:'none',color:'black',fontWeight:'bold'}}><Icon src = {review4} alt=""/>Check list</Link></Reviewli>
            <Reviewli><Link to="/"style={{textDecorationLine:'none',color:'black',fontWeight:'bold'}}><Icon src = {review5} alt=""/>Account </Link></Reviewli>
            <Reviewli><Link to="/"style={{textDecorationLine:'none',color:'black',fontWeight:'bold'}}><Icon src = {review3} alt=""/>QnA </Link></Reviewli>
        </Reviewul>
        </Reviewdiv>
    </div>
)
export default Setting
const Reviewdiv = styled.div`
   
`
const Reviewul = styled.ul`
    border: solid 2px #368c98;
    border-radius: 42px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top:59px;
    height:440px;

`
const Reviewli = styled.li`
    margin-left: auto;
    margin-right: auto;
    margin-top:30px;
    list-style: none;   
    font-family: "ls";
    font-size: 35px;
`
const Icon = styled.img`
    float:left;
    width: 30px;
    height: 35px;
    padding: 1px;
    

`
