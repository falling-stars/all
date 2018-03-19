const load = component => () => import(`../pages/${component}.vue`)


export default [
  {
    path: '/',
    component: load('index'),
    meta: {
      tagX: 0,
      keepAlive: true
    }
  },
  {
    path: '/start',
    component: load('start'),
    meta: {
      tagX: 100
    }
  },
  {
    path: '/document',
    component: load('document'),
    meta: {
      tagX: 200
    }
  },
  {
    path: '/hub',
    component: load('hub'),
    meta: {
      tagX: 300
    }
  },
  {
    path: '/about',
    component: load('about'),
    meta: {
      tagX: 400
    }
  }
]
