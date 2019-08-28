const router = require('koa-router')()   // koa-generator has import koa-router
const superagent = require('superagent') // 一个node环境http(s)请求中间件


// 微信测试号
var AppID = 'wx88094ad370bf30a8';
var AppSecret = '3234fab4aa682d5d082e74e3099414ed';

router.prefix('/wechat')

// Frontend UI will do this
router.get('/wxlogin', async (ctx, next) => {
  console.log("oauth - login")

  // 第一步：用户同意授权，获取code
  var redirectUri = 'getaccesstoken';
  // 这是编码后的地址
  var return_uri = 'http%3A%2F%2Fwww.ltvision123.com%2Fwechat%2F' + redirectUri;
  var scope = 'snsapi_userinfo';

  ctx.response.redirect('https://open.weixin.qq.com/connect/oauth2/authorize'
    + '?appid=' + AppID
    + '&redirect_uri=' + return_uri
    + '&response_type=code' 
    + '&scope=' + scope
    + '&state=STATE#wechat_redirect');
})

router.get('/wechatToken', async (ctx, next) => {
  // 第二步：通过code换取网页授权access_token
  let code = ctx.query.code;
  let res =  await getWechatToken(code);
  if (res) {
    ctx.body = {
      access_token: res.access_token,
      openid: res.openid,
      createTime: res.createTime
    }
  }
})

async function getWechatToken(code) {
  let res = await superagent.get('https://api.weixin.qq.com/sns/oauth2/access_token' 
  + '?appid=' + AppID 
  + '&secret=' + AppSecret 
  + '&code=' + code 
  + '&grant_type=authorization_code'); 
  if (res && res.text.length > 0) {
      // 此处本来应该用res.body获取返回的json数据，但总是获取不到，只能用text代替
      let result = JSON.parse(res.text);
      // window.localStorage.accessToken = result.access_token;
      // window.localStorage.openid = result.openid;
      return Promise.resolve({
        access_token: result.access_token,
        openid: result.openid,
        createTime: new Date()
      });
  } else {
    return Promise.reject(null);
  }
}

async function checkWechatToken(token) {
  return false;
}

router.get('/checkWechatToken', async(ctx, next) => {
  // 3、刷新access_token（如果需要）
})

router.get('/userinfo', async (ctx, next) => {
  // 4、拉用户信息
  let access_token = ctx.header.access_token;
  let openid = ctx.header.openid;
  let res = await superagent.get(
    'https://api.weixin.qq.com/sns/userinfo?access_token=' + access_token +
      '&openid=' + openid +
      '&lang=zh_CN');
  let userInfo = JSON.parse(res.text);
  ctx.body = {
      state: 1,
      userInfo: userInfo
  }
})

router.get('/getWxSignatureData', async (ctx, next) => {
    // https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi
    let noncestr = '';
    let url = ctx.url;
    let timeStamp = '';
    let res = await superagent.get('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' 
      + access_token + '&type=jsapi');

    ctx.body = {
      noncestr,
      timeStamp,
      signature : res
    }

});

router.get('/wxsignature', async (ctx, next) => {
  
})


router.get('/aaa', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})



module.exports = router
