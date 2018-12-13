<template>
  <div>
    <h2>{{ msg }}</h2>
    <p>新闻id：{{ $route.params.newsId }}</p>
    <p>新闻标题：{{ $route.params.newsTitle }}</p>
  </div>
</template>
<script>
export default {
  name: 'params',
  data() {
    return {
      msg: 'params page',
    };
  },
};
</script>
<style scoped>
</style>

