
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

import { mapMutations } from "vuex"

export default {

  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    ...mapMutations([
      "updateToken"
    ])
  }
}
</script>

<style lang="scss">

</style>
