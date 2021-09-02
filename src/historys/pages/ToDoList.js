import React from 'react';
import styled from 'styled-components';
import { TodoProvider, TodoCreate, TodoHead, TodoList, TodoTemplate } from '../index';

const ToDoList = () => {

    return (<>
    <TodolistDiv>
        <TodoProvider>
            {/* <GlobalStyle /> */}
            <TodoTemplate>
                <TodoHead />
                <TodoList />
                <TodoCreate />
            </TodoTemplate>
        </TodoProvider>
    </TodolistDiv>
    </>)
}
export default ToDoList

const TodolistDiv = styled.div`
    padding: 2px;
    text-align:center;
    margin:0 auto;
    width: 70%;
    
`
// const ListDiv =styled.div`
//     font-size: 30px;
// `
// const Listul =styled.ul`
//     text-align:left;
//     list-style-type:none;
// `
// const Listli =styled.li`
//     padding: 20px 20%;
// `
