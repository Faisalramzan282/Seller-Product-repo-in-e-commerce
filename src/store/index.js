import { createStore } from "vuex";
// import VuexPersist from 'vuex-persistedstate';
import adminModule from './admin.js';
import userModule from './user.js'
export default createStore({  
  modules:{
      
      admin:  adminModule,
      user: userModule
    }
});
