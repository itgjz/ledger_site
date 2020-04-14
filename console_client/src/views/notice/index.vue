<template>
  <div class="app-container">
    <el-row>
      <el-col :span="12">
        <div class="tools-left">
          <el-button type="danger" icon="el-icon-delete">删除</el-button>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="tools-right">
          <el-select v-model="value" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-button icon="el-icon-refresh-right"></el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}"
      >
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="inviter" label="邀请者" sortable></el-table-column>
        <el-table-column prop="bcs_service" label="BCS服务" sortable></el-table-column>
        <el-table-column prop="join_channel" label="邀请加入通道"></el-table-column>
        <el-table-column prop="update_at" label="更新日期"></el-table-column>
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "notice",
  data() {
    return {
      tableData: [
        {
          inviter: "itgjz",
          bcs_service: "test_bcs_service",
          join_channel: "join_channel",
          update_at: "2020-4-10",
          state: "描述"
        }
      ],
      options: [
        {
          value: "-1",
          label: "全部"
        },
        {
          value: "1",
          label: "未处理"
        },
        {
          value: "2",
          label: "已完成"
        },
        {
          value: "3",
          label: "已取消"
        },
        {
          value: "4",
          label: "已拒绝"
        },
        {
          value: "5",
          label: "已退出"
        },
        {
          value: "6",
          label: "已解散"
        },
        {
          value: "7",
          label: "已冻结"
        },
        {
          value: "8",
          label: "已升级"
        }
      ].map(st => ({ ...st, label: st.label + "（0）" })),
      value: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style lang="scss">
.tools-left {
  text-align: left;
}
.tools-right {
  text-align: right;
}
</style>