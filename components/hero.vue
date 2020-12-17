<template lang="pug">
  .hero.min-h-screen.flex.items-center.justify-center
    div.text-center
      slot
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'Hero',
})
export default class Hero extends Vue {
  @Prop({
    default: '',
  })
  backgroundUrl!: string
}
</script>

<style lang="scss" scoped>
.hero {
  background-size: cover;
  background-attachment: fixed;
}
</style>
