<style scoped>
  .head{height: 46px;border-bottom: solid 1px #dfdfdf}
  .hub{height: 800px;background-color:#eeeeee}
  .login{flex-basis: 3.8rem}
  .login *{cursor: pointer}
  .login i{font-size: 22px}
  .login button{border:none;padding: 7px 15px;border-radius: 15px;font-size: 14px;background-color:#9c9c9c;color:white}
  .li-obj{margin-right: 0.25rem}
  .li-obj a{line-height: 46px;padding: 0 20px}
  .fa-weixin{color:#5FB878}
  .fa-weibo{color:#c80f1e}
  .fa-qq{color:#1E9FFF}
  .liSelect:after{content:'';position:absolute;width:100%;height:3px;bottom:0;left:0;display:inline-block;background-color:#00bc9b}
</style>
<template>
  <div>
    <div class="head flex flex-justify-between">
      <ul class="flex-child-grow padding-left">
        <li class="li-obj inline-block full-height relative" v-for="i in ulList" :class="{liSelect:i.select}">
          <router-link class="inline-block full-height" :to="i.url">{{i.text}}</router-link>
        </li>
      </ul>
      <div class="login full-height flex flex-align-center flex-justify-between padding-right">
        <button>登录</button>
        <button>注册</button>
        <i class="fa fa-weixin" aria-hidden="true"></i>
        <i class="fa fa-weibo" aria-hidden="true"></i>
        <i class="fa fa-qq margin-right" aria-hidden="true"></i>
      </div>
    </div>
    <div class="hub"></div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      ulList: [
        {text: '分享', url: '#', select: true},
        {text: '2222', url: '#', select: false},
        {text: '公告', url: '#', select: false},
        {text: '4444', url: '#', select: false}
      ]
    })
  }
</script>