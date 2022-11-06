<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import Sample from './components/Sample.vue'
</script>

<template>
  <Header />
  <main>
    <Sample />
  </main>
  <Footer />
</template>

<style scoped lang="scss">

main {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 32px;
}
</style>
