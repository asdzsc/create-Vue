<template>
  <div>
    <Product></Product>
    <Cart></Cart>
  </div>
</template>

<script>
import Product from "@/views/Cart/components/Product";
import Cart from "@/views/Cart/components/Cart";
export default {
  name: "App",
  components: {
    Cart,
    Product,
  },
  data() {
    return {};
  },
};
</script>
<style  scoped>
</style>