<template>
  <div class="foot">
    <div>
      <a-back-top />
    </div>
    <div class="desc">公司地址：武汉市青山区友谊大道999号武钢大厦A座23层</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Foot",
});
</script>
<style lang="scss" scoped>
.foot {
  min-width: 100%;
  .desc {
    margin-top: 20px;
    font-size: 20px;
    background: #414141;
    min-height: 80px;
    line-height: 80px;
    text-align: center;
    color: #fff;
  }
}
</style>
