import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpview from '../views/SignUpview.vue'
import Loginview from '../views/LoginView.vue'
import DisplayList from '../views/DisplayListView.vue'
import createTask from '../views/createTodoview.vue';
import ViewTaskView from '../views/ViewTaskview.vue';
// import UpdateTask from  '../views/UpdateTaskview';
import UpdateTask from '../views/UpdateTaskview.vue'
import CartsDisplayview from '../views/CartsDisplayView.vue';
// for user routing 
import AddToCart  from '../UserViews/AddToCartView.vue';
import UserViewTask from '../UserViews/ViewTaskView.vue'
//for navigation routing techniques 
import store from '@/store'
const routes = [
   //admin routing 
  {
    path: '/',
    name: 'home',
    component: HomeView, 
    meta: { requiresAuth: true, role: 'admin' },
  },
  //signUp , login both same in user and admin 
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUpview, 
    meta: { requiresAuth: true, role: 'admin' },
  }, 
  {
    path: '/login',
    name: 'login',
    component: Loginview, 
    meta: { requiresAuth: true, role: 'admin' },
  }, 
  {
    path: '/displayList',
    name: 'DisplayList',
    component: DisplayList,
    meta: { requiresAuth: true, role: 'admin' },
    children:[
      {
        path:'createTask',
        name: 'createTask',
        component: createTask
      }, 
      {
        path:'viewTask',
        name: 'viewTask',
        component: ViewTaskView
      },
      {
        path:'updateTask',
        name: 'updateTask',
        component: UpdateTask
      }, 
      {
        path: 'cart',
        name: 'cart',
        component: CartsDisplayview
      }
    ], 
  }, //Now for user routing 
  {
    path: '/UserAddToCart',
    name: 'UserAddToCart',
    component: AddToCart, 
    meta: { requiresAuth: true, role: 'user' }
  }, 
  {
    path: '/UserViewTask', 
    name: 'UserViewTask', 
    component: UserViewTask, 
    meta: { requiresAuth: true, role: 'user' }
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.matched && to.matched.some(route => routes.meta.requiresAuth && route.meta.role === 'user')) {
//     if (store.state.isAuthenticated && store.state.role === 'user') {
//       next('/UserViewTask')
//     } else {
//       next('/login'); // Redirect to login if not authenticated or not the right role
//     }
//   // } else {
//   //   next(); // Allow navigation for other routes
//   }
// });
// router.beforeEach((to, from, next) => {
//   if (to.matched && to.matched.some(route => routes.meta.requiresAuth && route.meta.role === 'admin')) {
//     if (store.state.isAuthenticated && store.state.role === 'admin') {
//       next('/displayList')
//     } else {
//       next('/login'); // Redirect to login if not authenticated or not the right role
//     }
//   // } else {
//   //   next(); // Allow navigation for other routes
//   }
// });
//===================
router.beforeEach((to,from, next)=>{
   const isAuthenticated = store.getters['getUser'];
   console.log("Authenticated User", isAuthenticated);
   if(isAuthenticated.slectedRole === 'admin'){
    return { name : "DisplayList"}
   }
   else if(isAuthenticated.slectedRole === 'user')
   {
    return { name : "UserViewTask"}
   }
   next();
})
export default router
