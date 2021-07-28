<template>
  <Head />
  <router-view />
  <Foot />
</template>

<script>
import { defineComponent } from "vue";
import Head from "@/components/head";
import Foot from "@/components/foot";
export default defineComponent({
  name: "App",
  components: {
    Head,
    Foot,
  },
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
