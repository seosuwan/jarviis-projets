import React from 'react';
// import Chartdata from '../components/Chartdata';
import MyPage from '../../common/components/Mypage';
// import Chart1 from '../components/Chart1';
import styled from 'styled-components';
import Test from '../components/Test'


const Review = () => {
    return(<>
    
    
    <div><MyPage/>
    <Table> 
        <Tr>
            <Td><Test/>
            </Td>
            
               
        </Tr>
    </Table>
    </div>
    </>)
}
export default Review

const Div = styled.div `
    display:block;
    width: 500px;
    height:348px;
    border:solid 1px;
    text-size:

`
const Table = styled.table`
    height:10%
    width:100%

`
const Tr = styled.tr`
    height:100%
    width:100%

`
const Td = styled.td`
    height:100%
    width:100%

`