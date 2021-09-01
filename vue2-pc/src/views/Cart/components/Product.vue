<template>
  <div>
    <h2>商品列表</h2>
    <hr />
    <ul>
      <li v-for="item in products">
        <p>
          Name：{{ item.name }} <br />
          Price：{{ item.price }}
        </p>
        <button :disabled="item.inventory == 0" @click="addCart(item)">
          放入购物车
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    ...mapState("product", {
      products: "allProduct",
    }),
  },
  mounted() {
    this.loadData();
    //   loadData()
  },
  methods: {
    ...mapActions("product", ["loadData"]),
    ...mapActions("cart", ["addCart"]),
  },
};
</script>
<style scoped>
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
