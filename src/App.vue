<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
// import Side from './components/Side.vue'
// import Sample from './components/Sample.vue'
import { ref } from 'vue';
import NewPost from './components/NewPost.vue';
import Posts from './components/Posts.vue';


const posts = ref()

const submit = () => {
  console.log(posts.value.update())
}
</script>

<template>
  <!-- <Header /> -->
  <div class="container">
    <main>
      <NewPost @submit="submit" />
      <Posts ref="posts" />
    </main>
    <!-- <aside>
      <Side />
    </aside> -->
  </div>
  <!-- <Footer /> -->
</template>

<style scoped lang="scss">

main {
  padding: 0 32px;
}

.container {
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 1200px;
}

aside {
  padding: 0 24px;
  max-width: 20%;
}
</style>
