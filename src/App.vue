<template>
  <div id="app">
    <p>{{ $route.name }}</p>
    <img src="./assets/logo.png">
    <div>
      <button @click="goback">后退</button>
      <button @click="gohome">回到首页</button>
      <button @click="forward">前进</button>
    </div>

    <router-link to="/home">home</router-link>
    <router-link to="/params/123/jspang website is very good">params</router-link>
    <router-link to="/goback">goback</router-link>
    <router-link to="/goParams/456/22323322">goParams</router-link>
    <router-link to="/demo1">demo1</router-link>
    <router-link to="/test2">test alias</router-link>
    <router-link to="chenft">chenft</router-link>
    <transition name="fade"
                mode="out-in">
      <router-view></router-view>
    </transition>
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
  methods: {
    goback() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
    gohome() {
      this.$router.push('/');
    },
  },
};
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
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
