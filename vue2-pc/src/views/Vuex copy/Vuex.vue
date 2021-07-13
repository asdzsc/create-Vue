<template>
  <div>
    <div>
      <h2>vuex</h2>
      <button @click="handleMin">-</button>
      {{ count }}
      <button @click="handleAdd">+</button>
      <!-- <button @click="handleDouble">double</button> -->
      <br />
      <!-- <button @click="minus(20)">-</button>
      {{ count }}
      <button @click="add(20)">+</button> -->
      <br />
      myCount:{{ myCount(100) }}
    </div>

    <Child />
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";

import { ADD, MINUS } from "@/store/mutationType";
import { INCREMENT, DECREMENT } from "@/store/actionType";
import Child from "./Child";
export default {
  name: "App",
  components: {
    Child,
  },
  data() {
    return {};
  },
  //   computed: {
  //     count() {
  //       return this.$store.state.count;
  //     },
  //   },
  //   computed: mapState(["count"]),
  computed: {
    ...mapState(["count"]),
    // myCount() {
    //   return this.$store.state.count * 100;
    // },
    // ...mapGetters(["myCount"]),·
    // ...mapGetters({
    //   myCount: "myCount",
    // }),
    ...mapGetters(["myCount"]),
  },

  mounted() {
    // console.log(this.$store);
  },
  methods: {
    handleAdd() {
      // step 1
      this.$store.dispatch(INCREMENT, 20);
      // vuex 中操作数据为同步时可以不需要dispatch  直接commit
      // this.$store.commit(ADD, 20);
      // this.$store.commit({
      //   type: "add",
      //   num: 10,
      // });
    },
    handleMin() {
      if (this.count > 0) {
        this.$store.dispatch(DECREMENT, 20);
      }
    },
    // 组合action
    async handleDouble() {
      // this.$store.dispatch("doubleCount");
      // this.$store.dispatch(DECREMENT, num)
    },
  },
  // methods: {
  //   ...mapMutations(["add", "minus"]),
  // },
};
</script>
<style  scoped>
button {
  width: 20px;
}
</style>