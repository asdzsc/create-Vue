<template>
  <div id="app">
    <heade />
    <router-view class="content" />
    <foot />
  </div>
</template>

<script>
import heade from "@/components/head";
import foot from "@/components/foot";
// import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  name: "App",
  components: {
    heade,
    foot,
  },
  data() {
    return {
      // locale: zhCN,
    };
  },
  // 监听路由的变化 回到顶部
  watch: {
    $route: {
      handler() {
        try {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } catch (e) {
          console.log(e);
        }
      },
      deep: true,
    },
    // $route: () => {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 1100px;
  margin: 0 auto;
}
</style>
