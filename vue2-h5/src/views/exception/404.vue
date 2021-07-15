<template>
  <exception-page type="404" />
</template>

<script>
export default {
  components: {
    exceptionPage: () => import("@/components/exception/ExceptionPage"),
  },
};
</script>

<style scoped></style>
