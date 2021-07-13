<template>
  <div>
    Child:{{ count }} <br />
    myCount:{{ myCount(500) }}
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "App",
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
    ...mapGetters(["myCount"]),
    // ...mapGetters({
    //   myCount: "myCount",
    // }),
  },
};
</script>
<style  scoped>
</style>