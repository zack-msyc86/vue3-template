<script setup lang="ts">
import { favorites } from '@/externals/api';
import { Post } from '@/types/Post';
import { computed } from 'vue'

const props = defineProps<{
  post: Post,
}>()

const favorite = computed(() => {
  return props.post.isFavorite ? "お気に入り" : "お気に入り解除"
})

const toggleFavorite = () => {
  if(!props.post.id){ return }
  favorites(props.post.id)
}
</script>

<template>
  <div class="card">
    <div class="flex">
      <div>
        <span>{{ props.post.createdAt }}</span>
        <h5>{{ props.post.title }}</h5>
      </div>
      <button @click="toggleFavorite">{{ favorite }}</button>
    </div>
    <p>{{ props.post.body }}</p>
  </div>
</template>

<style scoped lang="scss">

.flex {
  display: flex;
}
.card {
  border: 2px solid #a3a3a3;
  margin: 12px;
  padding: 12px;
  border-radius: 3px;
}
</style>