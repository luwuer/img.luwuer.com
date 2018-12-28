import http from '../http'

/**
 * @description 微博auth2授权code
 * @param client_id 申请应用时分配的AppKey
 * @param redirect_uri 授权回调地址，站外应用需与设置的回调地址一致
 * @param ** https://open.weibo.com/wiki/Oauth2/access_token
 */
function weiboAuth2Authorize(
  client_id,
  redirect_uri
  // scope,
  // state,
  // display = 'default',
  // forcelogin = false,
  // language
) {
  return http.get('weibo/oauth2/authorize', {
    client_id,
    redirect_uri
    // scope,
    // state,
    // display,
    // forcelogin,
    // language
  })
}

/**
 * @description 微博auth2授权code
 * @param ** https://open.weibo.com/wiki/Oauth2/access_token
 */
function weiboAuth2AccessToken(
  client_id,
  client_secret,
  redirect_uri,
  grant_type = 'authorization_code',
  code
) {
  return http.post('weibo/oauth2/access_token', {
    client_id,
    client_secret,
    redirect_uri,
    grant_type,
    code
  })
}

export { weiboAuth2Authorize, weiboAuth2AccessToken }
