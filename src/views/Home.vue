<template>
  <div class="home container">
    <div class="head-title">工具箱</div>
    <div class="fn-list">
      <router-link class="a-btn" to="/counter">计数器</router-link>
      <router-link class="a-btn" to="/object-size">尺寸</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.fn-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  a {
    height: 100px;
  }
}
</style>
