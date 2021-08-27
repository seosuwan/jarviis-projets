import React from 'react';
import { Link } from 'react-router-dom';


const Navi = () => (
    <div>
        <NaviList>
            <NaviItem><Link to='./Setting'>Setting</Link></NaviItem>
            <NaviItem></NaviItem>
            <NaviItem></NaviItem>
        </NaviList>
    </div>
)
export default Navi