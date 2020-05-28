<template lang="pug">
  .quote.border-l-4.mb-16.p-4.animate__animated.animate__fadeIn
    p.text-lg.animate__animated.animate__fadeInRight {{ text }}
    p.text-xl.font-bold.animate__animated.animate__fadeInUp {{ author }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'Quote'
})
export default class Quote extends Vue {
  @Prop({
    default: ''
  })
  text!: string

  @Prop({
    default: ''
  })
  author!: string
}
</script>

<style lang="scss" scoped>
.quote {
  filter: opacity(0.8);

  p:first-child {
    font-style: italic;
  }
}
</style>
