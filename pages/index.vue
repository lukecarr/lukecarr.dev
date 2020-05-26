<template>
  <div class="container">
    <div>
      <h1 class="title">
        personal-website
      </h1>
      <h2 class="subtitle">
        Source code for my personal website
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'IndexPage'
})
export default class IndexPage extends Vue {}
</script>
