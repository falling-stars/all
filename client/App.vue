<template>
  <div>
    <headContent></headContent>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
    </router-view>
    <footContent></footContent>
  </div>
</template>

<script>
  import './assets/style/common.css'
  import './assets/images/favicon.ico'
  import 'font-awesome/css/font-awesome.min.css'
  import headContent from './components/head'
  import footContent from './components/foot'

  export default {
    components: {headContent, footContent}
  }
</script>

<style scoped>

</style>