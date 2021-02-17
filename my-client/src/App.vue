<template>
  <div id="app">
    <img alt="Blogs Point" src="./assets/posts.png">
    <post-component />
  </div>
</template>

<script>
import PostComponent from './components/PostComponent'

export default {
  name: 'App',
  components: {
    PostComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  font-size: x-small;
}
 img{
        max-width: 20%;
        max-height: 200%;
        display: inline-block; /* remove extra space below image */
        align-self: center;
    }
</style>
