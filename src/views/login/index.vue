
<template>
  <div class="flex-between">
    <el-button type="primary" @click="loginHandle">{{ $t("login") }}</el-button>
    <lang-switch class="lang" />
  </div>
</template>

<script>

import Cookies from "js-cookie"
import LangSwitch from "@/components/lang-switch"

import { login } from "@/api/login"

import { mapMutations, createNamespacedHelpers } from "vuex"

const { mapActions } = createNamespacedHelpers("user")

export default {
  components: {
    [LangSwitch.name]: LangSwitch
  },

  data () {
    return {
      loading: false,
      phone: "16621341292",
      password: "ivan123"
    }
  },

  methods: {
    async loginHandle () {
      let res = await login({
        data: {
          phone: this.phone,
          password: this.password
        }
      })

      if (res.status === 1) {
        let token = res.data

        Cookies.set("token", token)

        this.updateToken(token)

        let infoRes = await this.getInfo()

        if (infoRes.status === 1) {
          this.$router.push({ path: "/" })
        }
      }
    },
    ...mapMutations([
      "updateToken"
    ]),
    ...mapActions([
      "getInfo"
    ])
  }
}
</script>

<style lang="scss" scoped>

.lang {
  background: $color-primary;
}

</style>
