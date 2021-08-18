<template>
  <a-config-provider :locale="locale">
    <Head />
    <router-view />
    <Foot />
  </a-config-provider>
</template>

<script>
import { defineComponent } from "vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import Head from "@/components/head";
import Foot from "@/components/foot";
export default defineComponent({
  name: "App",
  components: {
    Head,
    Foot,
  },
  data() {
    return {
      locale: zhCN,
    };
  },
});
</script>
<style lang="scss"></style>
