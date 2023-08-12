<template>
  <div>
    <div>
      <div>
        <ul>
          <li v-for="(task, idx) in getTasks" :key="idx">
            <div
              class="w-1/2 border border-2 border-solid divide-y divide-slate-200 mt-8 mb-8 mx-auto specific-width-cont"
            >
              <p class="text-start p-4">Title: {{ task.title }}</p>
              <p class="text-start p-4">Description: {{ task.desc }}</p>
              <p class="text-start p-4"> <b>Price:</b>{{ task.price }}</p>
              <button
               
                @click="updateTask(idx)"
                class="text-white w-1/4 py-2 bg-blue-500 rounded mt-4 mb-4 hover:col-white"
              >
               Update
              </button>
               <!-- pop up div container -->
              <div v-show="editIndex == idx" 
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
              >Enter updated price </label>
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
              class="mt-6 mb-3 bg-blue-500 text-white px-6 py-3 rounded-lg"                @click="ClosePopUp"
              >
                close
              </button>

                </div>
              
              </div>
              
            </div>
            </div>

            <!-- pop up div container -->
            
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters } from "vuex";

export default {
  name: "UpdateTask",
  data() {
    return {
      showPopUp: false,
      editIndex: -1,
      popUpForm: {
        title: "",
        desc: "",
        price: "",
      },
    };
  },

  computed: {
    ...mapGetters(["getTasks"]),
  },
  methods: {
    ...mapActions({update:'updateTask'}),
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
    //   this.$router.push("/displayList");
       this.editIndex=-1
    },
    conUpdateBtn(idx){
        this.update({id:idx, payload: this.popUpForm});
        this.editIndex = -1;
    }
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
