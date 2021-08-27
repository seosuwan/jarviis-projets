import {Route,Switch} from 'react-router-dom'
import React from 'react'
import Header from "./components/Header";
import Setting from "./components/Setting";


const App = () => (
  <>
  <Header/>
  <Switch>
  <Route exect path='/Header' component={Header}/>
  <Route exect path='/Setting' component={Setting}/>
  </Switch>

  </>
)

export default App;
