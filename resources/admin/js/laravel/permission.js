import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  NProgress.start()
  store.dispatch('user/CheckLogin').then(res => {
    const isLogged = res.login || false
    if(isLogged) {
      if (to.path === '/login') {
        next({ path: '/' })
        NProgress.done()
      } else {
        next()
      }
    } else {
      location.reload()
    }
  }).catch((err) => {
    location.reload()
  })
})

router.afterEach(() => {
  NProgress.done()
})
