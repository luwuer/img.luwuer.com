<template>
  <div class="img-preview">

    <el-pagination background
                   layout="prev, pager, next"
                   :current-page="page.currentPage"
                   :total="page.total">
    </el-pagination>
  </div>
</template>

<script>
import { weiboGetUserPhotos, getUserInfo } from '@/assets/js/api/weibo'

export default {
  name: 'img-preview',
  data() {
    return {
      page: {
        currentPage: 1,
        total: 100
      }
    }
  },
  computed: {
    accessToken() {
      return store.weibo.accessToken
    }
  },
  watch: {
    accessToken(newVal) {
      if (newVal) {
        // 获取相册
        weiboGetUserPhotos(this.page.currentPage).then(data => {
          console.log(data)
        })

        // 获取用户信息
        getUserInfo().then(data => {
          store.weibo.setAvatar(data.avatar_hd)
          store.weibo.setName(data.name)
        })
      }
    }
  },
  created() {
    // todo delete
    getUserInfo().then(data => {
      store.weibo.setAvatar(data.avatar_hd)
      store.weibo.setName(data.name)
    })
  }
}
</script>

<style lang="stylus" scoped>
.img-preview {
}
</style>
