import React from 'react';
import styled from 'styled-components';
import Map from '../components/Map';
import MyPage from '../../common/components/Mypage';
import {ToDoList} from '../index';

const History = () => (<>
    
    
    <Div>    
        <MyPage/>
    </Div>
    <div><Map/></div>
    <ToDoList/>    


    </>
)

export default History

const Hlabel = styled.label`
    margin-top: 22px;
    display: inline-block;
`

const CheckBox = styled.li`
    height: 450px;

`
const Div = styled.div`
    position:fixed;
`
