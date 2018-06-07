<template>
  <div>
    <div :id="tag"></div>
    <button @click="sendContent">get</button>
  </div>
</template>

<script>
  const Edit = require('wangeditor')
  export default {
    props: {
      tag: {
        type: String,
        default: ''
      }
    },
    data: () => ({
      editor: {}
    }),
    mounted() {
      this.editor = new Edit(`#${this.tag}`)
      this.editor.customConfig.uploadImgShowBase64 = true
      this.editor.create()
    },
    methods: {
      sendContent() {
        this.$emit('getContent', this.editor.txt.html())
      }
    }
  }
</script>

<style scoped>

</style>