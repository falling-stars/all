<template>
  <div class="flex">
    <ul class="menu grey-f-bg flex-child-noshrink" :class="{fixed:isFixed,static:isStatic}">
      <li v-for="(i, k) in list" class="pointer inline-block full-width border-box text-center black relative" :class="{select:k===0}">
        <a :href="i.url" class="inline-block full-height full-width">{{i.text}}</a>
      </li>
    </ul>
    <div v-if="isFixed" class="cover flex-child-noshrink border-right grey-f-bg"></div>
    <div class="content flex-child-grow line-height-1_5">
      <h1 class="h1">基本用法</h1>
      <h2 class="h2" id="into">引入</h2>
      我们将基础库和组件库分开形成 <span class="tip0">base.js</span> 和 <span class="tip0">component.js</span> 两个文件,在使用过程中可以自行决定是否使用自带的组件库
      <h3 class="h3">使用静态文件:</h3>
      <div class="code">
        &lt;head&gt;
        <br>
          &lt;meta charset="UTF-8"&gt;
        <br>
          &lt;title>gracly&lt;/title&gt;
        <br>
        &lt;link rel="stylesheet" href="gracly/css/gracly.css"&gt;
        <br>
        &lt;/head&gt;
        <br>
        &lt;body&gt;
        <br>
        <span class="note">&lt;!---------&gt;</span>
        <br>
        &lt;script src="gracly/base.js">&lt;/script&gt;
        <br>
        <span class="note">&lt;!--需要使用组件时引入--&gt;</span>
        <br>
        &lt;script src="gracly/component.js">&lt;/script&gt;
        <br>
        &lt;/body&gt;
      </div>
      <h3 class="h3">使用 npm:</h3>
      <div class="code">
        npm install gracly -save
        <br>
        import { <span class="tip0">query</span>, <span class="tip0">GraRoute</span> } from 'gracly/component'
        <br>
        query('.demo'[1], 'div')
        <br>
        const <span class="tip0">route</span> = new <span class="tip0">GraRoute</span>(
        <br>
        [
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;{
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: '/',
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: { age: 32 },
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callBack: state => console.log( state.age )
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;},
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;{
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: '/start',
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: { age: 988 },
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callBack: state => console.log( state.age )
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;}
        <br>
        ], false)
      </div>
      <h2 class="h2" id="example">实例</h2>
      我们将基础库和组件库分开形成 <span class="tip0">base.js</span> 和 <span class="tip0">component.js</span> 两个文件,在使用过程中可以自行决定是否使用自带的组件库
      <h3 class="h3">使用静态文件:</h3>
      <div class="code">
        &lt;head&gt;
        <br>
        &lt;meta charset="UTF-8"&gt;
        <br>
        &lt;title>gracly&lt;/title&gt;
        <br>
        &lt;link rel="stylesheet" href="gracly/css/gracly.css"&gt;
        <br>
        &lt;/head&gt;
        <br>
        &lt;body&gt;
        <br>
        <span class="note">&lt;!---------&gt;</span>
        <br>
        &lt;script src="gracly/base.js">&lt;/script&gt;
        <br>
        <span class="note">&lt;!--需要使用组件时引入--&gt;</span>
        <br>
        &lt;script src="gracly/component.js">&lt;/script&gt;
        <br>
        &lt;/body&gt;
      </div>
      <h3 class="h3">使用 npm:</h3>
      <div class="code">
        npm install gracly -save
        <br>
        import { <span class="tip0">query</span>, <span class="tip0">GraRoute</span> } from 'gracly/component'
        <br>
        query('.demo'[1], 'div')
        <br>
        const <span class="tip0">route</span> = new <span class="tip0">GraRoute</span>(
        <br>
        [
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;{
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: '/',
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: { age: 32 },
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callBack: state => console.log( state.age )
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;},
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;{
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: '/start',
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: { age: 988 },
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callBack: state => console.log( state.age )
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;}
        <br>
        ], false)
      </div>
    </div>
  </div>
</template>

<script>
  import {scrollEvent} from '~/assets/gracly/npm/base'
  export default {
    data: () => {
      return {
        list: [
          {text: '安装', url: '#into'},
          {text: '实例', url: '#example'}
        ],
        isFixed: false,
        isStatic: true
      }
    },
    created() {
      const self = this
      scrollEvent([
        {
          top: 50,
          up: {
            callback: () => {
              self.isStatic = true
              self.isFixed = false
            },
            repeat: true
          },
          down: {
            callback: () => {
              self.isStatic = false
              self.isFixed = true
            },
            repeat: true
          }
        }
      ])
    },
    mounted() {
      Array.prototype.map.call(document.getElementsByClassName('code'), i => {
        let html = i.innerHTML
        html = html.replace(/rel/g, '<span class="tip2">rel</span>')
        html = html.replace(/charset/g, '<span class="tip2">charset</span>')
        html = html.replace(/href/g, '<span class="tip2">href</span>')
        html = html.replace(/src/g, '<span class="tip2">src</span>')
        html = html.replace(/import/g, '<span class="tip1">import</span>')
        html = html.replace(/from/g, '<span class="tip1">from</span>')
        html = html.replace(/const/g, '<span class="tip2">const</span>')
        html = html.replace(/let/g, '<span class="tip2">let</span>')
        html = html.replace(/var/g, '<span class="tip2">var</span>')
        html = html.replace(/ = /g, '<span class="tip2"> = </span>')
        html = html.replace(/link/g, '<span class="tip2">link</span>')
        html = html.replace(/script/g, '<span class="tip2">script</span>')
        html = html.replace(/=&gt;/g, '<span class="tip2">=&gt;</span>')
        html = html.replace(/new/g, '<span class="tip3">new</span>')
        html = html.replace(/true/g, '<span class="tip3">true</span>')
        html = html.replace(/false/g, '<span class="tip3">false</span>')
        html = html.replace(/npm/g, '<span class="tip4">npm</span>')
        html = html.replace(/install/g, '<span class="tip4">install</span>')
        i.innerHTML = html
      })
    }
  }
</script>

<style scoped>
  .menu{flex-basis: 1.6rem;width:1.6rem;left: 0;top:0;padding-top:10px;z-index: 99}
  .menu li{height: 0.4rem;margin-bottom: 5px;line-height: 0.4rem;border-left: solid 4px #e2e2e2;text-indent: -3px;transition: all 0.5s}
  .menu li:hover{border-left: solid 10px #5FB878;text-indent: -6px}
  .menu .select{border-left: solid 10px #5FB878;text-indent: -6px}
  .cover{flex-basis: 1.6rem;padding-top:10px}
  .static{position: static}
  .content{padding: 0.45rem 0.8rem;color: black}
</style>