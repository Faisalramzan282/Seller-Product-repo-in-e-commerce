<template>
  <!-- class="text-white p-4 bg-slate-600 mr-2 rounded" -->
  <div>
     <div class="bg-gray-300 py-8">
      <p class="font-black text-2xl">Products Seller Pannel</p>
     </div>
    <div class="flex flex-col mt-32  gap-10  items-center">
      <router-link class="cutom-width w-30 border border-gray-400 py-4 mx-auto text-xl font-medium rounded bg-e2ead7"  to="/signUp">
      <font-awesome-icon id="bounce"  :icon="faUser" :class="['fa-lg', 'bounce']" />
     SignUp
    </router-link> 
     <router-link 
     class="w-30 cutom-width border border-gray-400 py-4 mx-auto text-xl font-medium rounded bg-e2ead7"
      to="/login">
      <span><font-awesome-icon icon="right-to-bracket" :class="['fa-lg', 'fa-beat', 'bounce']" /></span>
     Login
     </router-link>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';  // for signUp icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'  //for login icon

library.add(faRightToBracket);
export default {
  
  name: 'HelloWorld',
  components:{
    FontAwesomeIcon
  },
  data() {
    return {
      faUser
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-10px);
  }
}
#bounce{
  animation: bounce 2s infinite;
}
.cutom-width{
  @media (max-width: 599px) {
    width: 80%;
  }
}

</style>
