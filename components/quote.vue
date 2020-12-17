<template lang="pug">
  .quote.border-l-4.mb-16.p-4
    p.text-lg {{ text }}
    p.text-xl.font-bold {{ author }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'Quote',
})
export default class Quote extends Vue {
  @Prop({
    default: '',
  })
  text!: string

  @Prop({
    default: '',
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
