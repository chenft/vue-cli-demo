# vue-cli-demo

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost：8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## vue-router

router-view: 放置页面的容器
router-link: 页面跳转的组件
to: 必须是在 router 里配置的 path

### 传参

#### router-link 标签中的 to 传参数

传：

```html
<router-link :to="{name: 'xxx', params:{id:'abc'}}"></router-link>
```

接收：

```html
<p>{{ $route.params.id }}</p>
```

#### 使用 url 传递参数

```js
// 括号里是正则
export default new Router({
  routes: [
    {
      // 括号里是正则
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params,
    },
  ],
});
```

```html
<router-link to="/params/111/jspang website is very good">params</router-link>
```

#### 重定向传参数

```js
export default new Router({
  routes: [
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle',
    },
  ],
});
```

```html
<router-link to="/goParams/456/22323322">goParams</router-link>
```

### alias 别名

```js
export default new Router({
  routes: [
    {
      path: '/test',
      component: demo1,
      alias: '/test2',
    },
  ],
});
```

```html
<router-link to="/test2">test alias</router-link>
```

### 路由的过渡动画

```html
<transition name="fade" mode="out-in"> <router-view></router-view> </transition>
```

```css
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
```

#### class

- xxx.enter：进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除
- xxx.enter-active：进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
- xxx-leave：离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
- xxx-leave-active：离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。

#### mode

- in-out：新元素先进入过渡，完成之后当前元素过渡离开
- out-in：当前元素先进行过渡离开，离开完成后新元素才过度进入

### 路由模式

```js
export default new Router({
  mode: 'history',
  routes: [],
});
```

mode 的两个值

- histroy:当你使用 history 模式时，URL 就像正常的 url，例如 https://www.baidu.com/

- hash:默认’hash’值，但是 hash 看起来就像无意义的字符排列，不太好看也不符合我们一般的网址浏览习惯。

### 404 页面

```js
export default new Router({
  routes: [
    {
      path: '*',
      component: Error,
    },
  ],
});
```

```html
<template>
  <div>
    <h2>{{ msg }}</h2>
    页面不存在
  </div>
</template>
```

### 钩子

#### 路由配置文件中的钩子函数

```js
export default new Router({
  routes: [
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params,
      beforeEnter: (to, from, next) => {
        console.log('我进入 params 模版辣');
        console.log(to);
        console.log(from);
        next({
          path: '/',
        });
      },
    },
  ],
});
```

#### 写在模板中的钩子函数

```js
export default {
  beforeRouteEnter: (to, from, next) => {
    console.log('准备进入路由模版');
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('准备离开路由模版');
    next();
  },
};
```

### 前进、后退、跳转

```js
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
```
