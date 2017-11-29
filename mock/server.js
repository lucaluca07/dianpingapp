const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

const Router = require('koa-router')

let router = new Router()

//头条点评数据
let homeHeadLine = require('./home/headline.js')
router.get('/api/homeheadline', async(ctx) => {
  ctx.body = homeHeadLine
})

//首页超值特惠和天天立减数据
let homeAdData = require('./home/ad.js')
router.get('/api/homead', async(ctx) => {
  ctx.body = homeAdData
})

//猜你喜欢数据
let listData = require('./home/list.js')
router.get('/api/homelist/:city/:page', async(ctx) => {
  const paramsCity = ctx.params.city
  const paramsPage = ctx.params.page

  console.log('当前城市：' + paramsCity)
  console.log('当前页数：' + paramsPage)

  let data = listData
  //如果页码大于等于3 hasMore = false
   if(paramsPage>=3){
    data.data.hasMore = false
  }else{
     data.data.hasMore = true
   }
  ctx.body = data
})

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000')
})