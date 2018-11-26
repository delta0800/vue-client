<template>
  <div class="post">
    <div class="post-cont">
      <p class="post-title">{{ postData.title }}</p>
      <div class="info-row action-row">
        <ul class="action-list">
          <li class="item">{{ postData.create_at }}</li>
          <li class="item">{{ postData.meta.views }} 次阅读</li>
          <li class="item">{{ postData.meta.likes }} 人喜欢</li>
          <li class="item">{{ postData.meta.comments }} 人评论</li>
        </ul>
      </div>
      <div
        class="post-content fmt"
        v-html="postData.content"/>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    let { data } = await store.dispatch('post/getPostById', {
      postId: params.id
    })
    if (data.code === 0) {
      return {
        postData: data.data[0]
      }
    }
  },
  transition: 'fade',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="less">
.post {
  background: #fff;
  padding: 15px;
  width: 45rem;
  margin-right: 240px;
  .post-title {
    font-size: 18px;
    font-weight: bold;
  }
  .action-list {
    margin: 5px 0;
    display: flex;
    color: #a6a6a6;
    .item {
      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  }
}
</style>
