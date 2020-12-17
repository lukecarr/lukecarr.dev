<template lang="pug">
  .repo.flex.flex-col.rounded
    .flex-1.p-4
      h3.text-3xl.font-bold {{ name }}
      p.text-xl.font-bold {{ language || '' }}{{language && license ? ',' : ''}} {{license || '' }}
      span.block.text-xl.mb-4 {{about}}
    div
      pre.block.text-center.font-semibold.p-2.cursor-pointer(@click="$copyText(`git clone ${ssh}`)") git clone {{ssh}}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'Repo',
})
export default class Repo extends Vue {
  @Prop({
    default: '',
  })
  name!: string

  @Prop({
    default: '',
  })
  language!: string

  @Prop({
    default: '',
  })
  license!: string

  @Prop({
    default: '',
  })
  about!: string

  @Prop({
    default: '',
  })
  ssh!: string
}
</script>

<style lang="scss" scoped>
.repo {
  background: rgba(0, 0, 0, 0.2);

  pre {
    background: rgba(0, 0, 0, 0.4);
    overflow-x: hidden;
  }
}
</style>
