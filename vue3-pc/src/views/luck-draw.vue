<template>
  <div class="container">
    <div class="wheel-wrapper">
      <!-- <div class="wheel-pointer" @click="onClickRotate">Start</div> -->
      <img
        class="wheel-pointer"
        @click="onClickRotate"
        src="@/assets/1.png"
        alt=""
      />
      <div
        class="wheel-bg"
        :class="{ freeze: freeze }"
        :style="`transform: rotate(${wheelDeg}deg)`"
      >
        <div class="prize-list">
          <div
            class="prize-item-wrapper"
            v-for="(item, index) in prizeList"
            :key="index"
          >
            <div
              class="prize-item"
              :style="
                `transform: rotate(${(360 / prizeList.length) * index}deg)`
              "
            >
              <div class="prize-name">
                {{ item.name }}
              </div>
              <div class="prize-icon">
                <img :src="item.icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      freeze: false,
      rolling: false,
      wheelDeg: 0,
      prizeNumber: 8,
      prizeListOrigin: [
        {
          icon: "https://picsum.photos/40?random=1",
          name: "$10000",
        },
        {
          icon: "https://picsum.photos/40?random=6",
          name: "Thank you!",
        },
        {
          icon: "https://picsum.photos/40?random=2",
          name: "$500",
        },
        {
          icon: "https://picsum.photos/40?random=3",
          name: "$100",
        },
        {
          icon: "https://picsum.photos/40?random=6",
          name: "Thank you!",
        },
        {
          icon: "https://picsum.photos/40?random=4",
          name: "$50",
        },
        {
          icon: "https://picsum.photos/40?random=5",
          name: "$10",
        },
        {
          icon: "https://picsum.photos/40?random=6",
          name: "Thank you!",
        },
      ],
    };
  },
  computed: {
    prizeList() {
      return this.prizeListOrigin.slice(0, this.prizeNumber);
    },
  },
  methods: {
    onClickRotate() {
      if (this.rolling) {
        return;
      }
      this.rolling = true;
      const { wheelDeg, prizeList } = this;
      const random = Math.floor(Math.random() * prizeList.length);
      console.log(random);
      this.wheelDeg =
        wheelDeg -
        (wheelDeg % 360) +
        6 * 360 +
        (360 - (360 / prizeList.length) * random);
      setTimeout(() => {
        this.rolling = false;
        alert("Result：" + prizeList[random].name);
      }, 4500);
    },
  },
};
</script>

<style>
.container {
  width: 1200px;
  margin: 0 auto;
}
.wheel-wrapper {
  width: 300px;
  height: 300px;
  transform: translate(0%, 0%);
  margin: 0 auto;
}

.wheel-pointer {
  height: 60px;
  border-radius: 1000px;
  position: absolute;
  left: 50%;
  top: 47%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 60px;
  z-index: 10;
}

.wheel-bg {
  width: 100%;
  height: 100%;
  border-radius: 1000px;
  overflow: hidden;
  transition: transform 4s ease-in-out;
  background-image: url("../assets/2.png");
  background-size: 100% 100%;
}

.freeze {
  transition: none;
  background: red;
}

.prize-list {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
}

.prize-item-wrapper {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
}

.prize-item {
  width: 100%;
  height: 100%;
  transform-origin: bottom;
}

.prize-name {
  padding: 16px 0;
}
</style>
