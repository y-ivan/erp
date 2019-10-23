
<template>
  <section class="shortcut-menu flex-center-horizontal">
    <div class="item">
      <el-badge value="99+" type="danger" :max="99">
        <icon-svg name="notice" />
      </el-badge>
    </div>

    <div class="item">
      <LangSwitch />
    </div>

    <div class="item">
      <el-dropdown @command="commandHandle">
        <el-avatar :src="info.avatar" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>{{ $t("personal.center") }}</el-dropdown-item>
          <el-dropdown-item command="logout" divided>{{ $t("logout") }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </section>
</template>

<script>

import LangSwitch from "@/components/lang-switch"
import Cookies from "js-cookie"
import { logout } from "@/api/login/index.js"

import { mapMutations, createNamespacedHelpers } from "vuex"

const { mapState } = createNamespacedHelpers("user")

export default {
  name: "shortcut-menu",

  components: {
    LangSwitch
  },

  computed: {
    ...mapState([
      "info"
    ])
  },

  methods: {
    commandHandle (command) {
      if (command === "logout") {
        this.logout()
      }
    },
    async logout () {
      let res = await logout()

      if (res.status === 1) {
        this.updateToken("")

        Cookies.remove("token")

        location.href = location.origin
      }
    },

    ...mapMutations([
      "updateToken"
    ])
  }
}

</script>

<style lang="scss" scoped>

.shortcut-menu {
  padding: 0 $spacing-row-medium;

  .item {
    &:not(:last-child) {
      margin-right: $spacing-row-extra-sm;
    }
    .icon {
      padding: $spacing-row-sm;
      &:hover {
        background: $color-primary-hover;
      }
    }
    display: flex;
    align-items: center;
    height: 100%;
    font-size: $font-size-extra-lg;
    color: $color-white;

    .el-badge {
      /deep/ .el-badge__content {
        left: 50%;
        top: 0;
        right: auto;
        border: none;
        transform: scale(0.8);
      }
    }
  }
}

</style>
