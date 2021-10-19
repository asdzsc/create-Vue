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
    <h2>moduleA：{{ header }}</h2>
    <h2>moduleB：{{ title }}</h2>
    <button @click="handleChange">change</button>
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
    ...mapState("m1", ["header"]),
    ...mapState("m2", ["title"]),
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
    console.log(this.$store.state.m1.header);
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
    handleDouble() {
      // this.$store.dispatch("doubleCount");
      this.$store.dispatch(DECREMENT, 20).then((res) => {
        console.log(res);
      });
    },
    // 模块事件
    handleChange() {
      // 模块事件必须分别触发
      this.$store.commit("join", 10);
      // this.$store.dispatch("joinDispatch", 10);
      this.$store.commit("m1/join", "aa");
      this.$store.commit("m2/join", "aa");
    },
    // ...mapMutations({
    //   add() {
    //     return this.$store.commit(ADD, 20);
    //   },
    // }),
    // ...mapMutations(["join"]),
    // ...mapMutations("m1", ["join"]),
    // ...mapMutations("m2", ["join"]),
  },
  // methods: {
  //   ...mapMutations(["add", "minus"]),
  // },
};
</script>
<style scoped>
button {
  /* width: 20px; */
  padding: 5px;
  box-sizing: border-box;
}
</style>
