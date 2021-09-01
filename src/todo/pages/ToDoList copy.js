import React from 'react';
import styled from 'styled-components';

const ToDoList = () => {

    return (<>
    <TodolistDiv>
        <h1>To Do List</h1>
        <ListDiv>
            <fieldset>
            <Listul>
                <Listli><label><input type='checkbox'/>운동가기</label>
                </Listli>
                <Listli><label><input type='checkbox'/>밥먹기</label>
                </Listli>
                <Listli><input type='text'></input>
                </Listli>
            </Listul>
            </fieldset>
        </ListDiv>

    </TodolistDiv>
    </>)
}
export default ToDoList

const TodolistDiv = styled.div`
    padding: 10px;
    text-align:center;
    margin:0 auto;
    width: 70%;
    height: 500px;
    background-color: lightgray;
`
const ListDiv =styled.div`
    font-size: 30px;
`
const Listul =styled.ul`
    text-align:left;
    list-style-type:none;
`
const Listli =styled.li`
    padding: 20px 20%;
`
