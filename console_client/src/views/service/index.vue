<template>
  <div class="app-container">
    <el-row>
      <div class="tools">
        <el-button>操作记录</el-button>
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
    </el-row>
    <el-row>
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}"
      >
        <el-table-column prop="service_name" label="服务名称" sortable width="180"></el-table-column>
        <el-table-column prop="state" label="服务状态" sortable width="180"></el-table-column>
        <el-table-column prop="chain_type" label="区块链类型"></el-table-column>
        <el-table-column prop="version_type" label="版本类型"></el-table-column>
        <el-table-column prop="consensus_strategy" label="共识策略"></el-table-column>
        <el-table-column prop="create_time" label="创建时间"></el-table-column>
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
  name: "service",
  data() {
    return {
      tableData: [
        {
          service_name: "itgjz",
          state: "开启",
          chain_type: "联盟链",
          version_type: "铂金版",
          consensus_strategy: "Kafka(CFT)",
          create_time: "2020-4-9 20:20"
        },
        {
          service_name: "itgjz2",
          state: "关闭",
          chain_type: "私有链",
          version_type: "企业版",
          consensus_strategy: "快速拜占庭容错共识算法(FBFT)",
          create_time: "2020-4-9 20:22"
        },
        {
          service_name: "itgjz3",
          state: "开启",
          chain_type: "联盟链",
          version_type: "专业版",
          consensus_strategy: "测试策略(SOLO)",
          create_time: "2020-4-9 20:23"
        },
        {
          service_name: "itgjz3",
          state: "开启",
          chain_type: "联盟链",
          version_type: "专业版",
          consensus_strategy: "测试策略(SOLO)",
          create_time: "2020-4-9 20:23"
        },
        {
          service_name: "itgjz3",
          state: "开启",
          chain_type: "联盟链",
          version_type: "专业版",
          consensus_strategy: "测试策略(SOLO)",
          create_time: "2020-4-9 20:23"
        },
        {
          service_name: "itgjz3",
          state: "开启",
          chain_type: "联盟链",
          version_type: "专业版",
          consensus_strategy: "测试策略(SOLO)",
          create_time: "2020-4-9 20:23"
        },
        {
          service_name: "itgjz3",
          state: "开启",
          chain_type: "联盟链",
          version_type: "专业版",
          consensus_strategy: "测试策略(SOLO)",
          create_time: "2020-4-9 20:23"
        },
        {
          service_name: "itgjz3",
          state: "开启",
          chain_type: "联盟链",
          version_type: "专业版",
          consensus_strategy: "测试策略(SOLO)",
          create_time: "2020-4-9 20:23"
        },
        {
          service_name: "itgjz3",
          state: "开启",
          chain_type: "联盟链",
          version_type: "专业版",
          consensus_strategy: "测试策略(SOLO)",
          create_time: "2020-4-9 20:23"
        },
        {
          service_name: "itgjz3",
          state: "开启",
          chain_type: "联盟链",
          version_type: "专业版",
          consensus_strategy: "测试策略(SOLO)",
          create_time: "2020-4-9 20:23"
        },
        {
          service_name: "itgjz3",
          state: "开启",
          chain_type: "联盟链",
          version_type: "专业版",
          consensus_strategy: "测试策略(SOLO)",
          create_time: "2020-4-9 20:23"
        }
      ],
      options: [
        {
          value: "-1",
          label: "未知"
        },
        {
          value: "1",
          label: "正常"
        },
        {
          value: "2",
          label: "异常"
        },
        {
          value: "3",
          label: "创建中"
        },
        {
          value: "4",
          label: "升级中"
        },
        {
          value: "5",
          label: "伸缩中"
        },
        {
          value: "6",
          label: "添加中"
        },
        {
          value: "7",
          label: "弹性IP异常"
        },
        {
          value: "8",
          label: "删除中"
        },
        {
          value: "9",
          label: "已冻结"
        },
        {
          value: "10",
          label: "休眠中"
        },
        {
          value: "11",
          label: "集群已冻结"
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
.tools {
  text-align: right;
}
</style>