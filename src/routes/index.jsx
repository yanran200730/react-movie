import App from './../App'
import Movie from './../containers/movie'
import Me from './../components/me/Me'
import Shop from './../components/shop/Shop'
import Cinema from './../components/cinema/Cinema'
import Playing from './../components/movie/Playing'
import Coming from './../components/movie/Coming'

export default [
  {
    path: '/',
    component: App,
    indexRoute: {component: Movie},
    indexRedirect: {to: '/movie'},
    childRoutes: [
      {
        path: 'movie',
        component: Movie,
        indexRoute: {component: Playing},
        indexRedirect: {to: '/playing'},
        childRoutes: [
          {path: 'playing', component: Playing},
          {path: 'coming', component: Coming}
        ]
      },
      {
        path: 'film',
        component: Film
      },
      {
        path: 'cinema',
        component: Cinema
      },
      {
        path: 'shop',
        component: Shop
      },
      {
        path: 'me',
        component: Me
      }
    ]
  }
]
