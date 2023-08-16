<template>
    <div>
       <div class="flex justify-end m-2">
        <h2 class="m-4">Favourite Products: {{ carts.length }}</h2>
        <p class="border border-2 inline-block max-w-[100%] cursor-pointer px-4 bg-stone-200 py-4 rounded-lg" @click="carts.length=0">Remove All</p>

       </div>
     
        <ul>
        <li v-for="(task,idx) in carts" :key =idx>
            <div
            class="md:w-1/2 border border-2 border-solid divide-y divide-slate-200 mt-8 mb-8 mx-auto specific-width"
          >
            <p class="text-start p-4"><b>Title:</b> {{ task.title }}</p>
            <p class="text-start p-4"><b>Description:</b> {{ task.desc }}</p>
            <p  class="text-start p-4"> <b>Price:</b>{{ task.price }}</p>
           
            <button 
              @click="removeCart(idx)"
              class=" w-1/2 flex mx-auto m-2 items-center justify-center bg-blue-500 text-white px-4 py-2 rounded"
            >
              Remove Cart
            </button>
            <div class="flex flex-row gap-4 justify-center">
                <img
              
                @click="plusCount(task,idx)"
                class="w-1/12 cursor-pointer"
                src="../assets/icons/plus.png"
                alt="plus"
              />
               <h2 class="text-3xl">{{ task.quantity}}</h2>
              <img
              @click="minusCount(idx, task)"
                class="w-1/12 cursor-pointer"
                src="../assets/icons/minus-sign.png"
                alt="minus"
              />
            </div>
            </div>
            
        </li>
    </ul>
    
        <p class="bg-black px-4 py-3 mx-auto text-white w-80 mb-4">Total  : $ <span class="font-bold text-3xl">{{ totalPrice}}</span></p>
      <!-- <div >
        <checkSlots>
        <p>Hello, dear friend! Wishing you a fantastic day.</p>
         <template #header>
         <h1>Here might be a page title</h1>
         </template>
        
        </checkSlots>
          
      </div> -->
   
    </div>
    
      
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default{
    
    name: "UserAddToCart",
    computed:{
        ...mapGetters({carts: "getCarts"}),
        
        totalPrice(){
          let CartShow = "No Cart";
         let totalPRICE = this.carts.reduce((total, carts) => total + carts.price, 0);
         if(totalPRICE !== 0)
         {
          return totalPRICE;
         }
         else{
          return CartShow;
         }
         
        }
       
      
    }, 
    data(){
        return{ 

        }
    },
    methods:{
        ...mapActions({cartsCoun: 'cartsCount'}),
        removeCart(idx)
        {
            this.carts.splice(idx, 1);
        },
        plusCount(task){
          this.cartsCoun(task);
        },
        minusCount(idx)
        {
          this.carts.splice(idx, 1);
        },
    }, 
   

}

</script>
<style>

  @media screen and (max-width: 640px) {
  .specific-width{
    width: 98%;
  
  }
}


</style>