<template>
  <div class="post">
    <div class="post-cont">
      <h3>{{ postData.title }}</h3>
      <div class="info-row action-row">
        <ul class="action-list">
          <li class="item grey"/>
          <li class="item">0 次阅读</li>
          <li class="item">0 人喜欢</li>
          <li class="item">0 人评论</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    let { data } = await app.$axios
      .get('/admin/post', {
        params: {
          postId: params.id
        }
      })
      .catch(err => {
        console.error(err)
      })
    if (data.code === 0) {
      console.log(data.data)
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

<style>
.post {
  background: #fff;
  padding: 15px;
  margin-right: 15rem;
}
</style>
