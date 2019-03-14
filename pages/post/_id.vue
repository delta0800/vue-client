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
      <div class="banner">
        <img
          v-if="postData.images"
          :src="postData.images"
          alt="banner">
      </div>
      <div
        class="post-content fmt"
        v-html="postData.markdown"/>
    </div>
    <div class="right-navigation">
      <span
        v-anchor="item.title"
        v-for="(item, index) in anchorList"
        :key="index">
        {{ item.title }}
      </span>
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
    return {
      anchorList: []
    }
  },
  mounted() {
    console.log(this)
    this.anchorList = this.getAnchorList(this.postData.markdown)
    console.log(this.anchorList)
  },
  methods: {
    transferHref(str) {
      let v1 = str.replace(/(\s)|(,)/g, '-')
      let v2 = v1.replace(/[./()]/g, '')
      return `#${v2.replace(/-+/g, '-')}`
    },
    getAnchorList(str) {
      const pattern = /<(h[1-6])[\s\S]+?(?=<\/\1>)/g
      let list = []
      function pushItem(arr, item) {
        const len = arr.length
        const matchItem = arr[len - 1]
        if (matchItem && matchItem.tag !== item.tag) {
          pushItem(matchItem.children, item)
        } else {
          arr.push(item)
          // debugger
        }
      }
      str.replace(pattern, ($0, $1) => {
        const title = $0.replace(/.*?>/, '')
        const href = this.transferHref(title)
        const currentItem = {
          tag: $1, // 标签类型
          title,
          href,
          children: []
        }
        pushItem(list, currentItem)
      })
      return list
    }
  }
}
</script>

<style lang="less">
.post {
  padding: 0 300px 40px 40px;
  .right-navigation {
    border-left: 2px solid #ccc;
    padding-left: 15px;
    position: fixed;
    width: 260px;
    top: 104px;
    right: 20px;
    span {
      display: block;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
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
