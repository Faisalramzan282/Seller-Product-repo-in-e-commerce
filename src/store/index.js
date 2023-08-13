import { createStore } from 'vuex'
// import VuexPersist from 'vuex-persistedstate';

export default createStore({
  state: {
    userData: [],
    tasks: [],
    addToCarts: [],
    cartsCount: []
  },
  
  mutations: {
    CREATE_USER(state, payload)
    {
      state.userData = payload;
    },
    CREATE_TASKS(state, task) {
      state.userData.push(task);
    },
    CREATE_TASK_USER(state,formData)
    {
      state.tasks.push(formData);
    }, 
    ATT_TO_CART(state,payload){
      state.addToCarts.push(payload);
      // console.log("cards object in store mutations ===>", state.addToCarts);
      // console.log("cards object in store mutations ===>", state.addToCarts);
     
    }, 
    ADD_CARTS_COUNT(state,  payload){
      state.addToCarts.push(payload);
    }
  },
  actions: {
    createUser({commit}, form)
    {
    commit('CREATE_USER', form)
    console.log(form.password);
    localStorage.setItem('userEmail', form.email);
    localStorage.setItem('userPassword', form.password);
    // console.log(userData);
    }, 
    validateUser({commit},loginForm)
    {
      commit('CREATE_USER', loginForm);
    
    },
   
    createTask( {commit}, form ) {
      commit('CREATE_TASK_USER', form)
      // localStorage.setItem('formTasks', this.state.tasks);
      // console.log(localStorage.getItem('formTasks'))

    }, 
    updateTask(_, {id,payload})
    {
      // console.log("payload in store", payload);
      // console.log("id in store", id);
      this.state.tasks.splice(id, 1 , payload);
    }, 
    addToCart({commit}, payload)
    {
    
     commit("ATT_TO_CART", payload);
    //  console.log("payload from action", payload)
    }, 
    cartsCount({commit} , payload){
    //  console.log("payload id in store count", id );
     commit('ADD_CARTS_COUNT',  payload)
     
    }
  },
  getters: {
    getUser(state)
    {
      return state.userData;
    },
    getTasks(state){
       return state.tasks;
    },
    getCarts(state){
      return state.addToCarts
    }, 
    getCartsCount(state){
     return state.cartsCount;
    }, 
   
  },
})


