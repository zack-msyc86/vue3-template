<script setup lang="ts">import { getPosts } from '@/externals/api';
import { Post as PostType } from '@/types/Post';
import { AxiosResponse } from 'axios';
import { ref } from 'vue';
import Post from './Post.vue'

type Posts = Array<PostType>
const posts = ref<Posts>([])


function update(){
  getPosts().then((resp: AxiosResponse<{paging: any, data: Posts}>) => {
    posts.value = resp.data.data
  })
}

update()

defineExpose({
  update,
});

// postsの取得
// "url: https://asia-northeast1-praha-test.cloudfunctions.net/getPosts
// method: GET
// response: {
//   ""data"": 
//     {
//       ""id"": number,
//       ""title"": string,
//       ""body"": string,
//       ""createdAt"": string,
//       ""createdBy"": string,
//       ""isFavorite"": boolean
//     }[]
// }"
</script>

<template>
  <Post v-for="post in posts" :key="post.id" :post="post" />
</template>

<style scoped lang="scss">

</style>