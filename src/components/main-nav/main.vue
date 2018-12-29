<template>
  <div class="main-nav">

    <a class="head-portrait"
       @click="headClick"
       :title="name"
       :href="weiboAuthUrl">
      <img src="avator"
           alt="">
    </a>

    <el-tooltip v-for="nav in navs"
                :key="nav.to"
                effect="dark"
                :content="nav.title"
                placement="right">
      <div class="nav-item"
           @click="toNav(nav.to)">
        <svg aria-hidden="true"
             class="icon">
          <use :xlink:href="nav.icon"></use>
        </svg>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
import { weiboAuth2AccessToken } from '@/assets/js/api/weibo'

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
      ],
      code: ''
    }
  },
  computed: {
    weiboAuthUrl() {
      let url = `https://api.weibo.com/oauth2/authorize?client_id=${
        config.weibo.CLIENT_ID
      }&response_type=code&redirect_uri=${config.weibo.REDIRECT_URI}`

      if (this.code) {
        url = 'https://weibo.com'
      }

      return url
    },
    avator() {
      return store.weibo.avator
    },
    name() {
      return store.weibo.name
    }
  },
  watch: {
    code(newVal) {
      if (newVal) {
        this.getWeiboAuth2AccessToken()
      }
    }
  },
  methods: {
    headClick() {

    },
    toNav(to) {
      this.$router.replace(to)
    },
    getWeiboAuth2AccessToken() {
      weiboAuth2AccessToken(
        config.weibo.CLIENT_ID,
        config.weibo.CLIENT_SECRET,
        config.weibo.REDIRECT_URI,
        'authorization_code',
        this.code
      ).then(data => {
        store.weibo.setAuth(data)
      })
    }
  },
  created() {
    this.code = this.$route.query.code
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
