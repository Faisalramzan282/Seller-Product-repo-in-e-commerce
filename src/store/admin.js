export default{

    state: {
       isAuthenticated: true,
        userData: [],
        tasks: [],
        addToCarts: [],
        cartsCount: [],
      },
    
      mutations: {
        CREATE_USER(state, payload) {
          state.userData = payload;
          
        },
        CREATE_TASKS(state, task) {
          state.userData.push(task);
        },
        CREATE_TASK_USER(state, formData) {
          state.tasks.push(formData);
        },
        ATT_TO_CART(state, payload) {
          state.addToCarts.push(...state.tasks.map(item => ({ ...item })));
          console.log("cartsCount array after pushing:", state.addToCarts);
          // state.addToCarts.push(payload);
          console.log("payload is===>", payload);
        },
        ADD_CARTS_COUNT(state, payload) {
            let matchedInd = state.addToCarts.findIndex(
            (obj) => obj.id === payload.id
          );
          if (matchedInd !== -1) {
                  state.addToCarts[matchedInd].quantity =
                  state.addToCarts[matchedInd].quantity + 1;
                 
                const newPrice = state.addToCarts[matchedInd].price * state.addToCarts[matchedInd].quantity;
                if(matchedInd <state.cartsCount.length){
                    state.cartsCount[matchedInd].price =  newPrice
                  //  state.addToCarts[matchedInd].price = newPrice
                }
                else{
                  state.cartsCount.push({ id: payload.id, price: newPrice, quantity: payload.quantity, title: payload.title, desc: payload.desc });
                }
                console.log("carts count is ==>", state.cartsCount);
          } else {
            state.cartsCount.push(payload);
          }
          console.log("action called in payload ", payload);
        },
      },
      actions: {
        createUser({ commit }, form) {
          commit("CREATE_USER", form);
          console.log(form.password);
          localStorage.setItem("userEmail", form.email);
          localStorage.setItem("userPassword", form.password);
          // console.log(userData);
        },
        validateUser({ commit }, loginForm) {
          commit("CREATE_USER", loginForm);
          // console.log("login form credentials", loginForm)
        },
    
        createTask({ commit }, form) {
          commit("CREATE_TASK_USER", form);
          // localStorage.setItem('formTasks', this.state.tasks);
          // console.log(localStorage.getItem('formTasks'))
        },
        updateTask(_, { id, payload }) {
          this.state.tasks.splice(id, 1, payload);
        },
        addToCart({ commit }, payload) {
          commit("ATT_TO_CART", payload);
          //  console.log("payload from action", payload)
        },
        cartsCount({ commit }, payload) {
          commit("ADD_CARTS_COUNT", payload);
        },
      },
      getters: {
        getUser(state) {
          return state.userData;
        },
        getTasks(state) {
          return state.tasks;
        },
        getCarts(state) {
          return state.addToCarts;
        },
        getCartsCount(state) {
          return state.cartsCount;
        },
      },

}