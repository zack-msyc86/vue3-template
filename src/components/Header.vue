<script setup lang="ts">

type Menu = {
  text: string,
  link: string,
}

const menus: Array<Menu> = [
  { text: "aaa", link: "aaa" },
  { text: "bbb", link: "bbb" },
  { text: "ccc", link: "ccc" },
  { text: "ddd", link: "ddd" },
]
</script>

<template>
  <header>
    <div class="flex">
      <h1 class="headline">Site</h1>
      <nav>
        <ul class="list">
          <li v-for="menu in menus" :key="menu.text"><a :href="menu.link">{{ menu.text }}</a></li>
          <!-- <li class="item--contact"><a href="">お問い合わせ</a></li> -->
        </ul>
      </nav>
    </div>
    <hr class="line" />
  </header>
</template>

<style scoped lang="scss">

header {
  width: 100%;
  margin: 0 auto 16px;
  // background-color: rgb(0,0,0);
  div.flex {
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .headline {
      font-size: 20px;
      font-weight: bold;
    }

    .list {
      display: flex;
      align-items: center;
      gap: 32px;
      font-size: 16px;
      font-weight: bold;
    }

    .item--contact {
      background-color: #2486d1;
      color: #fff;
      padding: 6px 16px;
      border-radius: 6px;
    }
  }
}

</style>