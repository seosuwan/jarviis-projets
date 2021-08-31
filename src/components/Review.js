import React from 'react';
import Chartdata from './Chartdata';
import MyPage from './Mypage';
import Chart1 from './Chart1';
import styled from 'styled-components';

const Review = () => {
    return(
    
    <div>
    <MyPage/>
    <Div><Chart1 data= {Chartdata}/>
    </Div>
    </div>
    )
}
export default Review

const Div = styled.div `
    display:block;
    width: 500px;
    height:500px;
`