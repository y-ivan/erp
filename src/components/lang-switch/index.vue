
<template>
  <div class="lang">
    <el-dropdown @command="changeHandle">
      <div><icon-svg name="translate" /></div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(locale, index) in locales"
          :key="index"
          :disabled="locale.lang === lang"
          :command="locale.lang">
          {{ locale.langText }}
          </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>

import { locales, LOCALE_KEY, DEFAULT_LANG, langSetup } from "@/lang"

export default {
  name: "lang-switch",

  data () {
    let lang = window.localStorage.getItem(LOCALE_KEY) || DEFAULT_LANG

    return {
      lang
    }
  },

  computed: {
    locales () {
      return Object.keys(locales).map(lang => {
        return {
          langText: locales[lang].lang,
          lang
        }
      })
    }
  },
  watch: {
    lang (lang) {
      langSetup(lang)
    }
  },
  methods: {
    changeHandle (lang) {
      this.lang = lang
    }
  }

}
</script>

<style lang="scss" scoped>

.icon {
  padding: $spacing-row-sm;
  font-size: $font-size-extra-lg;
  color: $color-white;

  &:hover {
    background: $color-primary-hover;
  }
}

</style>
