
<template>
  <div class="sidebar">
    <sidebar-logo :collapse="collapse" />

    <el-scrollbar wrap-class="scrollbar-wrapper" class="sidebar-menu flex-auto">
      <el-menu
        :default-active="activeMenu"
        :background-color="$colors.colorPrimary"
        :text-color="$colors.colorWhite"
        :collapse="collapse"
        :collapse-transition="false">
        <menu-item
          v-for="(route, index) in routes"
          :key="index"
          :route="route"
          :base-path="route.path"
          :collapse="collapse"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>

import SidebarLogo from "./logo"

import MenuItem from "./menu-item"

import { createNamespacedHelpers } from "vuex"

const { mapState } = createNamespacedHelpers("permission")

export default {
  name: "sidebar",

  components: {
    [MenuItem.name]: MenuItem,
    [SidebarLogo.name]: SidebarLogo
  },

  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapState([
      "routes"
    ]),
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  }
}
</script>

<style lang="scss" scoped>

.sidebar {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;

  /deep/ .scrollbar-wrapper {
    overflow-x: hidden;
  }

  &-menu {
    width: 100%;
    background: lighten($color-primary, 10);
  }
}

</style>
