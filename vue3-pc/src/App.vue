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
<style lang="scss"></style>
