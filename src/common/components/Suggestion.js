import React, { useState } from "react";
import 'common/styles/Suggestion.css';
import alert from 'common/images/alert.png'
import check from 'common/images/check-mark.png'
import xMark from 'common/images/x-mark.png'
import exclamation from 'common/images/exclamation-sign.png'
import styled from "styled-components";

const Suggestion = ()=> {
    const [show, setShow] = useState(false);
   

    const handlePopup = (e) => {
        setShow(e.target.value)
    }
    
    return (
        <Div className="Modal" >
            <button className="open" onClick={handlePopup} value = 'false'>
                추천 받기
            </button>
            {show ? 
            (<div className="popup">
                <div className="popup_inner">
                    <h1 className="h1"> <img className="main_icon" src={exclamation}/> Suggestion</h1>
                    <h2>ㅇㅇ유형의 70%는 정보처리기사 자격증을 소지하고 있습니다.<br />
                        다가오는 정보처리기사 접수 일정을 추가할까요?<br />
                        2021.09.12.(월) ~ 2021.09.15.(목)</h2>
                    <button className="close" onClick={handlePopup}><img className="icon" src={check} />수락</button>
                    <button className="close" onClick={handlePopup}><img className="icon" src = {xMark} />거절</button>
                </div>
            </div>
            ) : null }
        </Div>
    )
}

export default Suggestion

const Div = styled.div`
    text-align:center;
`