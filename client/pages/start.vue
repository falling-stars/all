<template>
  <div class="flex">
    <ul class="menu grey-f-bg fixed">
      <li v-for="i in list" class="pointer inline-block full-width border-box text-center black relative" :href="i.url">{{i.text}}</li>
    </ul>
    <div class="cover flex-child-noshrink border-right grey-f-bg"></div>
    <div class="flex-child-grow padding" style="height: 1000px">
      start
    </div>
  </div>
</template>

<script>
  import {scrollEvent} from '~/assets/js/base'
  export default {
    data: () => {
      return {
        list: [
          {text: '安装', url: ''},
          {text: '实例', url: ''}
        ]
      }
    }
  }
</script>

<style scoped>
  .menu{flex-basis: 1.6rem;padding-top:10px;z-index: 99}
  .menu li{height: 0.4rem;margin-bottom: 5px;line-height: 0.4rem;border-left: solid 4px #e2e2e2;transition: all 0.5s}
  .menu li:hover{border-left: solid 10px #5FB878;text-indent: -6px}
  .cover{flex-basis: 1.6rem;padding-top:10px}
</style>