<template lang="pug">
  nuxt
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AOS from 'aos'

@Component({
  created() {
    AOS.init()
  }
})
export default class DefaultLayout extends Vue {}
</script>
