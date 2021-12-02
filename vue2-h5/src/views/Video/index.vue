<template>
  <div class="video_container">
    <LuckyWheel
      ref="LuckyWheel"
      width="300px"
      height="300px"
      :blocks="blocks"
      :prizes="prizes"
      :buttons="buttons"
      @start="startCallBack"
      @end="endCallBack"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      blocks: [
        { padding: "13px" },
        {
          padding: "20px",
          imgs: [
            {
              src: require("../../assets/bg.png"),
              width: "100%",
              rotate: true,
            },
          ],
        },
      ],
      buttons: [
        { radius: "50%", background: "#fd9b0c" },
        { radius: "45%", background: "#cc192c" },
        {
          radius: "40%",
          background: "#cc192c",
          pointer: true,
          fonts: [{ text: "点击\n抽奖", top: "-20px", fontColor: "#fff" }],
        },
      ],
      prizes: [],
    };
  },
  mounted() {
    this.getPrizesList();
  },
  methods: {
    getPrizesList() {
      const prizes = [];
      let data = [
        "1元红包",
        "100元红包",
        "0.5元红包",
        "2元红包",
        "10元红包",
        "50元红包",
        "0.3元红包",
        "5元红包",
      ];
      data.forEach((item, index) => {
        prizes.push({
          title: item,
          background: index % 2 ? "#ffd56f" : "#ffe888",
          fonts: [
            { text: item, top: "10%", fontColor: "#d64737", fontSize: "13px" },
          ],
          imgs: [
            // { src: require(`./img/${index}.png`), width: "30%", top: "35%" },
          ],
        });
      });
      this.prizes = prizes;
    },
    startCallBack() {
      this.$refs.LuckyWheel.play();
      setTimeout(() => {
        this.$refs.LuckyWheel.stop((Math.random() * 8) >> 0);
      }, 3000);
    },
    endCallBack(prize) {
      alert(`恭喜你获得${prize.title}`);
    },
  },
};
</script>

<style></style>
