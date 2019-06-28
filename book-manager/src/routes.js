import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import AppContainer from './containers/app/AppContainer'
import HomeContainer from './containers/home/HomeContainer'
import BookContainer from './containers/book/BookContainer'

const routes = (
  <Router>
    <AppContainer>
      <Switch>
        <Route path='/' component={HomeContainer} exact />
        <Route path='/books/new' component={BookContainer} exact />
        <Route path='/books/:bookId' component={BookContainer} exact />
        { /* fallback, should be the last entry */}
        <Redirect from='*' to='/' />
      </Switch>
    </AppContainer>
  </Router>
)

export default routes
