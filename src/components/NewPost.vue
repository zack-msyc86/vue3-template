<script setup lang="ts">
import { Post } from '@/types/Post';
import TextField from './forms/TextField.vue';
import TextArea from './forms/TextArea.vue';
import { reactive } from 'vue'
import { createPost } from '@/externals/api';

const post = reactive<Post>({
  title: "",
  body: ""
})

const emits = defineEmits<{(e: 'submit'): void}>()

const submit = () => {
  console.log(post)
  createPost(post).then(resp => {
    console.log(resp)
    emits('submit')
  })
}

// postの作成
// "url: https://asia-northeast1-praha-test.cloudfunctions.net/createPost
// method: POST
// body: {
//   ""title"": string (required),
// 	""body"": string (required)
// }
// response: 
//     {
//       ""id"": number,
//       ""title"": string,
//       ""body"": string,
//       ""createdAt"": string,
//       ""createdBy"": string,
//       ""isFavorite"": boolean
//     }"
</script>

<template>
  <form @submit.prevent="submit">
    <TextField v-model="post.title" label="タイトル" />
    <TextArea v-model="post.body" label="本文" />
    <button type="submit">投稿</button>
  </form>
</template>

<style scoped lang="scss">
</style>