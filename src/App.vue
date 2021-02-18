<template>
  <div id="app">
    <div class="global-link">
      <router-link class="a-btn" to="/">主页</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
.global-link {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 99;
  a {
    text-decoration: none;
  }
}
</style>
