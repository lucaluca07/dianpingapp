const Koa = require('koa')
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
// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:category/:keyword', async (ctx) => {
  // 参数
  const params = ctx.params
  const paramsPage = params.page
  const paramsCity = params.city
  const paramsCategory = params.category
  const paramsKeyword = params.keyword

  console.log('当前页数：' + paramsPage)
  console.log('当前城市：' + paramsCity)
  console.log('当前类别：' + paramsCategory)
  console.log('关键字：' + paramsKeyword)
  if(paramsPage>=5){
    searchListData.data.hasMore = false
  }else{
    searchListData.data.hasMore = true
  }
  ctx.body = searchListData
})
// 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', async (ctx) => {
  // 参数
  const params = ctx.params
  const paramsPage = params.page
  const paramsCity = params.city
  const paramsCategory = params.category

  console.log('当前页数：' + paramsPage)
  console.log('当前城市：' + paramsCity)
  console.log('当前类别：' + paramsCategory)

  if(paramsPage>=5){
    searchListData.data.hasMore = false
  }else{
    searchListData.data.hasMore = true
  }

  ctx.body = searchListData
})

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000')
})