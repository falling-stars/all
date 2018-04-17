<template>
  <div id="app">
    <!--<headContent></headContent>-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
    </router-view>
  </div>
</template>

<script>
  import './assets/style/common.css'
  import 'font-awesome/css/font-awesome.min.css'
  import headContent from './components/head'

  export default {
    // components: {headContent}
  }
</script>

<style scoped>

</style>