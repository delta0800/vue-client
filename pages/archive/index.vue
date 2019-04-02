<template>
  <div
    class="content-wrapper-inner archive">
    <el-timeline>
      <el-timeline-item
        placement="top">
        <span style="font-weight: bold; position: relative; top: -16px;;">Nice! {{ asyncData.length }} posts in total. Keep on posting.</span>
      </el-timeline-item>
      <el-timeline-item
        v-for="(item, index) in asyncData"
        :key="index"
        :timestamp="new Date(item.create_at).toLocaleString()"
        color="#52c41a"
        placement="top">
        <el-card>
          <h4 style="font-weight: 500; font-size: 16px;margin-bottom: 5px;">{{ item.title }}</h4>
          <p>{{ item.descript }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('post/getPostList')
    return {
      asyncData: store.state.post.postList
    }
  },
  transition: 'fade'
}
</script>

<style>
</style>
