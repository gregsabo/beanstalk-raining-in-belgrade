require('babel/polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Rain',
    description: 'All the modern best practices in one example.',
    head: {
      titleTemplate: 'Rain: %s',
      meta: [
        {name: 'description', content: 'Is it raining in Belgrade right now?'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'},
        {name: 'apple-mobile-web-app-capable', content: 'yes'},
        {name: 'apple-mobile-web-app-status-bar-style', content: '#2C3E50'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Rain'},
        {property: 'og:image', content: 'http://beanstalk-raining-in-belgrade.herokuapp.com/apple-touch-icon.png'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Rain'},
        {property: 'og:description', content: 'Is it raining in Belgrade right now?'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@gregsabo'},
        {property: 'og:creator', content: '@gregsabo'},
        {property: 'og:title', content: 'Is it raining in Belgrade right now?'},
        {property: 'og:description', content: 'Is it raining in Belgrade right now?'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ],
      link: [
        {'rel': 'apple-touch-startup-image', 'href': '/startup.png'}
      ],
    }
  },

}, environment);
