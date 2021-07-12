<template>
  <div>
    <div>
      <h2>vuex</h2>
      <button @click="handleMin">-</button>
      {{ count }}

      <button @click="handleAdd">+</button>
      <br />
      myCount:{{ myCount }}
    </div>

    <Child />
  </div>
</template>

<script>
import { mapState } from "vuex";
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
    myCount() {
      return this.$store.state.count * 100;
    },
  },

  mounted() {
    // console.log(this.$store);
  },
  methods: {
    handleAdd() {
      this.$store.dispatch("increment");
    },
    handleMin() {
      if (this.count > 0) {
        this.$store.dispatch("decrement");
      }
    },
  },
};
</script>
<style  scoped>
button {
  width: 20px;
}
</style>