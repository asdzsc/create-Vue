<template>
  <div class="header">
    <ul>
      <!-- <li
        v-for="(item, index) in options"
        :key="item.pageUrl"
        :class="{ active: current === index }"
        @click="handleMenu(item, index)"
      >
        {{ item.name }}
      </li> -->
      <!-- <li :class="{ active: isActive }" @click="navigate">
          {{ item.name }}
        </li> -->

      <!-- <li :class="isActive ? 'active' : ''" @click="navigate">
        {{ item.name }}
      </li> -->
      <router-link
        v-for="item in options"
        :to="item.pageUrl"
        custom
        v-slot="{ navigate, isActive }"
      >
        <li :class="[isActive && 'active']" @click="navigate">
          {{ item.name }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "Head",
  setup() {
    const router = useRouter();
    let state = reactive({
      current: 0,
      options: [
        {
          name: "首页",
          pageUrl: "/home",
        },
        {
          name: "关于集团",
          pageUrl: "/about",
        },
        {
          name: "新闻动态",
          pageUrl: "/news",
        },
        {
          name: "antd of vue",
          pageUrl: "/form",
        },
        {
          name: "echart",
          pageUrl: "/echart",
        },
      ],
    });
    const handleMenu = (item, index) => {
      state.current = index;
      router.push({
        path: item.pageUrl,
      });
    };
    return {
      ...toRefs(state),
      handleMenu,
    };
  },
});
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  line-height: 80px;
  ul {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    li {
      flex: 1;
      list-style: none;
      cursor: pointer;
      text-align: center;
    }
    .active {
      background: cadetblue;
      color: #ffffff;
    }
  }
}
</style>
