<template lang="pug">
  nuxt
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import sal from 'sal.js'

@Component({
  mounted() {
    window.addEventListener('load', () => {
      sal()
    })
  }
})
export default class DefaultLayout extends Vue {}
</script>
