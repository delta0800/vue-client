<template>
  <div class="post">
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
    <my-comment :comments="commentData.data"/>
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
        postData: data.data
      }
    }
  },
  transition: 'fade',
  data() {
    return {
      anchorList: [],
      commentData: {
        status: '成功',
        code: 200,
        data: [
          {
            id: 'comment0001', //主键id
            date: '2018-07-05 08:30', //评论时间
            ownerId: 'talents100020', //文章的id
            fromId: 'errhefe232213', //评论者id
            fromName: '犀利的评论家', //评论者昵称
            fromAvatar:
              'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //评论者头像
            likeNum: 3, //点赞人数
            content: '非常靠谱的程序员', //评论内容
            reply: [
              //回复，或子评论
              {
                id: '34523244545', //主键id
                commentId: 'comment0001', //父评论id，即父亲的id
                fromId: 'observer223432', //评论者id
                fromName: '夕阳红', //评论者昵称
                fromAvatar:
                  'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg', //评论者头像
                toId: 'errhefe232213', //被评论者id
                toName: '犀利的评论家', //被评论者昵称
                toAvatar:
                  'http://ww4.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2pddjuj30v90uvagf.jpg', //被评论者头像
                content: '赞同，很靠谱，水平很高', //评论内容
                date: '2018-07-05 08:35' //评论时间
              },
              {
                id: '34523244545',
                commentId: 'comment0001',
                fromId: 'observer567422',
                fromName: '清晨一缕阳光',
                fromAvatar:
                  'http://imgsrc.baidu.com/imgad/pic/item/c2fdfc039245d688fcba1b80aec27d1ed21b245d.jpg',
                toId: 'observer223432',
                toName: '夕阳红',
                toAvatar:
                  'https://wx4.sinaimg.cn/mw690/69e273f8gy1ft1541dmb7j215o0qv7wh.jpg',
                content: '大神一个！',
                date: '2018-07-05 08:50'
              }
            ]
          },
          {
            id: 'comment0002',
            date: '2018-07-05 08:30',
            ownerId: 'talents100020',
            fromId: 'errhefe232213',
            fromName: '毒蛇郭德纲',
            fromAvatar:
              'http://ww1.sinaimg.cn/bmiddle/006DLFVFgy1ft0j2q2p8pj30v90uzmzz.jpg',
            likeNum: 0,
            content: '从没见过这么优秀的人',
            reply: []
          }
        ]
      }
    }
  },
  mounted() {
    this.anchorList = this.getAnchorList(this.postData.markdown)
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
@media only screen and (max-width: 768px) {
  .post {
    padding: 0 20px !important;
  }
}
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
