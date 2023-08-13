<template>
   <div >
    <div class="bg-gray-300 py-8 grid grid-cols-6 center-grid-spec">
     
        
         <div  @click="ShowSideBar"
          @dblclick="this.toggleSideBar = false"
          class="cursor-pointer col-span-1"
       >
       <FontAwesomeIcon :icon="['fas', 'bars']" size="2x" />
         </div>
        
        <p class="col-span-1">Product Management</p>
        <SearchInputField v-if="windowWidth > 500"/>
       <LoginButtonDyn  v-if="windowWidth > 500" class="col-span-2" />
    </div>
    
    <!-- side bar  -->
    <div class="flex flex-col shadow-lg lg:w-64 sm:w-48 w-full" 
     v-show="toggleSideBar"
    >
    
      <button  
      class="hover:bg-adb4cc px-3 py-3
    focus:outline-none  text-left"
    @click="createProduct"
    >Create Product</button>
    <button 
    class="hover:bg-adb4cc px-3 py-3
    focus:outline-none  text-left"
    @click="viewProduct()"
    >View Product</button>
    <button 
    class="w-full hover:bg-adb4cc px-3 py-3
    focus:outline-none  text-left"
    @click="showCarts"
    >Show carts</button> 
    <LoginButtonDyn  v-show="windowWidth < 500" 
    class="lg:w-64 sm:w-48 w-full hover:bg-adb4cc px-3 py-3
    focus:outline-none  text-left"
     />
     <button v-if="windowWidth < 500" 
     @click="showSearchProduct"
     class="lg:w-64 sm:w-48 w-full hover:bg-adb4cc px-3 py-3
    focus:outline-none  text-left"
     >Seach Products</button>
    </div>
  </div>
    
    <router-view/>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LoginButtonDyn from './LogoutButtonDyn.vue';
import SearchInputField from './SearchInputField.vue';
library.add(faBars);
export default {
  name: 'displayList',
  data() {
    return {
      toggleSideBar : false,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };
  },
  components:{
    FontAwesomeIcon,
    LoginButtonDyn,
    SearchInputField
},
  created() {
    window.addEventListener('resize', this.updateDimensions);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  },
  methods:{
    updateDimensions() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },
    createProduct(){
        this.$router.push('/displayList/createTask')
    }, 
    
    viewProduct(){
    
        this.$router.push('/displayList/viewTask')
    },
    showCarts(){
      this.$router.push('/displayList/cart');
    },
    ShowSideBar(){
      this.toggleSideBar = true ; // for open side bar 
    }
  }, 
  updated() {
    
  },
}
</script>

<style scoped>
@media screen and (max-width: 640px){
  .width-small{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    

}
}
.hover\:bg-adb4cc:hover {
  background-color: #adb4cc;
}

  @media screen and (max-width: 500px)
  {
     /* for centring the spaces */
      .col-span-1{                   
        grid-template-columns: repeat(6, 1fr);
    
     }
     
 


}
</style>>

