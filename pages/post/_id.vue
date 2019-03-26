<template>
  <div class="content-wrapper-inner post">
    <div class="post-cont">
      <p class="post-title">{{ postData.title }}</p>
      <div class="info-row action-row">
        <ul class="action-list">
          <li class="item">{{ new Date(postData.create_at).toLocaleString() }}</li>
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
    <my-comment
      :comments="commentsData"
      @submitComment="submitComment"/>
    <div
      class="like-box"
      @click="handleLike">
      <svg-icon
        class="like-icon"
        icon-class="like"/>
    </div>

    <el-col :xs="0">
      <div class="right-navigation">
        <span
          v-anchor="item.title"
          v-for="(item, index) in anchorList"
          :key="index">
          {{ item.title }}
        </span>
      </div>
    </el-col>
  </div>
</template>

<script>
import myComment from '~/components/common/comment'
export default {
  components: {
    myComment
  },
  async asyncData({ store, params }) {
    let { data } = await store.dispatch('post/getPostById', {
      postId: params.id
    })
    if (data.code === 0) {
      return {
        postData: data.data,
        commentsData: data.data.comments
      }
    }
  },
  transition: 'fade',
  data() {
    return {
      anchorList: [],
      commentsData: {}
    }
  },
  mounted() {
    this.anchorList = this.getAnchorList(this.postData.markdown)
  },
  methods: {
    submitComment() {
      this.$store
        .dispatch('post/getPostById', {
          postId: this.$route.params.id
        })
        .then(res => {
          console.log(res)
          if (res.data.code === 0) {
            console.log(res.data.data.comments)
            this.commentsData = res.data.data.comments
          }
        })
    },
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
    },
    handleLike() {
      this.$confirm('登录后才可以喜欢哦', '提示', {
        confirmButtonText: '去登陆',
        cancelButtonText: '暂时不',
        type: 'warning'
      })
    }
  }
}
</script>

<style lang="less">
.post {
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
.like-box {
  position: fixed;
  bottom: 50px;
  right: 5%;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.45);
  line-height: 40px;
  cursor: pointer;
  svg {
    color: #fff;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.65);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}
</style>
