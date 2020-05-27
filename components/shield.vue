<template lang="pug">
  img.shield.inline-block(:src="src", :alt="title")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'Shield',
})
export default class Shield extends Vue {
  @Prop({
    default: '',
  })
  left!: string;

  @Prop({
    default: '',
  })
  right!: string;

  @Prop({
    default: 'brightgreen',
  })
  color!: string;

  get title() {
    return `${this.left} ${this.right}`;
  }

  get src() {
    return `https://img.shields.io/badge/${encodeURIComponent(this.left)}-${encodeURIComponent(this.right)}-${this.color}`;
  }
}
</script>

<style lang="scss" scoped>
  .shield {
    height: 24px;
  }
</style>