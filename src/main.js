import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from '$redux/store'
import { browserHistory as history, Router, Route, IndexRedirect } from 'react-router'
// import routes from './routes'
import Playing from './components/movie/Playing'
import Coming from './components/movie/Coming'
import movie from './containers/movie.jsx'
import CinemaList from './components/cinemaList/CinemaList'
import Shop from './components/shop/Shop'
import Me from './components/me/Me'
import Film from './components/film/film'
import MainWrap from './containers/MainWrap'

const scrollTop = function () {
  window.scrollTo(0, 0)
}

const routes = (
  <Route path='/' component={MainWrap} onEnter={scrollTop}>
    <IndexRedirect to='/movie' />
    <Route path='movie' component={movie} onEnter={scrollTop}>
      <IndexRedirect to='/movie/playing' />
      <Route path='playing' component={Playing} />
      <Route path='coming' component={Coming} />
    </Route>
    <Route path='film/:id' component={Film} onEnter={scrollTop} />
    <Route path='cinema' component={CinemaList} onEnter={scrollTop} />
    <Route path='shop' component={Shop} onEnter={scrollTop} />
    <Route path='me' component={Me} onEnter={scrollTop} />
  </Route>
)

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history} routes={routes} key={Math.random()} />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(App)

if (module.hot) {
  module.hot.accept(MainWrap, () => render(MainWrap))
}
