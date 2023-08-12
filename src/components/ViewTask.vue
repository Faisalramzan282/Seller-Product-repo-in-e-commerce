<template>
  <div>
    <div>
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
              @click="updateTask"
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
    };
  },
  methods: {
    ...mapActions({ addToCart: "addToCart" }),
    deleteTask(idx) {
      this.getTasks.splice(idx, 1);
    },
    updateTask() {
      this.$router.push("/displayList/updateTask");
    },
    addCartBtn(task) {
      console.log("task in update", task);
      this.addToCart(task);
    },
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
