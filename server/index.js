const http = require('http')
const https = require('https')
const {resolve} = require('path')
const Koa = require('koa')
const server = require('koa-static')
const router = require('./router/index')
const app = new Koa()

app.use(server(resolve(__dirname, '../client/static'), {index: "next"}))
app.use(router.routes(), router.allowedMethods())

http.createServer(app.callback()).listen(88)
