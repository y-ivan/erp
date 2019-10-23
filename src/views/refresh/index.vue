
<template>
  <div></div>
</template>

<script>

export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (to.query.location) {
        vm.$router.replace(to.query.location)
      } else {
        vm.$router.replace({ path: from.fullPath })
      }
    })
  }

}

</script>
