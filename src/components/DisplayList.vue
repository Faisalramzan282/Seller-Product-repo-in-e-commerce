<template>
   <div class="flex justify-evenly width-small">
    <button 
    class="lg:w-64 sm:w-48 w-full sm:max-w-xs  bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600 
    focus:outline-none focus:ring-2 focus:ring-blue-300 " 
    @click="createProduct"
    >Create Product</button>
    
    <button 
    class="lg:w-64 sm:w-48 w-full sm:max-w-xs bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600 
    focus:outline-none focus:ring-2 focus:ring-blue-300"
    @click="viewProduct()"
    >View Product</button>
    <button 
    class="lg:w-64 sm:w-48 w-full sm:max-w-xs bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600 
    focus:outline-none focus:ring-2 focus:ring-blue-300"
    @click="showCarts"
    >Show carts</button>
    
   </div>
    
    <router-view/>
</template>

<script>
export default {
  name: 'displayList',
  
  methods:{
    createProduct(){
        this.$router.push('/displayList/createTask')
    }, 
    
    viewProduct(){
    
        this.$router.push('/displayList/viewTask')
    },
    showCarts(){
      this.$router.push('/displayList/cart');
    }
  }
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


</style>>

