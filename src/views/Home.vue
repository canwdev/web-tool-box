<template>
  <div class="home container">
    <div class="head-title">工具箱</div>
    <div class="fn-list">
      <router-link class="a-btn" to="/counter">计数器</router-link>
      <router-link class="a-btn" to="/object-size">设备尺寸预览</router-link>
      <router-link class="a-btn" to="/calculator">简易计算器</router-link>
      <router-link class="a-btn coming-soon" to="/">数字时钟</router-link>
      <router-link class="a-btn coming-soon" to="/">模拟时钟</router-link>
      <router-link class="a-btn coming-soon" to="/metronome">节拍器</router-link>
      <router-link class="a-btn coming-soon" to="/">设备信息</router-link>
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
    &.coming-soon {
      cursor: not-allowed;
      opacity: .5;
    }
  }
}
</style>
