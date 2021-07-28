<template>
  <exception-page type="500" />
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    exceptionPage: () => import("@/components/exception/ExceptionPage"),
  },
});
</script>
<style scoped></style>
