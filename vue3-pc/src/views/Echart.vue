<template>
  <div class="content">
    <div>
      <div>
        <a-radio-group
          v-model:value="value"
          @change="radioChange"
          button-style="solid"
        >
          <a-radio-button value="a">客户总数</a-radio-button>
          <a-radio-button value="b">新增客户数</a-radio-button>
          <a-radio-button value="c">流失客户数</a-radio-button>
          <a-radio-button value="d">净增客户数</a-radio-button>
        </a-radio-group>
      </div>
      <div class="fifter">
        <div class="fifter-left">
          <div>
            自定义时间：
            <a-range-picker
              class="fifter-item"
              v-model:value="dataArr"
              :disabledDate="disabledDate"
              @change="dateChange"
              @openChange="onOpenChange"
              @calendarChange="onCalendarChange"
            />
          </div>
        </div>
        <div class="fifter-right">
          <a-button>重置</a-button>
        </div>
      </div>
    </div>
    <div id="my-echarts" style="width: 100%; height: 400px;"></div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import moment from "moment";
import * as echarts from "echarts";
import {
  reqGetAnalyseAll,
  reqGetAnalyseAdd,
  reqGetAnalyseLost,
  reqGetAnalyseRealAdd,
} from "@/api/echart";
export default defineComponent({
  name: "Echart",
  setup() {
    let state = reactive({
      value: "a",
      dataArr: [
        moment(Date.now() - 7 * 24 * 3600 * 1000),
        moment(new Date(), "YYYY-MM-DD"),
      ],
      disable: [],
      userIds: [],
    });
    onMounted(() => {
      getAnalyseAll();
      //   getlostLog();
    });
    const disabledDate = (current) => {
      if (!state.disable || state.disable.length === 0) {
        return false;
      }

      const diffDate = current.diff(state.disable[0], "days");
      return Math.abs(diffDate) > 30;
    };
    const onOpenChange = (open) => {
      if (open) {
        state.disable = [];
      }
    };
    const dateChange = (val) => {
      state.dataArr = val;
      getAnalyseAll();
    };
    const onCalendarChange = (val) => {
      state.disable = val;
    };

    let radioChange = (e) => {
      let value = e.target.value;
      switch (value) {
        case "a":
          getAnalyseAll();
          break;
        case "b":
          getAnalyseAdd();
          break;
        case "c":
          getAnalyseLost();
          break;
        default:
          getAnalyseRealAdd();
          break;
      }
    };

    const getAnalyseAll = async () => {
      let userId = (state.userIds.length && state.userIds[0].key) || "";
      let beginDate = state.dataArr[0].format("YYYY-MM-DD");
      let endDate = state.dataArr[1].format("YYYY-MM-DD");
      let { code, data } = await reqGetAnalyseAll({
        beginDate,
        endDate,
        userId,
      });
      console.log(code, data);
      if (code == "0") {
        // echartInit("客户总数", data.date, data.value);
        echartInit("客户总数", data.date, [0, 0, 0, 43, 0, 43, 0, 0]);
      }
    };
    const getAnalyseAdd = async () => {
      let userId = (state.userIds.length && state.userIds[0].key) || "";
      let beginDate = state.dataArr[0].format("YYYY-MM-DD");
      let endDate = state.dataArr[1].format("YYYY-MM-DD");
      let { code, data } = await reqGetAnalyseAdd({
        beginDate,
        endDate,
        userId,
      });
      console.log(code, data);
      if (code == "0") {
        // echartInit("新增客户数", data.date, data.value);
        echartInit("新增客户数", data.date, [1, 0, 0, 0, 0, 0, 0, 0]);
      }
    };
    const getAnalyseLost = async () => {
      let userId = (state.userIds.length && state.userIds[0].key) || "";
      let beginDate = state.dataArr[0].format("YYYY-MM-DD");
      let endDate = state.dataArr[1].format("YYYY-MM-DD");
      let { code, data } = await reqGetAnalyseLost({
        beginDate,
        endDate,
        userId,
      });
      console.log(code, data);
      if (code == "0") {
        // echartInit("流失客户数", data.date, data.value);
        echartInit("流失客户数", data.date, [0, 0, 0, 0, 0, 0, 0, 0]);
      }
    };
    const getAnalyseRealAdd = async () => {
      let userId = (state.userIds.length && state.userIds[0].key) || "";
      let beginDate = state.dataArr[0].format("YYYY-MM-DD");
      let endDate = state.dataArr[1].format("YYYY-MM-DD");
      let { code, data } = await reqGetAnalyseRealAdd({
        beginDate,
        endDate,
        userId,
      });
      console.log(code, data);
      if (code == "0") {
        // echartInit("净增客户数", data.date, data.value);
        echartInit("净增客户数", data.date, [1, 0, 0, 0, 0, 0, -2, 0]);
      }
    };

    const echartInit = (name, xAxisData, seriesDate) => {
      var myChart = echarts.init(document.getElementById("my-echarts"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
        },
        toolbox: {
          show: true,
          feature: {
            magicType: { type: ["line", "bar"] },
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: xAxisData,
        },
        yAxis: {
          type: "value",
          name: "人数",
          minInterval: 1,
        },
        series: [
          {
            name,
            data: seriesDate,
            type: "line",
            areaStyle: {
              opacity: 0.1,
              color: "#1890ff",
            },
            label: {
              show: true,
              position: "top",
            },
            lineStyle: {
              width: "1",
              type: "dashed",
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    };

    return {
      ...toRefs(state),
      moment,

      disabledDate,
      onOpenChange,
      dateChange,
      onCalendarChange,
      radioChange,

      getAnalyseAll,
      getAnalyseAdd,
      getAnalyseLost,
      getAnalyseRealAdd,

      echartInit,
    };
  },
});
</script>
<style lang="scss" scoped>
.content {
  max-width: 1300px;
  margin: 20px auto;
  border: 10px solid #f0f2f5;
  padding: 20px;
  .fifter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    .fifter-left {
      display: flex;
      align-items: center;
      .fifter-item {
        width: 200px;
      }
    }
  }
}
</style>
