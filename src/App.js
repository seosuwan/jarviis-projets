import React from 'react'
import {Route,Switch} from 'react-router-dom'
import {Header, Navi} from 'common/index';
import { History } from './history/index';
import { Setting } from 'setting';
import {Home} from 'common';
import { Review } from 'review';
import {Edit} from './history/index'




const App = () => (
  <>
  <Header/>
  <Navi/>
  <Switch>
  <Route exect path='/home' component={Home}/>
  {/* <Route exect path='/header' component={Header}/> */}
  <Route exect path='/history' component={History}/>
  <Route exect path='/review' component={Review}/>
  <Route exect path='/setting' component={Setting}/>
 
  </Switch>

  </>
)

export default App;
