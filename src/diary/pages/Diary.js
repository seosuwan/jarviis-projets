import React from 'react'
import styled from 'styled-components'
import weather from '../images/sunny.png'
import dairy from '../images/dairy.jpg'

const Diary = () => {
    const dateString = new Date().toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday:'long'
      });
    return (<>
    <DairyDiv>
        <label><input type="date" id="start"/></label>
        <hr/>
        <DiaryTable>
            <DiaryTr>
                <DiaryTd colSpan="8">{dateString}</DiaryTd>
                <DiaryTd>날씨</DiaryTd>
                <DiaryTd><Weatherimg src={weather} alt=""/></DiaryTd>
            </DiaryTr>
            <DiaryTr>
                <DiaryTd colSpan="10" ><Dairyimg src={dairy} alt=""/></DiaryTd>
            </DiaryTr>
            <DiaryTr>
                <DiaryTd>안</DiaryTd>
                <DiaryTd>녕</DiaryTd>
                <DiaryTd>하</DiaryTd>
                <DiaryTd>세</DiaryTd>
                <DiaryTd>요</DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd>저</DiaryTd>
                <DiaryTd>는</DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd>안</DiaryTd>
            </DiaryTr>
            <DiaryTr>
                <DiaryTd>주</DiaryTd>
                <DiaryTd>현</DiaryTd>
                <DiaryTd>입</DiaryTd>
                <DiaryTd>니</DiaryTd>
                <DiaryTd>다</DiaryTd>
                <DiaryTd>.</DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
            </DiaryTr>
            <DiaryTr>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
            </DiaryTr>
            <DiaryTr>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
                <DiaryTd></DiaryTd>
            </DiaryTr>
        </DiaryTable>
        
    </DairyDiv>
    </>)
}
export default Diary

const DairyDiv = styled.div`
    padding: 10px;
    text-align:center;
    margin:0 auto;
    width: 70%;
    // background-color: lightgray;
`
const Weatherimg = styled.img`
    display:block;
    width:50px;
    float:center;
    padding: 10px;
`
const Dairyimg = styled.img`
    width:70%;
    float:center;
`
const DiaryTable = styled.table`
    border:1px solid black;
    width:100%;
`
const DiaryTr = styled.tr`
    // border:1px solid black;
    // width:10%;
`
const DiaryTd = styled.td`
    border:1px solid black;
    width:300px;
    height:100px;    
`