<template>
  <div>
    Child:{{ count }} <br />
    myCount:{{ myCount }}
  </div>
</template>

<script>
import { mapState } from "vuex";
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
    myCount() {
      return this.$store.state.count * 100;
    },
  },
};
</script>
<style  scoped>
</style>