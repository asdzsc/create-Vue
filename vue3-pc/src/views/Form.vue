<template>
  <div class="banner">
    <img src="http://106.3.22.81/static/img/mainimg1.12a363a.jpg" alt="" />
  </div>
  <div class="containers">
    <!-- 表单 -->
    <a-form
      class="form_wrap"
      :model="params"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item class="form_item" label="群主：" name="owner">
        <a-input-search
          v-model:value="params.name"
          placeholder="请输入群主名称"
          @search="handleName"
          allowClear
        />
      </a-form-item>
      <a-form-item class="form_item" label="群名称：" name="name">
        <a-input-search
          v-model:value="params.name"
          placeholder="请输入群名称"
          @search="handleName"
          allowClear
        />
      </a-form-item>
      <a-form-item class="form_item" label="排序条件：" name="sortField">
        <a-select
          style="width: 100%"
          v-model:value="params.sortField"
          @change="handlSortField"
        >
          <a-select-option value="chat_number">
            群内总人数排名
          </a-select-option>
          <a-select-option value="add_number"> 入群人数排名 </a-select-option>
          <a-select-option value="del_number"> 退群人数排名 </a-select-option>
          <a-select-option value="create_time"> 创群时间 </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item class="form_item" label="排序方式：" name="sortOrder">
        <a-select
          style="width: 100%"
          v-model:value="params.sortOrder"
          @change="handlSortOrder"
        >
          <a-select-option value="desc"> 降序 </a-select-option>
          <a-select-option value="asc"> 升序 </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item class="form_item" label="选择日期：" name="date">
        <a-date-picker
          style="width: 90%"
          v-model:value="params.date"
          @change="handleChangeDate"
          format="YYYY-MM-DD"
          :disabled-date="disabledDate"
          placeholder="选择日期"
        />
        <a-tooltip placement="top">
          <template v-slot:title>
            <span>仅支持查看2021-01-10之后的数据</span>
          </template>
          <QuestionCircleOutlined style="padding-left: 5px" />
        </a-tooltip>
      </a-form-item>
      <a-form-item class="form_item" label="群聊状态：" name="isDelete">
        <a-select
          style="width: 100%"
          v-model:value="params.isDelete"
          @change="handlIsDelete"
        >
          <a-select-option value="0"> 未解散 </a-select-option>
          <a-select-option value="1"> 已解散 </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item class="form_item"> </a-form-item>
      <a-form-item class="form_item"> </a-form-item>
      <a-form-item class="form_item" :wrapper-col="{ span: 14, offset: 5 }">
        <a-button @click="resetForm"> 重置 </a-button>
      </a-form-item>
    </a-form>
    <!-- 线 -->
    <!-- <div style="width: 100%; height: 20px; background: #f0f2f5"></div> -->
    <!-- 表格 -->
    <div class="table_wrap">
      <div class="header">
        <a-row type="flex" justify="space-between">
          <a-col class="header_left">
            <a-space>
              <span class="total"
                >共{{ groupsNum }}个群
                <!-- , {{ groupsNum }}个客户 -->
              </span>
              <a-divider type="vertical" style="margin: 0" />
              <span class="update" @click="handleUpdate">
                <ReloadOutlined />
                <span>群聊同步</span>
              </span>
            </a-space>
          </a-col>
          <a-col class="header_right">
            <a-space>
              <a-button type="primary">
                批量打群标签
              </a-button>
              <a-button type="primary" ghost>导出 Excel</a-button>
            </a-space>
          </a-col>
        </a-row>
      </div>
      <div class="tables">
        <a-table
          ref="table"
          :columns="columns"
          :dataSource="dataSource"
          :pagination="false"
          :loading="loading"
          :scroll="{ x: 1200 }"
          :rowKey="(record) => record.id"
          :row-selection="{
            selectedRowKeys: selectedRowKeys,
            onChange: onSelectChange,
          }"
        >
          <template #customTitle> 群名称 </template>
          <template #name="{ text: name }">
            <div class="name" style="flex-wrap: inherit">
              <!-- <img
                class="avatar"
                src="@/module/customer-group/static/icon2.png"
                alt="头像"
              /> -->
              <span class="avatar-name"> {{ name }} </span>
            </div>
          </template>
          <template #owner="{ text: owner }">
            <div class="name">
              <a-tag color="default">
                <span class="tagImg">
                  <!-- <img src="@/module/client/assets/img/people.png" alt="" /> -->
                  {{ owner }}
                </span>
              </a-tag>
            </div>
          </template>
          <template #tagList="{ record }">
            <div class="name">
              <span class="tags">
                <template v-if="record.tagList == null">-</template>
                <template v-else-if="record.tagList.length == 0">-</template>
                <template v-else>
                  <a-tag class="tag" v-for="tag in record.tagList" :key="tag">
                    <span> {{ tag.name }}</span>
                  </a-tag>
                </template>
              </span>
            </div>
          </template>
          <template #groupAction="{ record }">
            <span class="action">
              <!-- 
              <div>设置群SOP</div> 
              <a-divider type="vertical" />
              -->
              <div>
                <a-dropdown :trigger="['click']" placement="bottomRight">
                  <a class="ant-dropdown-link" @click.prevent>
                    打标签
                    <DownOutlined />
                  </a>
                  <template #overlay>
                    <a-menu>
                      <a-menu-item key="0">
                        <span>给群内客户打标签</span>
                      </a-menu-item>
                      <a-menu-item key="1">
                        <span>给群聊打标签</span>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
              </div>
              <a-divider type="vertical" />
              <div>详情</div>
            </span>
          </template>
        </a-table>
        <div style="text-align: right; padding: 10px 0">
          <a-pagination
            @change="handleTableChange"
            @showSizeChange="handleTableChange"
            :total="total"
            :pageSizeOptions="['10', '20', '30', '40', '50']"
            :pageSize="params.pageSize"
            :show-total="(total) => `共 ${total} 条`"
            show-size-changer
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  defineComponent,
  defineAsyncComponent,
  onMounted,
  reactive,
  toRefs,
  ref,
  computed,
  nextTick,
  toRaw,
} from "vue";
import {
  QuestionCircleOutlined,
  DownOutlined,
  ReloadOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import { getList } from "@/api/index";
import { useRouter } from "vue-router";
import moment from "moment";
import { message } from "ant-design-vue";

const columns = [
  {
    dataIndex: "name",
    key: "name",
    width: 200,
    fixed: "left",
    slots: { title: "customTitle", customRender: "name" },
  },
  {
    title: "群主",
    dataIndex: "owner",
    key: "owner",
    width: 100,
    slots: { customRender: "owner" },
  },
  {
    title: "群标签",
    dataIndex: "tagList",
    key: "tagList",
    width: 120,
    slots: { customRender: "tagList" },
  },
  {
    title: "群人数",
    key: "chatNumber",
    dataIndex: "chatNumber",
    width: 120,
    slots: { customRender: "chatNumber" },
  },
  {
    title: "当日群人数",
    key: "number",
    dataIndex: "number",
    width: 120,
    slots: { customRender: "number" },
  },
  {
    title: "当日入群",
    key: "addNumber",
    dataIndex: "addNumber",
    width: 120,
    slots: { customRender: "addNumber" },
  },
  {
    title: "当日退群",
    key: "delNumber",
    dataIndex: "delNumber",
    width: 120,
    slots: { customRender: "delNumber" },
  },
  {
    title: "创群时间",
    key: "createTime",
    dataIndex: "createTime",
    width: 120,
    slots: { customRender: "createTime" },
  },
  {
    title: "操作",
    key: "groupAction",
    width: 150,
    slots: { customRender: "groupAction" },
  },
];

export default defineComponent({
  components: {
    QuestionCircleOutlined,
    DownOutlined,
    ReloadOutlined,
  },
  setup() {
    const router = useRouter();
    onMounted(() => {
      getGroupList();
    });
    // 数据
    const state = reactive({
      params: {
        corpId: "", //群ID
        current: 1, //当前页
        date: null, //选择日期(2021-04-23 格式)
        isDelete: "0", //	群聊状态(0-未解散 1-已解散)
        name: "", //	群名称
        owner: "", //群主userId
        pageSize: 10, //每页大小
        sortField: "chat_number", //	排序条件
        sortOrder: "desc", //排序顺序 升序:asc 降序 desc
        tagIds: null, //群标签ID
        tagType: "or", //群标签查询类型（and-同时满足;or-其中之一）
      },

      total: "",
      selectedRowKeys: [], //表格选中项数组
      dataSource: [], //数据列表
    });
    // 群数
    let groupsNum = ref(0);
    // loading
    const loading = ref(false);
    // 更新数据
    const handleUpdate = () => {
      // getGroupList()
      syncAll().then((res) => {
        // console.log(res)
        if (res.code == 0) {
          message.success("群聊同步成功！");
        }
      });
    };
    // 表格选中
    const onSelectChange = (selectedRowKeys) => {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      state.selectedRowKeys = selectedRowKeys;
    };
    // 表格分页
    const total = ref(0);
    const pagination = computed(() => ({
      total: total.value,
      current: state.params.current,
      pageSize: state.params.pageSize,
    }));
    const handleTableChange = (page, pageSize) => {
      state.params.current = page;
      state.params.pageSize = pageSize;
      state.dataSource = [];
      getGroupList();
    };
    // 获取群列表
    const getGroupList = () => {
      loading.value = true;
      state.dataSource = [];
      getList(state.params).then((res) => {
        loading.value = false;
        if (res.code == 0) {
          groupsNum.value = Number(res.data.total);
          total.value = Number(res.data.total);
          state.total = Number(res.data.total);
          Object.assign(state.dataSource, res.data.list);
        }
      });
    };
    // 重置表单
    const resetForm = () => {
      state.params.corpId = "";
      state.params.current = 1;
      state.params.pageSize = 10;
      state.params.owner = "";
      state.params.name = "";
      state.params.sortField = "chat_number";
      state.params.sortOrder = "desc";
      // state.params.date = dt;
      state.params.isDelete = "0";
      getGroupList();
    };
    //群名称
    const handleName = (e) => {
      state.params.name = e;
      getGroupList();
    };
    // 排序条件
    const handlSortField = (v) => {
      state.params.sortField = v;
      getGroupList();
    };
    // 排序方式
    const handlSortOrder = (v) => {
      state.params.sortOrder = v;
      getGroupList();
    };
    // 不可选日期
    const disabledDate = (current) => {
      const startDate = moment("2021-01-11");
      const endDate = moment().endOf("day");
      if (current < startDate || current > endDate) {
        return current;
      }
    };
    // 日期改变
    const handleChangeDate = (date, dateString) => {
      state.params.date = dateString;

      getGroupList();
    };
    // 是否解散
    const handlIsDelete = (v) => {
      // console.log(v)
      state.params.isDelete = v;
      getGroupList();
    };

    return {
      groupsNum,
      ...toRefs(state),
      getGroupList,
      loading,
      pagination,
      total,
      handleUpdate,
      handleTableChange,
      handleName,
      handlSortField,
      handlSortOrder,
      handleChangeDate,
      handlIsDelete,
      resetForm,
      onSelectChange,
      disabledDate,
      columns,
      labelCol: {
        span: 5,
      },
      wrapperCol: {
        span: 14,
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  img {
    width: 100%;
    height: 550px;
  }
}
.containers {
  max-width: 1200px;
  margin: 20px auto;
  border: 10px solid #f0f2f5;
  .form_wrap {
    padding: 0px 26px 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: #fff;
    .form_item {
      flex-basis: 30%;
      margin: 0px;
      padding: 10px 0;
      .ant-select-show-arrow {
        width: 205px;
      }
    }
  }
  .table_wrap {
    background: #fff;
    padding: 16px;
    .header {
      height: 50px;
      .header_left {
        .total {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.85);
          font-weight: bold;
        }
        .update {
          font-size: 13px;
          color: rgba(0, 0, 0, 0.45);
          cursor: pointer;
          span {
            margin-left: 5px;
          }
        }
      }
    }
    .tables {
      width: 100%;
      margin-top: 20px;
      /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
      ::-webkit-scrollbar {
        // width: 16px;
        height: 5px;
      }
      /*定义滚动条轨道 内阴影+圆角*/
      ::-webkit-scrollbar-track {
        border-radius: 10px;
        background: #f0f2f5;
      }
      /*定义滑块 内阴影+圆角*/
      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #1890ff;
      }
      .name {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .tagImg {
          display: flex;
          align-items: center;
          img {
            width: 14px;
            height: 14px;
            margin-right: 5px;
          }
        }
        .avatar {
          width: 32px;
          height: 32px;
          margin-right: 5px;
        }
        .avatar-name {
          color: #222;
          display: block;
          word-break: break-all;
          width: 180px;
          // overflow: hidden;
          // text-overflow: ellipsis;
          // white-space: nowrap;
        }
        .ant-tag-default {
          margin-top: 5px;
        }
      }
      .action {
        display: flex;
        font-size: 13px;
        cursor: pointer;
        div {
          font-weight: 400;
          color: #1890ff;
          line-height: 22px;
        }
        p {
          color: #ccc;
        }
        .ant-divider {
          margin-top: 5px;
        }
      }
    }
  }

  .tag_tagModel {
    .dialog-title {
      font-size: 17px;
      width: 100%;
      text-align: center;
      margin-top: 2px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 1px;
    }
    .tip_box {
      display: flex;
      align-items: center;
      background: #effaff;
      padding: 0 22px;
      height: 44px;
      font-size: 13px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.44);
      margin-top: 22px;
      &:before {
        content: "";
        width: 3px;
        height: 14px;
        background: #b8b8b8;
      }
    }
    .textarea-box {
      .text-area {
        height: 124px;
        width: 100%;
        background: #fafafa;
        border-radius: 5px;
        border: 1px solid #e8e8e8;
        overflow-y: auto;
        padding: 16px;
        overflow-x: hidden;
        font-size: 13px;
        font-weight: 400;
        line-height: 18px;
        margin-top: 17px;
        outline-color: rgba(83, 160, 231, 0.61);
      }
    }
    .tag_wrap {
      .tag_group {
        margin-bottom: 10px;
        .label_title {
          font-size: 13px;
          line-height: 18px;
          color: #999;
          white-space: nowrap;
          margin-bottom: 15px;
        }
        .tags {
          .tag {
            white-space: pre;
            cursor: pointer;
            height: 32px;
            padding: 4px 14px;
            border-radius: 4px;
            margin-right: 10px;
            margin-bottom: 10px;
            display: inline-flex;
            -webkit-box-align: center;
            align-items: center;
            color: rgba(0, 0, 0, 0.65);
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
