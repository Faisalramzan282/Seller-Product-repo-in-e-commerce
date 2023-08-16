<template>
  <div>
    <div>
      <ul>
        <li v-if="getTasks.length === 0">
       <p class="text-center font-bold text-3xl bg-black px-4 py-3 mx-auto text-white w-80 m-4">No Products</p>
     </li>
      </ul>
     
      <ul>
        <li v-for="(task, idx) in getTasks" :key="idx">
         
          <div
            class="w-1/2 border border-2 border-solid divide-y divide-slate-200 mt-8 mb-8 mx-auto specific-width-cont"
          >
            <p class="text-start p-4"><b>Title:</b> {{ task.title }}</p>
            <p class="text-start p-4"><b>Description:</b> {{ task.desc }}</p>
            <p class="text-start p-4"><b>Price:</b>{{ task.price }}</p>
            <button
              @click="deleteTask(idx)"
              class="w-1/2 flex mx-auto m-2 items-center justify-center bg-blue-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
            <button
              class="w-1/2 flex mx-auto m-2 items-center justify-center bg-blue-500 text-white px-4 py-2 rounded"
              @click="updateTask(idx)"
            >
              Update Product
            </button>
            <div class="flex flex-row justify-center">
             
              <button
                class="w-1/2 flex m-2 items-center justify-center bg-blue-500 text-white px-4 py-2 rounded"
                @click="addCartBtn(task)"
              >
                Add to cart
              </button>
             <!-- pop up for update -->
             <div
                v-show="editIndex == idx"
                class="absolute top-0 left-0 right-0 bottom-0 backdrop-filter backdrop-blur flex justify-center items-center"
              >
                <div p-10 bg-white rounded-lg shadow-lg>
                  <label
                    for="title"
                    class="text-left block mt-6 mb-6 text-sm font-medium text-gray-900 dark:text-white"
                    >Enter Updated Title</label
                  >

                  <input
                    id="title"
                    type="text"
                    v-model="popUpForm.title"
                    class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Walk"
                    required
                  />
                  <label
                    for="desciption"
                    class="text-left block mt-6 mb-6 text-sm font-medium text-gray-900 dark:text-white"
                    >Enter Updated Description</label
                  >
                  <input
                    id=" description"
                    type="text"
                    v-model="popUpForm.desc"
                    class="outline-none py-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Description"
                    required
                  />
                  <label
                    for="idNum"
                    class="text-left block mt-6 mb-6 text-sm font-medium text-gray-900 dark:text-white"
                    >Enter updated price
                  </label>
                  <input
                    id="idNum"
                    type="number"
                    placeholder="Enter Price"
                    v-model="popUpForm.price"
                    class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <div class="flex flex-col">
                    <button
                      class="mt-6 mb-3 bg-blue-500 text-white px-6 py-3 rounded-lg"
                      @click="conUpdateBtn(idx)"
                    >
                      Confirm Update
                    </button>
                    <button
                      class="mt-6 mb-3 bg-blue-500 text-white px-6 py-3 rounded-lg"
                      @click="ClosePopUp"
                    >
                      close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ViewTask",
  data() {
    return {
      count: 0,
      editIndex: -1,
      popUpForm: {
        title: "",
        desc: "",
        price: "",
      },
    };
  },
  methods: {
    ...mapActions({ addToCart: "addToCart", update:'updateTask'}),
    deleteTask(idx) {
      this.getTasks.splice(idx, 1);
    },
    updateTask(idx) {
    //   this.showPopUp = true;
      console.log("idx is ", idx);
      if(idx === this.editIndex)
      {
         this.editIndex = -1
      }
      else{
        this.editIndex = idx;
      }
    this.popUpForm.title=this.getTasks[idx].title
    this.popUpForm.desc=this.getTasks[idx].desc;
    this.popUpForm.price = this.getTasks[idx].price;

    
    },
    ClosePopUp() {
       this.editIndex=-1
    },

    addCartBtn(task) {
      this.addToCart(task);
      
    },
    conUpdateBtn(idx){
        this.update({id:idx, payload: this.popUpForm});
        this.editIndex = -1;
    }
  },
  computed: {
    ...mapGetters(["getTasks"]),
 
  },
};
</script>

<style scoped>
@media screen and (max-width: 640px) {
  .specific-width-cont {
    width: 98%;
  }
}
</style>
