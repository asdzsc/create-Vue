<template>
  <div class="content">
    <div class="banner">
      <img src="http://106.3.22.81/static/img/mainimg1.12a363a.jpg" alt="" />
    </div>
    <div class="intro">
      <div class="intro-text">
        <img src="http://106.3.22.81/static/img/page1img1.7f6448d.jpg" alt="" />
        <div>
          <h2 @click="$router.push('/news')">关于我们</h2>
          <p>
            集团将以国产软硬件应用推广为基础，以安全为先、需求牵引、数据赋能及迭代发展的创新数字城市发展理念，依托数字交通一体化、智能攻防能力和PK体系三大核心能力，助力全市政务数据、民生数据及产业数据整合，搭建安全服务平台、数据平台、云平台等，丰富完善数字交通、电子政务、安全服务、数字城市等相关领域应用，与武汉市合作打造武汉数字城市建设新模式，为市属国企和公众提供安全及大数据服务，形成数字产业新格局。
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
        <img src="http://106.3.22.81/static/img/page1img2.7703cdd.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { bannerList } from "@/api/index";
export default {
  data() {
    return {};
  },
  mounted() {
    this._bannerList();
  },
  methods: {
    _bannerList() {
      bannerList({
        bannerType: "3",
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  min-width: 1280px;
  margin: 0 auto;

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