<template>
  <div class="content">
    <div class="banner">
      <img src="http://106.3.22.81/static/img/mainimg1.17f9e66.jpg" alt="" />
    </div>

    <ul>
      <router-link tag="li" to="/home/home1">home1</router-link>
      <router-link tag="li" to="/home/home2">home2</router-link>
    </ul>
    <router-view></router-view>
    <div class="intro">
      <div class="intro-text">
        <img src="http://106.3.22.81/static/img/page1img1.e293d09.jpg" alt="" />
        <div>
          <h2>关于我们</h2>
          <p>
            长江云通集团有限公司成立于2019年9月，由中国电子信息产业集团有限公司与武汉市人民政府共同组建。长江云通集团整合了武汉城市一卡通有限公司、武汉大数据产业发展有限公司等8家武汉市属国有信息化企业，是武汉市国资委直管的唯一数字城市建设、经营、投资管理平台。
          </p>
          <p>
            长江云通作为全国央地合作（混改）样板企业，依托中国电子现代数字城市理念，定位为“数字城市践行者和数据产业运营商”，致力于打造武汉数字经济名片，汇聚优秀网信人才，引领数字产业发展，建设全国领先的数据产业运营生态。
          </p>
        </div>
      </div>
      <div class="intro-text">
        <div>
          <h2>人才战略</h2>
          <p>
            长江云通集团坚持人才是支柱，把人才兴企作为战略，始终注重人才选用、考核、培育，实现管理队伍的充实壮大、销售队伍的优胜劣汰、技术队伍的日渐成熟，造就一支素质好、能力强、觉悟高的人才队伍，为集团发展提供了坚强的人才支撑。
          </p>
          <p>
            集团尊重和保障员工的各项合法权益，为员工提供公平、公正、和谐的工作环境以及良好的职业发展平台和通道，对干部队伍，突出价值引领；对技术队伍，突出专业引领；对销售队伍，突出荣誉引领，加强各层次人才队伍建设，促进员工与集团共同发展，实现员工价值与企业价值的同步提升，努力把集团发展创新成果惠及广大员工，构建和谐的劳动关系。
          </p>
        </div>
        <img src="http://106.3.22.81/static/img/page1img1.155b6e8.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  min-width: 1280px;
  margin: 0 auto;
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
      }
    }
  }
  .banner {
    width: 100%;
    img {
      width: 100%;
      height: 550px;
    }
  }
  .intro {
    width: 100%;
    .intro-text {
      display: flex;
      margin-top: 30px;
      img {
        // height: 750px;
        // width: 750px;
        height: 400px;
      }
      div {
        padding: 50px;
        box-sizing: border-box;
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
}
</style> 