import react from 'react'
import styled from 'styled-components'
import jarvis from 'survey/images/jarviss.gif'

const Checklist = () =>(
    <div>
        <Img src={jarvis}/>
        <Divfull>
            <H1>Jaris</H1>
            <P1> Check your intersts <br/>
            I will prepare an event that suits you.<br/>
            (You don`t have to check</P1>
            <Table>
                <tr>
                    <td>
                        <P2> A job you want to be</P2>
                        <input type="checkbox"/>Developer<br/>
                        <input type="checkbox"/>Doctor<br/>
                        <input type="checkbox"/>Teacher<br/>
                        <input type="checkbox"/>Lawyer<br/>
                        <input type="checkbox"/>Plaster<br/>
                        <input type="checkbox"/>Office worker<br/>
                        <input type="checkbox"/>Painter<br/>
                        <input type="checkbox"/>Writer<br/>
                        <input type="checkbox"/>Student<br/>
                        <input type="checkbox"/>Athlete<br/>
                    </td>
                    <td>
                        <P2> Interests</P2>
                        <input type="checkbox"/>Love<br/>
                        <input type="checkbox"/>Diet<br/>
                        <input type="checkbox"/>Restaurants<br/>
                        <input type="checkbox"/>Travel<br/>
                        <input type="checkbox"/>Exhibitions<br/>
                        <input type="checkbox"/>Employment<br/>
                        <input type="checkbox"/>Health<br/>
                        <input type="checkbox"/>Stocks<br/>
                        <input type="checkbox"/>Games<br/>
                        <input type="checkbox"/>Finance<br/>
                    </td>
                </tr>
            </Table>
            <Div>
                <Ul>
                    <li>your JoB : <>&nbsp;</>
                        <select name="Job">
                            <option value="developer">개발자</option>
                            <option value="doctor">의사</option>
                            <option value="Office worker">회사원</option>
                        </select>
                    </li>
                    <li>Age : <>&nbsp;</>
                        <input id="input" type="text" value="1"/>
                    </li>
                    <li>Gender : <>&nbsp;</>
                    <select name="Gender">
                            <option value="Man">남자</option>
                            <option value="Woman">여자</option>
                        </select>
                    </li>
                </Ul>
            </Div>
        </Divfull>
    </div>
)

export default Checklist

const Divfull = styled.div`
    z-index: 2;
`
const H1 = styled.h1`
    color: white;
    display: flex;
    justify-content: center;
    font-size: 120px;
    margin: 0px;
`

const P1 = styled.p`
    color: white;
    display: flex;
    justify-content: center;
    font-size: 20px;
`
const P2 = styled.p`
    color: white;
    display: flex;
    justify-content: center;
    font-size: 20px;
    background-color: red;
    border-style: double;
`
const Table = styled.table`
    color: white;
    display: flex;
    justify-content: center;
    border-collapse: separate;
    border-spacing: 100px 0;
`

const Div = styled.div`
    display: flex;
    justify-content: center;
`
const Img = styled.img`
    position: fixed;
    // display: flex;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    z-index: -1;
`
const Ul = styled.ul`
    display: flex;
    color: white;
    float: left;
    outline: 1px;
    margin-left: 20px;
`