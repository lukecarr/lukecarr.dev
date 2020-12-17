<template lang="pug">
  .career.flex.flex-col.py-6.border-b-2.animate__animated.animate__fadeInRight(class="md:flex-row")
    aside
      h3.text-3xl.font-bold {{ name }}
      p.text-lg.font-medium {{ period }}
      p.text-xl.font-bold {{ role }}
    .flex-1.pt-8(class="md:pt-0 md:pl-8")
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
  name!: string

  @Prop({
    default: '',
  })
  period!: string

  @Prop({
    default: '',
  })
  role!: string

  @Prop({
    default: '',
  })
  description!: string
}
</script>

<style lang="scss" scoped>
.career > aside {
  width: 300px;
}
</style>
