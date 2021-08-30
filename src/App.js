import React from 'react'
import {Route,Switch} from 'react-router-dom'
import {Header,History,Review,Setting,Navi} from 'components/index';
import {Home} from 'pages/index';




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
