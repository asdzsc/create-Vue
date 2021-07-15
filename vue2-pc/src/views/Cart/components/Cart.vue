<template>
  <div>
    <h2>购物车</h2>
    <hr />
    <ul>
      <li v-for="item in carts">
        <p>
          Name：{{ item.name }} <br />
          Price：{{ item.price }}
        </p>
      </li>
    </ul>
    AllPrice：{{ totalPrice }}
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    ...mapState("cart", {
      carts: "allCart",
    }),
    ...mapGetters("cart", ["totalPrice"]),
  },
};
</script>
<style  scoped>
h2 {
  font-size: 30px;
}
li {
  display: flex;
  align-items: center;
}
p {
  margin-right: 20px;
}
</style>