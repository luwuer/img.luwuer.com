<template>
  <div class="main-nav">

    <a class="head-portrait"
       @click="headClick"
       href="https://api.weibo.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:8080/">
      <img src=""
           alt="">
    </a>

    <el-tooltip v-for="nav in navs"
                :key="nav.to"
                effect="dark"
                :content="nav.title"
                placement="right">
      <div class="nav-item">
        <svg aria-hidden="true"
             class="icon">
          <use :xlink:href="nav.icon"></use>
        </svg>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'main-nav',
  data() {
    return {
      navs: [
        {
          title: '首页',
          to: '/',
          icon: '#icon-caidaniconshouyehui'
        },
        {
          title: '声明',
          to: '/declare',
          icon: '#icon-daohangshuoming'
        }
      ]
    }
  },
  methods: {
    headClick() {
      // https://api.weibo.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=YOUR_REGISTERED_REDIRECT_URI
      console.log(123)
    }
  }
}
</script>

<style lang="stylus" scoped>
$hover = rgb(64, 177, 129)
$tint = rgb(246, 249, 250)

.main-nav {
  width 40px
  font-size 20px

  .head-portrait {
    display inline-block
    width 40px
    height 40px
    border-radius 20px
    margin-bottom 6px
    background #333
    cursor pointer
  }

  .nav-item {
    height 36px
    line-height 36px
    cursor pointer
    background $tint

    &:hover {
      color $tint
      background $hover
    }

    &:nth-child(2) {
      border-top-left-radius 4px
      border-top-right-radius 4px
    }

    &:last-child {
      border-bottom-left-radius 6px
      border-bottom-right-radius 6px
    }
  }
}
</style>
