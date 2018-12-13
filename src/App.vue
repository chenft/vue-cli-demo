<template>
  <div id="app">
    <p>{{ $route.name }}</p>
    <img src="./assets/logo.png">
    <router-link to="/"></router-link>
    <router-link to="/params/198/jspang website is very good">params</router-link>
    <router-view></router-view>
    <!-- <router-view name="left" class="left"></router-view>
    <router-view name="right" class="right"></router-view>-->
    <!-- <p>导航：
      <router-link to="/">首页</router-link>
      <router-link to="/hi">Hi页面</router-link>
      <router-link :to="{name:'hi1', params:{username:'chenft', id:'888'}}">-Hi页面1</router-link>
      <router-link :to="{name:'hi2'}">-Hi页面2</router-link>
    </p>2222-->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.left {
  float: left;
  width: 50%;
  background-color: #ccc;
  height: 300px;
}
.right {
  float: left;
  width: 50%;
  background-color: #c0c;
  height: 300px;
}
</style>
