<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100 custome-class-bg-img">
  <div class="w-full sm:max-w-md p-6 bg-white rounded-lg shadow-md mt-10 mb-10">
    <h2 class="text-center text-xl font-semibold mb-6">SignUp</h2>
    <input v-model="form.email" required type="text" placeholder="Enter Email" class="w-full p-4 mb-10 border border-gray-300 rounded-lg focus:outline-none">
    <input v-model="form.password" required type="password" placeholder="Enter Password" class="w-full p-4 mb-10 border border-gray-300 rounded-lg focus:outline-none">
    <button @click="signup" class="w-full bg-blue-500 text-white mb-10 py-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
      Sign Up
    </button>
  </div>
</div>

</template>

<script>
import { mapActions } from 'vuex'
export default{
    name: 'SignUp',
    data(){
        return{
            form:{
            email: '',
            password: ''
            }
        
        }
    }, 
    methods:{
        ...mapActions(['createUser']),
        signup()
        {
           
            if(this.form.email != '' && this.form.password != '')
            {
                this.createUser(this.form);
                this.$router.push('/login')
               
            }
            
        }
    }
}
</script>

<style scoped>
.custome-class-bg-img{
  background-image: url('../assets/signUp.png');
  background-size: cover;
  background-repeat: no-repeat;
}

</style>