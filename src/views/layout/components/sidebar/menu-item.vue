
<template>
  <div v-if="isShow()" class="menu-item">
    <template v-if="isLessChildren()">
      <router-link :to="resolvePath(singleChild.path)">
        <el-menu-item :index="resolvePath(singleChild.path)" class="flex-center-horizontal">
          <icon-svg v-if="singleChild.meta" :name="singleChild.meta.icon" />
          <span  v-if="singleChild.meta" slot="title">{{ $t(`nav.${ singleChild.meta.title }`) }}</span>
        </el-menu-item>
      </router-link>
    </template>

    <el-submenu
      v-else
      ref="subMenu"
      :index="route.path">
      <template slot="title">
        <icon-svg v-if="route.meta" :name="route.meta.icon" />
        <span v-if="!collapse">{{ $t(`nav.${ route.meta.title }`) }}</span>
      </template>

      <menu-item
        v-for="child in route.children"
        :key="child.path"
        :route="child"
        :base-path="resolvePath(child.path)"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from "path"

export default {
  name: "menu-item",

  props: {
    route: {
      type: Object,
      required: true
    },

    basePath: {
      type: String,
      default: ""
    },
    collapse: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      singleChild: null
    }
  },

  computed: {
    isShow () {
      return (route = this.route) =>
        !route.meta || !route.meta.hidden
    },

    resolvePath () {
      return routePath => {
        if (this.singleChild === this.route) return this.basePath
        return path.resolve(this.basePath, routePath)
      }
    }
  },
  methods: {
    // less than 2
    isLessChildren () {
      const children = this.route.children || []

      const showingChildren = children.filter(item => {
        return this.isShow(item)
      })

      if (showingChildren.length === 1) {
        let meta = showingChildren[0].meta || {}
        if (meta.alwaysShow) this.singleChild = this.route
        else this.singleChild = showingChildren[0]
      }

      if (showingChildren.length === 0) {
        this.singleChild = this.route
      }

      return showingChildren.length < 2
    }

  }

}
</script>

<style lang="scss" scoped>
  .icon {
    font-size: $font-medium;
    margin-right: $spacing-row-sm;
  }
</style>
