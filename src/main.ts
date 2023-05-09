import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

/*router.beforeEach((to, from, next) => {
  const auth = useUserStore()
  console.log(to.meta.isRequiredAuth);
  if (to.meta.isRequiredAuth){
    if(auth.isLogin()){
      next()
    }
    else{
      next('/login')
    }
  }
  else {
    next()
  }
})*/

createApp(App).use(pinia).use(Toast).use(router).mount('#app')
