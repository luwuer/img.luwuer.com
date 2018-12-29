import http from '../http'
import mock from './mock'
/* eslint-disable */

/**
 * @description 微博auth2授权code
 * @param client_id 申请应用时分配的AppKey
 * @param redirect_uri 授权回调地址，站外应用需与设置的回调地址一致
 * @param ** https://open.weibo.com/wiki/Oauth2/access_token
 */
function weiboAuth2Authorize(client_id, redirect_uri) {
  return http.get('/weibo/oauth2/authorize', {
    client_id,
    redirect_uri
  })
}

/**
 * @description 微博auth2授权accessToken
 * @param ** https://open.weibo.com/wiki/Oauth2/access_token
 */
function weiboAuth2AccessToken(
  client_id,
  client_secret,
  redirect_uri,
  grant_type = 'authorization_code',
  code
) {
  return http.post(
    `/weibo/oauth2/access_token?client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&grant_type=${grant_type}&code=${code}`,
    {
      // client_id,
      // client_secret,
      // redirect_uri,
      // grant_type,
      // code
    }
  )
}

/**
 * @description 获取用户信息
 */
function getUserInfo(
  access_token = store.weibo.accessToken,
  uids = store.weibo.uid
) {
  // return http.get('/weibo/2/users/show.json', {
  //   access_token,
  //   uids
  // })
  return Promise.resolve(mock.userInfo)
}

/**
 * @description 获取用户相册图片
 */
function weiboGetUserPhotos(
  page,
  count = config.weibo.PAGE_COUNT,
  access_token = store.weibo.accessToken,
  uid = store.weibo.uid,
  base_app = 0
) {
  return http.get('/weibo/2/place/users/photos.json', {
    access_token,
    uid,
    count,
    page,
    base_app
  })
}

export {
  weiboAuth2Authorize,
  weiboAuth2AccessToken,
  weiboGetUserPhotos,
  getUserInfo
}
