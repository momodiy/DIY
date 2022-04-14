<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <input type="text" v-model="te1" v-focus.enter="998">
    <input type="text" v-focus>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return {
      te1: ''
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el, binding, vnode, oldVNode) {
        console.log(el)
        console.log(binding)
        el.focus()
      },
      update: function (el, binding, vnode, oldVNode, other) {
        console.log({ el, binding, vnode, oldVNode })
        console.log(other)
      }
    }
  },
  mounted() {
    setTimeout(()=>{
      this.te1 = 666
    },2e3)
  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
