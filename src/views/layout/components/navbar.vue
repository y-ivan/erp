
<template>
  <el-menu
    class="navbar"
    mode="horizontal"
    router
    :default-active="activeMenu"
    :background-color="$colors.colorPrimary"
    :text-color="$colors.colorWhite"
    :active-text-color="$colors.colorWarning">
    <el-menu-item index="/home">{{ $t("nav.home") }}</el-menu-item>
    <el-submenu index="/">
      <template slot="title">{{ $t("nav.workPlace") }}</template>
      <el-submenu index="/sell">
        <template slot="title">{{ $t("nav.backlog") }}</template>
        <el-menu-item index="/sell/detail">{{ $t("nav.sell-detail") }}</el-menu-item>
        <el-menu-item index="2-1-2">{{ $t("nav.todayBacklog") }}</el-menu-item>
        <el-menu-item index="2-1-3">{{ $t("nav.allBacklog") }}</el-menu-item>
      </el-submenu>
      <el-menu-item index="/sell/list">{{ $t("nav.sell-order") }}</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">{{ $t("nav.others") }}</el-menu-item>
  </el-menu>
</template>

<script>

export default {
  name: "navbar",

  computed: {
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },

  created () {

  }

}

</script>

<style lang="scss" scoped>

</style>
