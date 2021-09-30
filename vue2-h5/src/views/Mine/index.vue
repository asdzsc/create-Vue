<template>
  <div class="cont">
    <!-- 头部 -->
    <div class="header">
      <div class="header_left">
        <img
          src="https://img0.baidu.com/it/u=2130615794,142753515&fm=26&fmt=auto"
          alt=""
        />
        <div class="desc">
          <p>张三</p>
          <p>李宁专柜店长</p>
        </div>
      </div>
      <div class="header_right">
        <i
          class="ri-qr-code-line"
          style="font-size:30px;margin-bottom: 5px;"
        ></i>
        <div>
          导购邀请码
        </div>
      </div>
    </div>
    <!-- 客户数 -->
    <div class="customers">
      <div class="top">
        <div class="number">客户数</div>
        <i class="ri-arrow-right-s-line" style="font-size: 25px; "></i>
      </div>
      <div
        style="height:1px;margin:5px 0;opacity: 0.3;background:rgba(187, 187, 187, 100)"
      ></div>
      <ul class="bottom">
        <li>
          <p>56</p>
          <p>总客户</p>
        </li>
        <li>
          <p>3</p>
          <p>今日新增</p>
        </li>
        <li>
          <p>2</p>
          <p>今日流失</p>
        </li>
      </ul>
    </div>
    <!-- 工具 -->
    <div class="tool">
      <div class="tool_header">
        工具
      </div>
      <div
        style="height:1px;margin:5px 0;opacity: 0.3;background:rgba(187, 187, 187, 100)"
      ></div>
      <ul class="tool_link">
        <li @click="$router.push('/dggl')">
          <div class="icon">
            <i class="ri-user-line icon_name"></i>
          </div>
          <div>
            <p>导购管理</p>
            <p>
              查看导购信息
            </p>
          </div>
        </li>
        <li>
          <div class="icon">
            <i class="ri-bar-chart-fill icon_name" style="color:#7CBA79"></i>
          </div>
          <div>
            <p>导购之星</p>
            <p>
              查看任务排名
            </p>
          </div>
        </li>
        <li>
          <div class="icon">
            <i class="ri-qr-scan-line icon_name" style="color:#F3C643"></i>
          </div>
          <div>
            <p>电子劵核销</p>
            <p>
              扫码核销电子券
            </p>
          </div>
        </li>
        <li>
          <div class="icon">
            <i class="ri-store-2-line icon_name"></i>
          </div>
          <div>
            <p>积分商城</p>
            <p>
              积分兑换商品
            </p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 进行中的任务 -->
    <div class="task">
      <div class="top">
        <div class="number">进行中的任务</div>
        <i class="ri-arrow-right-s-line" style="font-size: 25px; "></i>
      </div>
      <div
        style="height:1px;margin:5px 0;opacity: 0.3;background:rgba(187, 187, 187, 100)"
      ></div>
      <div class="bottom">
        <div class="task_wrap">
          <div class="task_top">
            <img
              src="https://img0.baidu.com/it/u=2130615794,142753515&fm=26&fmt=auto"
              alt=""
            />
            <div class="task_cont">
              <p class="task_name">
                618活动大促拉新活动
                <van-tag plain round type="primary">进行中</van-tag>
              </p>
              <p class="task_date">2021-05-15 至 2021-05-20</p>
              <p class="task_day">工作周期:4天</p>
            </div>
          </div>
          <div class="task_bottom">
            <div style="width:100%">
              <van-progress
                :percentage="85"
                pivot-text="  "
                color="#ee0a24"
                stroke-width="8"
              />
            </div>
            <p>85%</p>
          </div>
        </div>
        <div
          style="height:1px;margin:20px 0;opacity: 0.3;background:rgba(187, 187, 187, 100)"
        ></div>
        <div class="task_wrap">
          <div class="task_top">
            <img
              src="https://img0.baidu.com/it/u=2130615794,142753515&fm=26&fmt=auto"
              alt=""
            />
            <div class="task_cont">
              <p class="task_name">
                618活动大促拉新活动
                <van-tag plain round type="primary">进行中</van-tag>
              </p>
              <p class="task_date">2021-05-15 至 2021-05-20</p>
              <p class="task_day">工作周期:4天</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 导购排名 -->
    <div class="ranking">
      <div class="top">
        <div class="number">导购排名</div>
        <i class="ri-arrow-right-s-line" style="font-size: 25px;"></i>
      </div>
      <div
        style="height:1px;margin:5px 0;opacity: 0.3;background:rgba(187, 187, 187, 100)"
      ></div>
      <div class="tab">积分 <span>|</span> 任务</div>
      <div class="rank_box">
        您当前积分排名第5名，离上一名还差10分
      </div>
      <div class="table">
        <div class="table_title">
          <div>排名</div>
          <div>姓名</div>
          <div>品牌方</div>
          <div>总积分</div>
        </div>
        <div class="table_item">
          <div>
            <i class="ri-vip-crown-fill crown" style="color: #fcca00;"></i>
            <span>1</span>
          </div>
          <div>
            <img
              src="https://img0.baidu.com/it/u=2130615794,142753515&fm=26&fmt=auto"
              alt=""
            />
            李四
          </div>
          <div>
            李宁
          </div>
          <div style="color:#FCCA00">
            21550
          </div>
        </div>
        <div class="table_item">
          <div>
            <i class="ri-vip-crown-fill crown" style="color:#F3C643 "></i>
            <span>2</span>
          </div>
          <div>
            <img
              src="https://img0.baidu.com/it/u=2130615794,142753515&fm=26&fmt=auto"
              alt=""
            />
            李四
          </div>
          <div>
            李宁
          </div>
          <div>
            21550
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
      user: {},
    };
  },
  mounted() {
    this.user = this.$store.state.mobile.user;
    console.log(this.user);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.cont {
  background-color: #ededed;
  font-size: 16px;
  .top {
    font-size: 16px;
    height: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header {
    width: 100%;
    height: 110px;
    line-height: 20px;
    background-color: rgba(80, 115, 195, 100);
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    box-sizing: border-box;
    .header_left {
      display: flex;
      align-items: center;
      img {
        width: 44px;
        height: 44px;
        border-radius: 3px;
        margin-right: 11px;
      }
      .desc {
        color: #fff;
        text-align: left;
      }
    }
    .header_right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
  .customers {
    margin: 0 auto;
    margin-top: -10px;
    width: 95%;
    line-height: 20px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.07);
    padding: 20px;
    box-sizing: border-box;

    .bottom {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
      text-align: center;
      li {
        p:first-child {
          color: rgba(16, 16, 16, 100);
          font-size: 25px;
        }
        p:last-child {
          margin-top: 6px;
          color: rgba(109, 102, 102, 100);
          font-size: 12px;
        }
      }
    }
  }
  .tool {
    margin: 0 auto;
    margin-top: 10px;
    padding: 20px;
    box-sizing: border-box;
    width: 95%;
    line-height: 23px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.07);
    .tool_header {
      color: rgba(16, 16, 16, 100);
      font-size: 16px;
      text-align: left;
      font-weight: bold;
    }
    .tool_link {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 10px;
      box-sizing: border-box;
      li {
        display: flex;
        align-items: center;
        margin-top: 10px;
        .icon {
          width: 39px;
          height: 39px;
          background-color: rgba(240, 240, 240, 100);
          position: relative;
          border-radius: 50%;
          margin-right: 10px;
          .icon_name {
            color: #6898f4;
            font-size: 26px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
        p:first-child {
          color: rgba(13, 14, 13, 100);
          font-size: 14px;
          font-weight: bold;
        }
        p:last-child {
          color: rgba(109, 102, 102, 100);
          font-size: 12px;
        }
      }
    }
  }
  .task {
    margin: 0 auto;
    margin-top: 10px;
    width: 95%;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.07);
    padding: 20px;
    box-sizing: border-box;
    .bottom {
      margin-top: 20px;
      .task_wrap {
        .task_top {
          display: flex;
          > img {
            width: 90px;
            height: 80px;
            margin-right: 15px;
          }
          .task_cont {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            /deep/.van-tag {
              padding: 0 10px;
              box-sizing: border-box;
            }
            .task_name {
              color: rgba(16, 16, 16, 100);
              // font-size: 14px;
              font-weight: bold;
            }
            .task_date {
              font-size: 14px;
            }
            .task_day {
              font-size: 14px;
              font-weight: bold;
            }
          }
        }
        .task_bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          align-items: center;
          p {
            margin-left: 5px;
          }
        }
      }
    }
  }
  .ranking {
    margin: 0 auto;
    margin-top: 10px;
    width: 95%;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.07);
    padding: 20px;
    box-sizing: border-box;
    .rank_box {
      height: 28px;
      line-height: 28px;
      background-color: rgba(246, 247, 246, 100);
      text-align: center;
      margin: 10px 0;
      font-size: 14px;
    }
    .tab {
      font-size: 14px;
    }
    .table {
      .table_title {
        display: flex;
        justify-content: space-around;
        color: rgba(80, 85, 89, 100);
        font-size: 14px;
      }
      .table_item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 10px 0;
        div {
          position: relative;
          font-size: 14px;
          .crown {
            font-size: 20px;
          }
          span {
            position: absolute;
            left: 5px;
            top: 3px;
            color: #fff;
          }
        }
        div > img {
          width: 27px;
          height: 27px;
          border-radius: 50%;
          margin-left: -35px;
        }
      }
    }
  }
}
</style>
