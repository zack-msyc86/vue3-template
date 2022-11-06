<script setup lang="ts">

</script>

<template>
  <footer>
    <hr class="line" />
    <div class="flex">
      <ul>
        <li>aaa</li>
        <li>bbb</li>
        <li>ccc</li>
      </ul>
      <ul>
        <li>ddd</li>
        <li>eee</li>
        <li>fff</li>
        <li>ggg</li>
      </ul>
    </div>
  </footer>
</template>

<style scoped lang="scss">

footer {
  margin: 24px 0;
  .flex {
    display: flex;
    align-items: start;
    justify-content: center;
    margin: auto;
  }

  ul {
    min-width: 120px;
  }

  hr {
    margin: 16px;
  }

}

</style>