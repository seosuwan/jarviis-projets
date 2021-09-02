import React from 'react'
import styled from 'styled-components'
import {BarChart, BarData, LineChart, LineData, LogChart, PieChart, PieData} from 'admin/index'

const Admin = () => {
    return (<>
    <AdminDiv>
        <AdminTable>
            <Tr>
                <Td>
                    <Fieldset>
                        <form>
                            <Label>사용자</Label>
                            <Select>
                                <option value="total" label="전체" selected/>
                                <option value="kim" label="김개똥"/>      
                                <option value="hong" label="홍길동"/>      
                                <option value="Lee" label="이순신"/>      
                            </Select>
                            <Label>종류</Label>
                            <Select>
                                <option value="total" label="전체" selected/>
                                <option value="GPS" label="위치 정보"/>      
                                <option value="Message" label="문자 정보"/>      
                                <option value="Device" label="기기 정보"/>      
                            </Select>
                            <Label>추천</Label>
                            <Select>
                                <option value="total" label="전체" selected/>
                                <option value="use" label="추천을 사용함"/>      
                                <option value="edit" label="추천을 수정함"/>      
                                <option value="reject" label="추천을 거절함"/>      
                            </Select>
                        </form>
                    </Fieldset>
                    <PieDiv>
                        <PieChart data={PieData} /></PieDiv></Td>
                <Td rowSpan="2">
                    <Fieldset>
                        <form>
                            <Label>사용자</Label>
                            <Select>
                                <option value="total" label="전체" selected/>
                                <option value="kim" label="김개똥"/>      
                                <option value="hong" label="홍길동"/>      
                                <option value="Lee" label="이순신"/>      
                            </Select>
                            <Label>종류</Label>
                            <Select>
                                <option value="total" label="전체" selected/>
                                <option value="GPS" label="위치 정보"/>      
                                <option value="Message" label="문자 정보"/>      
                                <option value="Device" label="기기 정보"/>      
                            </Select><br/>
                                <input type="date" id="start" value="2021-08-27"/>
                                ~
                                <input type="date" id="end" value="2021-08-27"/>
                        </form>
                    </Fieldset>
                    <BarDiv>
                    <BarChart data={BarData} /></BarDiv></Td>
            </Tr>
            <Tr>
                <Td>
                    <Fieldset>
                        <form>
                            <Label>사용자</Label>
                            <Select>
                                <option value="total" label="전체" selected/>
                                <option value="kim" label="김개똥"/>      
                                <option value="hong" label="홍길동"/>      
                                <option value="Lee" label="이순신"/>      
                            </Select>
                            <Label>종류</Label>
                            <Select>
                                <option value="total" label="전체" selected/>
                                <option value="GPS" label="위치 정보"/>      
                                <option value="Message" label="문자 정보"/>      
                                <option value="Device" label="기기 정보"/>      
                            </Select>
                        </form>
                    </Fieldset>
                <LineDiv><LineChart data={LineData} /></LineDiv></Td>
               
            </Tr>
            <Tr>
                <Td colSpan="2">
                <Fieldset>
                        <form>
                            <Label>사용자</Label>
                            <Select>
                                <option value="total" label="전체" selected/>
                                <option value="kim" label="김개똥"/>      
                                <option value="hong" label="홍길동"/>      
                                <option value="Lee" label="이순신"/>      
                            </Select>
                            <Label>종류</Label>
                            <Select>
                                <option value="total" label="전체" selected/>
                                <option value="GPS" label="위치 정보"/>      
                                <option value="Message" label="문자 정보"/>      
                                <option value="Device" label="기기 정보"/>      
                            </Select>
                                <input type="date" id="start" value="2021-08-27"/>
                                ~
                                <input type="date" id="end" value="2021-08-27"/>
                        </form>
                    </Fieldset>
                <LogDiv><LogChart/></LogDiv>
                </Td>
            </Tr>
        </AdminTable>
    </AdminDiv>

    
    </>)
}
export default Admin


const AdminDiv = styled.div`
    padding: 20px;
`
const PieDiv = styled.div`
    // border: 1px gray solid;
    border-radius: 30px;
    height: 400px;
    width: 850px;
`
const BarDiv = styled.div`
    // border: 1px gray solid;
    border-radius: 30px;
    height: 600px;
    width: 700px;
`
const LineDiv = styled.div`
    // border: 1px gray solid;
    border-radius: 30px;
    height: 250px;
    width: 850px;
`
const LogDiv = styled.div`
    // border: 1px gray solid;
    border-radius: 30px;
    // height: 500px;
    width: 80%;
`
const Fieldset = styled.fieldset`
    float:right;
    text-align: right;
    border:none;
`
const AdminTable=styled.table`
    margin: 0 auto;
    width: 80%;
`
const Tr = styled.tr`
`
const Th = styled.th`
`
const Td = styled.td`
    border: 1px gray solid;
    border-radius: 30px;
    padding: 10px;
    // height: 50%;
    // width: 50%;
`
const Select = styled.select`
    width: 150px;
`
const Label = styled.label`
    padding : 10px;
`