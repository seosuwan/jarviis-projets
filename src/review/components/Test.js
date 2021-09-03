import React from 'react'
import '../styles/Test.css'
import Chart1 from './Chart1'
import Chartdata from './Chartdata'
import reviewimg from '../images/reviewimg.jpg'
import styled from 'styled-components'

const Test = () => (<>
<div class="wrap">

<label for="menu1" class="label e">
  <span class="rotate">
    <p>USER</p>
  </span>
</label>
<input type="radio" name="navigation" id="menu1" class="button"/>

<div class="contents">
  {/* <Chart1/> */}
  <Chart1 data= {Chartdata}/>

</div> 


<label for="menu2" class="label d">
  <span class="rotate">
    <p>Comparison</p>
  </span>
</label>
<input type="radio" name="navigation" id="menu2" class="button"/>
<div class="contents">
  <Chart1 data= {Chartdata}/>
    
  
</div>


<label for="menu3" class="label c">
  <span class="rotate">
    <p>꽃 키워볼까요..</p>
  </span>
</label>    
<input type="radio" name="navigation" id="menu3" class="button"/>
<div class="contents">
  <Img src = {reviewimg} alt=""/>
</div>
</div></>
)
export default Test

const Img = styled.img`
  height: 100%;
`