<template lang="pug">
  .career.flex.py-6.border-b-2( data-sal="slide-right")
    aside
      h3.text-3xl.font-bold {{ name }}
      p.text-lg.font-medium {{ period }}
      p.text-xl.font-bold {{ role }}
    .flex-1.pl-8
      p.text-lg(v-html="description")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'Career',
})
export default class Career extends Vue {
  @Prop({
    default: '',
  })
  name!: string;

  @Prop({
    default: '',
  })
  period!: string;

  @Prop({
    default: '',
  })
  role!: string;

  @Prop({
    default: '',
  })
  description!: string;
}
</script>

<style lang="scss" scoped>
  .career > aside {
    width: 300px;
  }
</style>