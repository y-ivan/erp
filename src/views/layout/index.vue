
<template>

  <el-container class="container">
    <el-aside class="aside" :class="{ 'collapse': toggle }">
      <sidebar :collapse="toggle" />
    </el-aside>

    <el-container class="main-container">
      <el-header class="header">
        <div class="header-menu flex-between flex-stretch">
          <div class="flex-center-horizontal flex-auto">
            <icon-svg
              class="menu"
              :class="{ 'is-active': toggle }"
              name="menu"
              @click="toggleHandle"
            />
            <navbar />

          </div>

          <shortcut-menu />
        </div>

        <div class="header-breadcrumb">
          <breadcrumb />
        </div>
      </el-header>

      <el-main>
        <view-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"
import ViewMain from "./components/view-main"
import Breadcrumb from "./components/breadcrumb"
import ShortcutMenu from "./components/shortcut-menu"

export default {

  components: {
    Navbar,
    ViewMain,
    ShortcutMenu,
    Sidebar,
    Breadcrumb
  },

  data () {
    return {
      name: "ivan",
      toggle: false
    }
  },
  methods: {
    toggleHandle () {
      this.toggle = !this.toggle
    }
  }
}

</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixin.scss";

.container {
  position: relative;
  width: 100%;
  height: 100%;

  .aside {
    width: 210px!important;
    transition: width .3s;

    &.collapse {
      width: 64px!important;
    }
  }

  .header {
    height: 90px!important;
    padding: 0;
    &-menu {
      background: $color-primary;
    }

    .menu {
      padding: $spacing-row-base;
      margin-right: $spacing-row-medium;
      color: $color-white;
      transition: all .38s;
      transform-origin: 50% 50%;
      transform: rotate(0deg);

      &:hover {
        background: $color-primary-hover;
      }

      &.is-active {
        transform: rotate(-90deg);
      }
    }
    &-breadcrumb {
      padding: $spacing-col-sm;
      border-bottom: 1px solid #eee;
    }
  }
}

</style>
