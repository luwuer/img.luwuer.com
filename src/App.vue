<template>
  <div id="app">
    <div class="nav-wrapper">
      <main-nav class="nav"></main-nav>
    </div>
    <router-view />
  </div>
</template>

<script>
import mainNav from '@/components/main-nav'

export default {
  name: 'app',
  components: {
    mainNav
  }
}
</script>

<style lang="stylus">
@import '~@/assets/stylus/index.styl'

#app {
  padding 0 100px
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

  .nav-wrapper {
    position fixed
    right 60px
    top 50%
    width 40px

    .nav {
      position relative
      top -55px
    }
  }
}
</style>
