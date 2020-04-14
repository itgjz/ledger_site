<template>
  <div class="app-container">
    <el-row>
      <el-col :span="16">
        <el-card class="quick-start">
          <div slot="header" class="clearfix">
            <span>快速开始</span>
          </div>
          <div class="quick-start_step">
            <el-steps :active="4" align-center>
              <el-step title="购买区块链服务" description="配置基本参数和各节点参数"></el-step>
              <el-step title="管理链代码" description="编写链代码、链代码上传、链代码实例化"></el-step>
              <el-step title="业务应用访问区块链系统" description="下载SDK到业务应用、通过SDK调用链代码"></el-step>
              <el-step title="区块链服务运维" description="区块链服务管理和运维。查看区块链服务节点运行状态、监控告警、升级、弹性伸缩等"></el-step>
            </el-steps>
          </div>
        </el-card>

        <el-card class="resources">
          <div slot="header" class="clearfix">
            <span>我的资源</span>
          </div>
          <el-row :gutter="40" class="panel-group">
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <div class="card-panel">
                <div class="card-panel-icon-wrapper icon-people">
                  <svg-icon icon-class="peoples" class-name="card-panel-icon" />
                </div>
                <div class="card-panel-description">
                  <div class="card-panel-text">服务</div>
                  <count-to :start-val="0" :end-val="10" :duration="2600" class="card-panel-num" />
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <div class="card-panel">
                <div class="card-panel-icon-wrapper icon-message">
                  <svg-icon icon-class="message" class-name="card-panel-icon" />
                </div>
                <div class="card-panel-description">
                  <div class="card-panel-text">成员</div>
                  <count-to :start-val="0" :end-val="5" :duration="3000" class="card-panel-num" />
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <div class="card-panel">
                <div class="card-panel-icon-wrapper icon-money">
                  <svg-icon icon-class="money" class-name="card-panel-icon" />
                </div>
                <div class="card-panel-description">
                  <div class="card-panel-text">通道</div>
                  <count-to :start-val="0" :end-val="10" :duration="3200" class="card-panel-num" />
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
              <div class="card-panel">
                <div class="card-panel-icon-wrapper icon-shopping">
                  <svg-icon icon-class="shopping" class-name="card-panel-icon" />
                </div>
                <div class="card-panel-description">
                  <div class="card-panel-text">通知</div>
                  <count-to :start-val="0" :end-val="56" :duration="3600" class="card-panel-num" />
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col :span="6" :push="1">
        <el-card class="user-guide">
          <div slot="header" class="clearfix">
            <span>用户指南</span>
          </div>
          <div class="user-guide-item">
            <el-link :underline="false">区块链服务用户指南</el-link>
          </div>
          <div class="user-guide-item">
            <el-link :underline="false">区块链服务开发指南</el-link>
          </div>
          <div class="user-guide-item">
            <el-link :underline="false">区块链服务最佳实践</el-link>
          </div>
        </el-card>

        <el-card class="version-features">
          <div slot="header" class="clearfix">
            <span>版本特性</span>
          </div>
          <div class="version-features-item">
            <el-link :underline="false">当前版本特性</el-link>
          </div>
          <div class="version-features-item">
            <el-link :underline="false">更多版本特性</el-link>
          </div>
          <div class="version-features-item">
            <el-link :underline="false">停止维护版本</el-link>
          </div>
        </el-card>

        <el-card class="fault-warning-guide">
          <div slot="header" class="clearfix">
            <span>故障警告指南</span>
          </div>
          <div class="fault-warning-guide-item">
            <el-link :underline="false">故障警告指南</el-link>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CountTo from "vue-count-to";
export default {
  name: "overView",
  components: {
    CountTo
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.resources,
.version-features,
.fault-warning-guide {
  margin-top: 40px;
}

.resources {
  .panel-group {
    margin-top: 18px;

    .card-panel-col {
      margin-bottom: 32px;
    }

    .card-panel {
      height: 108px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
      border-color: rgba(0, 0, 0, 0.05);

      &:hover {
        .card-panel-icon-wrapper {
          color: #fff;
        }

        .icon-people {
          background: #40c9c6;
        }

        .icon-message {
          background: #36a3f7;
        }

        .icon-money {
          background: #f4516c;
        }

        .icon-shopping {
          background: #34bfa3;
        }
      }

      .icon-people {
        color: #40c9c6;
      }

      .icon-message {
        color: #36a3f7;
      }

      .icon-money {
        color: #f4516c;
      }

      .icon-shopping {
        color: #34bfa3;
      }

      .card-panel-icon-wrapper {
        float: left;
        margin: 14px 0 0 14px;
        padding: 16px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
      }

      .card-panel-icon {
        float: left;
        font-size: 48px;
      }

      .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 26px;
        margin-left: 0px;

        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 12px;
        }

        .card-panel-num {
          font-size: 20px;
        }
      }
    }
  }

  @media (max-width: 550px) {
    .card-panel-description {
      display: none;
    }

    .card-panel-icon-wrapper {
      float: none !important;
      width: 100%;
      height: 100%;
      margin: 0 !important;

      .svg-icon {
        display: block;
        margin: 14px auto !important;
        float: none !important;
      }
    }
  }
}

.user-guide-item,
.version-features-item,
.fault-warning-guide-item {
  padding-bottom: 10px;
}

.el-card__header {
  > div {
    > span {
      font-size: 22px;
      font-weight: 400;
    }
  }
}
</style>

