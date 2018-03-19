<style scoped>
  header {
    top: 0;
    height: 50px
  }

  header input {
    width: 130px;
    height: 22px
  }

  nav {
    height: 50px
  }

  nav li {
    width: 80px;
    height: 50px;
    line-height: 47px
  }

  #tag {
    top: 46px;
    width: 80px;
    height: 4px;
    transition: all .4s
  }
</style>
<template>
  <header class="fixed full-width cursor-default black-bg z-index flex justify-between">
    <div class="flex flex-center full-height" style="width: 200px">
      <router-link to="/" class="inline-block margin-left-15 white-bg" style="height: 28px;width: 70px"></router-link>
      <i class="fa fa-search white relative z-index event-none" style="left: 22px"></i>
      <input readonly value="搜索组件和库" type="text"
             class="cursor-pointer relative outline-none radius-100 radius-100 border-none indent-30 font-12 white grey-6-bg">
    </div>
    <nav class="relative">
      <ul class="list-none">
        <li v-for="u in link" :dsad=u class="inline-block cursor-pointer text-center margin-right-20" @mouseover="over"
            @mouseout="out">
          <router-link :to=u.url class="font-18 full-width full-height font-16 inline-block white">{{u.name}}
          </router-link>
        </li>
      </ul>
      <span id="tag" class="inline-block absolute select-green" :style="{left:tagX+'px'}"></span>
    </nav>
  </header>
</template>

<script>
  export default {
    data: () => ({
      link: [
        {url: "/", name: "首页"},
        {url: "/start", name: "快速入门"},
        {url: "/document", name: "文档"},
        {url: "/hub", name: "社区"},
        {url: "/about", name: "关于"}
      ],
      initialX: 0,
      tagX: 0
    }),
    methods: {
      over: function (e) {
        this.tagX = e.target.offsetLeft
        e.target.classList.add("over")
      },
      out: function (e) {
        e.target.classList.remove("over")
        setTimeout(() => document.getElementsByClassName("over").length === 0 && (this.tagX = this.initialX), 400)
      }
    },
    watch: {
      $route (to) {
        this.initialX = to.meta.tagX
        this.tagX = to.meta.tagX
      }
    }
  }
</script>

