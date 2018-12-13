# vue-cli-demo

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
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

### 传参数

传：

```html
<router-link :to="{name: 'xxx', params:{id:'abc'}}"></router-link>
```

接收：

```html
<p>{{ $route.params.id }}</p>
```

#### url 穿参数

path: '/params/:newsId(\\d+)/:newsTitle'
括号里是正则
