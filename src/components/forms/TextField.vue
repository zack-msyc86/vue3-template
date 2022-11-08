<script setup lang="ts">
const props = defineProps<{
  modelValue: string,
  label: string,
}>()

const emits = defineEmits<{(e: 'update:modelValue', value?: string): void}>()

</script>

<template>
  <label>
    {{ props.label }}
    <input :value="props.modelValue" type="text" @input="emits('update:modelValue', $event.target?.value)" class="textfield" />
  </label>
</template>

<style scoped lang="scss">

.textfield {
    width: 100%; /*親要素いっぱい広げる*/
    padding: 10px 15px; /*ボックスを大きくする*/
    font-size: 16px;
    border-radius: 3px; /*ボックス角の丸み*/
    border: 2px solid #ddd; /*枠線*/
    box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
}
</style>