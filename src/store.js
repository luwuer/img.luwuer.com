import ls from './assets/js/ls'

const WEIBO_DEFAULT = {
  name: '神秘人',
  avatar: ''
}

class Weibo {
  constructor() {
    this.accessToken = ls.getItem('weibo.accessToken')
    this.uid = ls.getItem('weibo.uid')
    this.name = ls.getItem('weibo.name') || WEIBO_DEFAULT.name
    this.avatar = ls.getItem('weibo.avatar') || WEIBO_DEFAULT.avatar
  }

  setAccessToken(value) {
    this.accessToken = value
    ls.setItem('weibo.accessToken', value)
  }

  removeAccessToken() {
    this.accessToken = ''
    ls.removeItem('weibo.accessToken')
  }

  setUid(value) {
    this.uid = value
    ls.setItem('weibo.uid', value)
  }

  removeUid() {
    this.uid = ''
    ls.removeItem('weibo.uid')
  }

  setAuth(data) {
    this.setAccessToken(data.access_token)
    this.setUid(data.uid)
  }

  removeAuth() {
    this.removeAccessToken()
    this.removeUid()
  }

  setAvatar(url) {
    this.avatar = url
    ls.setItem('weibo.avatar', url)
  }

  removeAvatar() {
    this.avatar = WEIBO_DEFAULT.avatar
    ls.setItem('weibo.avatar', WEIBO_DEFAULT.avatar)
  }

  setName(name) {
    this.name = name
    ls.setItem('weibo.name', name)
  }

  removeName() {
    this.name = WEIBO_DEFAULT.name
    ls.setItem('weibo.name', WEIBO_DEFAULT.name)
  }

  empty() {
    this.removeAuth()
    this.removeAvatar()
    this.removeName()
  }
}

class Store {
  constructor() {
    this.weibo = new Weibo()
  }
}

window.store = new Store()
export default window.store
