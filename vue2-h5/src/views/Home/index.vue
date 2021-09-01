<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="item in banners"
        :key="item.id"
        :style="item.url ? 'cursor: pointer;' : ''"
      >
        <img :onerror="defImg" :src="baseUrl + item.phoneImg" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { bannerList } from "@/api/index";
export default {
  name: "Home",
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
      // defImg: 'this.src="/assets/zwtp.jpg"',
      defImg: require("@/assets/zwtp.jpg"),
      banners: [],
    };
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
        if (res.code === 0) {
          this.banners = res.data;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.my-swipe {
  img {
    width: 100%;
  }
}
</style>
