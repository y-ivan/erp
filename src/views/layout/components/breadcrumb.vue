
<template>
  <el-breadcrumb class="breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(route, index) in level" :key="route.path">
        <span v-if="index == level.length-1">{{ $t(`nav.${ route.meta.title }`) }}</span>
        <a v-else @click="handleLink(route)">{{ $t(`nav.${ route.meta.title }`) }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "breadcrumb",

  data () {
    return {
      // level: []
    }
  },

  computed: {
    level () {
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]

      if (first && first.name.trim().toLocaleLowerCase() !== "home".toLocaleLowerCase()) {
        matched = [{ path: "/home", meta: { title: "home" } }].concat(matched)
      }

      return matched
    }
  },
  created () {
    // console.log(this.$route)
  },
  methods: {
    handleLink (route) {
      const { redirect, path } = route
      // console.log(route)
      if (redirect) {
        this.$router.push(redirect).catch(() => {})
        return
      }
      this.$router.push(path)
    }
  }
}
</script>
