<template>
  <div>Home</div>
</template>

<script>
import { bannerList } from "@/api/index";
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    this._bannerList();
  },
  methods: {
    _bannerList() {
      bannerList({
        bannerType: "3",
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style  scoped>
</style>