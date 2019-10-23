
<template>
  <div class="logo-cont">
    <transition name="logo-fade">
      <router-link v-if="collapse" key="collapse" to="/" class="logo-link flex-center">
        <el-image class="logo" fit="cover" :src="image" />
      </router-link>

      <router-link v-else key="expand" to="/" class="logo-link flex-center">
        <el-image class="logo" fit="cover" :src="image" />
        <h1 class="title">{{ title }}</h1>
      </router-link>
    </transition>

  </div>
</template>

<script>

import image from "@/assets/images/logo.png"

export default {
  name: "sidebar-logo",

  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      title: "Morechips",
      image: image
    }
  }
}
</script>

<style lang="scss" scoped>

.logo-fade-enter-active {
  transition: opacity 1.5s;
}

.logo-fade-enter,
.logo-fade-leave-to {
  opacity: 0;
}

.logo-cont {
  width: 100%;
  height: 60px;
  background: darken($color-primary, 10);

  .logo-link {
    widows: 100%;
    height: 100%;

    .logo {
      width: 32px;
      height: 32px;

      &:not(:last-child) {
        margin-right: $spacing-row-base;
      }
    }

    .title {
      // margin: 0;
      color: #fff;
      font-weight: 600;
      font-size: $font-base;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    }
  }
}

</style>
