
<template>
  <section>
    <transition name="fade" mode="out-in">
      <keep-alive :include="keepAliveComponents">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>

export default {
  name: "view-main",

  computed: {
    keepAliveComponents () {
      return []
    },
    key () {
      return this.$route.fullPath
    }
  }

}
</script>
