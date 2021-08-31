import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import MyPage from './Mypage';
const History = () => (
    
    
        <div><MyPage/>
        <div><Map/></div>

        <Hlabel><input type="checkbox" name="list" value=""/> 7시에 일어나기</Hlabel><p/>
        <label><input type="checkbox" name="list" value=""/> 강남 학원가기</label>


        

      
    </div>

    
)

export default History

const Hlabel = styled.label`
    margin-top: 22px;
    display: inline-block;
`

const CheckBox = styled.li`
    height: 450px;

`
