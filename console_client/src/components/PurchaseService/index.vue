<template>
  <div>
    <el-button type="danger" icon="el-icon-goods" @click="handleClick">购买区块链服务</el-button>
  </div>
</template>

<script>
export default {
  name: "PurchaseService",
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    handleClick() {
      this.$router.push({ path: '/buy/index?' + +new Date() })
    }
  }
};
</script>
