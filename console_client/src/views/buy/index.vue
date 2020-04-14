<template>
  <div class="app-container">
    <el-form ref="form" :model="form" class="form-style" label-width="200px">
      <el-form-item label="计费模式">
        <el-radio-group v-model="form.billing_model">
          <el-radio-button label="包年/包月"></el-radio-button>
          <el-radio-button label="按需计费"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="区域">
        <el-select v-model="form.region">
          <el-option
            v-for="item in regionOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="区块链服务名称">
        <el-col :span="8">
          <el-input v-model="form.service_name" placeholder="请输入内容"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="版本类型">
        <el-radio-group v-model="form.version_type">
          <el-radio-button label="基础版"></el-radio-button>
          <el-radio-button label="专业版"></el-radio-button>
          <el-radio-button label="企业版"></el-radio-button>
          <el-radio-button label="铂金版"></el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="区块链类型">
        <el-radio-group v-model="form.chain_type">
          <el-radio-button label="私有链"></el-radio-button>
          <el-radio-button label="联盟链"></el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="共识策略">
        <el-select v-model="form.consensus_strategy">
          <el-option
            v-for="item in consensusStrategyOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="资源初始密码">
        <el-col :span="8">
          <el-input v-model="form.init_pwd" placeholder="请输入内容"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="资源确认密码">
        <el-col :span="8">
          <el-input v-model="form.init_pwd_confirm" placeholder="请输入内容"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="高级配置">
        <el-radio-group v-model="is_adv_config">
          <el-radio-button label="暂不配置"></el-radio-button>
          <el-radio-button label="现在配置"></el-radio-button>
        </el-radio-group>
      </el-form-item>

      <!-- 高级配置 -->
      <div v-if="is_adv_config === '现在配置'">
        <el-divider></el-divider>

        <el-form-item label="区块链管理初始密码">
          <el-col :span="8">
            <el-input v-model="form.chain_pwd" placeholder="请输入内容"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="区块链管理确认密码">
          <el-col :span="8">
            <el-input v-model="form.chain_pwd_confirm" placeholder="请输入内容"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="版本信息">
          <el-select v-model="form.chain_version">
            <el-option
              v-for="item in chainVersionOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="存储卷类型">
          <el-radio-group v-model="form.volume_type">
            <el-radio-button label="文件存储卷"></el-radio-button>
            <el-radio-button label="极速文件存储卷"></el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="peer节点组织">
          <el-radio-group v-model="form.volume_type">
            <el-radio-button label="文件存储卷"></el-radio-button>
            <el-radio-button label="极速文件存储卷"></el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="共识节点数量">
          <el-input-number v-model="form.node_num" :min="1" :max="10"></el-input-number>
        </el-form-item>

        <el-form-item label="开启共识节点数据老化">
          <el-radio-group v-model="form.node_ageing">
            <el-radio-button label="是"></el-radio-button>
            <el-radio-button label="否"></el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="安全机制">
          <el-select v-model="form.security_mechanism">
            <el-option
              v-for="item in securityMechanismOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="节点组织存储容量">
          <el-col :span="16">
            <el-slider
              v-model="form.storage_capacity"
              :marks="storage_marks"
              :min="storage_capacity_min"
              :max="storage_capacity_max"
            ></el-slider>
          </el-col>
          <el-col :span="4" :push="2">
            <el-input-number
              v-model="form.storage_capacity"
              :min="storage_capacity_min"
              :max="storage_capacity_max"
              :step="storage_capacity_step"
            ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item label="账本数据存储方式">
          <el-radio-group v-model="form.data_storage_type">
            <el-radio-button label="文件数据库(goleveldb)"></el-radio-button>
            <el-radio-button label="关系型数据库(MySQL)"></el-radio-button>
            <el-radio-button label="NoSQL(CouchDB)"></el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="通道配置">
          <el-select v-model="form.security_mechanism">
            <el-option
              v-for="item in securityMechanismOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="添加RESTful APIs支持">
          <el-radio-group v-model="form.channel_restful">
            <el-radio-button label="是"></el-radio-button>
            <el-radio-button label="否"></el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="弹性IP带宽">
          <el-col :span="16">
            <el-slider
              v-model="form.ip_bandwidth"
              :marks="ip_bandwidth_marks"
              :min="ip_bandwidth_min"
              :max="ip_bandwidth_max"
            ></el-slider>
          </el-col>
          <el-col :span="4" :push="2">
            <el-input-number
              v-model="form.ip_bandwidth"
              :min="ip_bandwidth_min"
              :max="ip_bandwidth_max"
              :step="ip_bandwidth_step"
            ></el-input-number>
          </el-col>
        </el-form-item>

        <el-form-item label="区块生成配置">
          <el-radio-group v-model="is_block_generate_config">
            <el-radio-button label="是"></el-radio-button>
            <el-radio-button label="否"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <div v-if="is_block_generate_config === '是'">
          <el-form-item label="区块产生时间">
            <el-input-number
              v-model="form.block_generate_time"
              :min="block_generate_time_min"
              :max="block_generate_time_max"
              :step="block_generate_time_step"
            ></el-input-number>
          </el-form-item>

          <el-form-item label="区块交易数量">
            <el-input-number
              v-model="form.block_transaction_nums"
              :min="block_transaction_nums_min"
              :max="block_transaction_nums_max"
              :step="block_transaction_nums_step"
            ></el-input-number>
          </el-form-item>

          <el-form-item label="区块容量">
            <el-input-number
              v-model="form.block_capacity"
              :min="block_capacity_min"
              :max="block_capacity_max"
              :step="block_capacity_step"
            ></el-input-number>
          </el-form-item>
        </div>
      </div>

      <div v-if="form.billing_model === '包年/包月'">
        <el-divider></el-divider>
        <el-form-item label="购买时长">
          <el-radio-group v-model="form.purchase_duration">
            <el-radio-button
              v-for="(item, index) in purchaseDurationOptions"
              :key="index"
              :label="item"
            ></el-radio-button>
          </el-radio-group>
        </el-form-item>
      </div>
      <!-- 操作 -->
      <el-card class="operate_box">
        <el-col :span="12" :push="4" class="config-costs">
          <el-row>
            <span>配置费用</span>
            <span class="amount">￥5000.00</span>
          </el-row>
          <el-row>
            <span>参考价格，具体扣费以具体账单为准。</span>
          </el-row>
        </el-col>
        <el-col :span="4" :push="8">
          <el-button>取消</el-button>
          <el-button type="danger" :disabled="buy_btn_disabled">立即购买</el-button>
        </el-col>
      </el-card>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "buy",
  data() {
    return {
      regionOptions: [
        { label: "华中", value: "1" },
        { label: "花北", value: "2" }
      ],
      consensusStrategyOptions: [
        { label: "测试策略(SOLO)", value: "1" },
        { label: "快速拜占庭容错共识算法(FBFT)", value: "2" },
        { label: "Kafka(CFT)", value: "3" }
      ],
      is_adv_config: "暂不配置",
      is_block_generate_config: "否",
      buy_btn_disabled: true,
      chainVersionOptions: [
        {
          label: "3.0.8",
          value: "3.0.8"
        }
      ],
      securityMechanismOptions: [
        { label: "ECDSA", value: "ECDSA" },
        { label: "国密算法", value: "国密算法" }
      ],
      purchaseDurationOptions: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9个月",
        "1年"
      ],

      storage_marks: {
        40: "40GB",
        500: "500GB",
        1000: "1000GB",
        1500: "1500GB",
        2000: "2000GB",
        2500: "2500GB",
        3000: "3000GB",
        3500: "3500GB",
        4000: "4000GB"
      },
      ip_bandwidth_marks: {
        1: "1 Mbit/s",
        100: "100 Mbit/s",
        200: "200 Mbit/s",
        300: "300 Mbit/s"
      },
      storage_capacity_min: 40,
      storage_capacity_max: 4000,
      storage_capacity_step: 10,

      ip_bandwidth_min: 1,
      ip_bandwidth_max: 300,
      ip_bandwidth_step: 1,

      block_generate_time_min: 1,
      block_generate_time_max: 300,
      block_generate_time_step: 1,

      block_transaction_nums_min: 1,
      block_transaction_nums_max: 5000,
      block_transaction_nums_step: 1,

      block_capacity_min: 1,
      block_capacity_max: 99,
      block_capacity_step: 1,

      form: {
        billing_model: "包年/包月",
        region: "",
        service_name: "",
        version_type: "基础版",
        chain_type: "私有链",
        consensus_strategy: "",
        init_pwd: "",
        init_pwd_confirm: "",
        adv_config: "暂不配置",
        chain_pwd: "",
        chain_pwd_confirm: "",
        chain_version: "",
        volume_type: "文件存储卷",
        node_num: 1,
        node_ageing: "是",
        security_mechanism: "ECDSA",
        storage_capacity: 40,
        data_storage_type: "文件数据库(goleveldb)",
        channel_restful: "是",
        ip_bandwidth: 1,

        block_generate_time: 1,
        block_transaction_nums: 500,
        block_capacity: 2,

        purchase_duration: 1
      }
    };
  },

  methods: {}
};
</script>

<style lang="scss">
.operate_box {
  position: fixed;
  width: 100%;
  bottom: 0px;
  right: 0;
  z-index: 1002;
  height: 80px;
}

.form-style {
  margin-bottom: 180px;
}

.config-costs {
  font-size: 12px;
  > div {
    margin-bottom: 10px;
  }

  .amount {
    font-size: 24px;
    color: red;
  }
}
</style>