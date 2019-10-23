
<template>
  <div>
    <el-button @click="clickHandle">点我</el-button>
    <el-button @click="$router.push('/asfa')">未知</el-button>
    <el-button @click="getInfo">获取信息</el-button>

  </div>
</template>

<script>

import { createNamespacedHelpers } from "vuex"

const { mapActions } = createNamespacedHelpers("user")

export default {
  created () {
  },
  methods: {
    clickHandle () {
      this.$router.push("/sell/list")
    },
    ...mapActions([
      "getInfo"
    ])
  }
}
</script>
<style lang="scss" scoped>

div {
  color: #f00
}

</style>
