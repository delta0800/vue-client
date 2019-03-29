<!--评论模块-->
<template>
  <div class="comment-container">
    <div
      class="input-wrapper">
      <el-input
        v-model="inputComment"
        :rows="3"
        class="gray-bg-input"
        type="textarea"
        placeholder="写下你的评论"/>
      <div class="btn-control out-btn-control">
        <!-- <span
          class="cancel"
          @click="cancel">取消</span> -->
        <el-button
          class="btn"
          type="success"
          round
          @click="commitComment()">确定</el-button>
      </div>
    </div>
    <div
      v-for="(item, index) in comments"
      :key="index"
      class="comment">
      <div class="info">
        <img
          src="/img/avatar.jpeg"
          class="avatar"
          width="36"
          height="36">
        <div class="right">
          <div class="name">{{ item.user.name }}</div>
          <div class="date">{{ new Date(item.create_time).toLocaleString() }}</div>
        </div>
      </div>
      <div class="content">{{ item.content }}</div>
      <div class="control">
        <span
          :class="{active: item.isLike}"
          class="like"
          @click="likeClick(item)">
          <i class="iconfont icon-like"/>
          <span class="like-num">{{ item.likes > 0 ? item.likes + '人赞' : '赞' }}</span>
        </span>
        <span
          class="comment-reply"
          @click="showCommentInput(item)">
          <i class="iconfont icon-comment"/>
          <span>回复</span>
        </span>
      </div>
      <div class="reply">
        <div
          v-for="(reply, index) in item.other_comments"
          :key="index"
          class="item">
          <div class="reply-content">
            <span class="from-name">{{ reply.user.name }}</span><span>: </span>
            <span class="to-name">@{{ reply.to_user.name }}</span>
            <span>{{ reply.content }}</span>
          </div>
          <div class="reply-bottom">
            <span>{{ new Date(reply.create_time).toLocaleString() }}</span>
            <span
              class="reply-text"
              @click="showCommentInput(item, reply)">
              <i class="iconfont icon-comment"/>
              <span>回复1</span>
            </span>
          </div>
        </div>
        <div
          v-if="item.other_comments.length > 0"
          class="write-reply"
          @click="showCommentInput(item)">
          <i class="el-icon-edit"/>
          <span class="add-comment">添加新评论</span>
        </div>
        <transition name="fade">
          <div
            v-if="showItemId === item._id"
            class="input-wrapper">
            <el-input
              v-model="inputComment"
              :rows="3"
              class="gray-bg-input"
              type="textarea"
              autofocus
              placeholder="写下你的评论"/>
            <div class="btn-control">
              <span
                class="cancel"
                @click="cancel">取消</span>
              <el-button
                class="btn"
                type="success"
                round
                @click="commitComment(item, true)">确定</el-button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  components: {},
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      inputComment: '',
      showItemId: '',
      userInfo: {
        user_id: '5c93752fc6116979008b3722'
      }
    }
  },
  computed: {},
  created() {
    console.log(this.$store.state)
  },
  methods: {
    ...mapMutations({
      toCloseLoginModal: 'user/toCloseLoginModal',
      toOpenLoginModal: 'user/toOpenLoginModal'
    }),
    /**
     * 点赞
     */
    likeClick(item) {
      if (item.isLike === null) {
        this.$set(item, 'isLike', true)
        item.likeNum++
      } else {
        if (item.isLike) {
          item.likeNum--
        } else {
          item.likeNum++
        }
        item.isLike = !item.isLike
      }
    },

    /**
     * 点击取消按钮
     */
    cancel() {
      this.showItemId = ''
    },

    /**
     * 提交评论
     */
    commitComment(item, reply) {
      if (!this.$store.state.user.user.userInfo._id) {
        return this.$confirm('登录后才可以评论哦', '提示', {
          confirmButtonText: '去登陆',
          cancelButtonText: '暂时不',
          type: 'warning'
        })
          .then(() => {
            this.toOpenLoginModal()
          })
          .catch(action => {
            console.log(action)
          })
      }
      if (reply) {
        this.$store
          .dispatch({
            type: 'comment/addOtherComment',
            payload: {
              comment_id: item._id,
              article_id: this.$route.params.id,
              comment_content: this.inputComment,
              to_user: JSON.stringify({
                user_id: item.user_id,
                name: item.user.name,
                avatar: item.user.avatar
              }),
              user_id: this.$store.state.user.userInfo._id
            }
          })
          .then(result => {
            const { data } = result
            if (data.code === 0) {
              this.$message({
                message: '评论成功',
                type: 'success'
              })
              this.$emit('submitComment')
            } else {
              this.$message({
                message: data.msg,
                type: 'error'
              })
            }
          })
      } else {
        console.log(this.$store.state.user.user)
        this.$store
          .dispatch({
            type: 'comment/addComment',
            payload: {
              user_id: this.$store.state.user.user.userInfo._id,
              article_id: this.$route.params.id,
              comment_content: this.inputComment
            }
          })
          .then(result => {
            const { data } = result
            if (data.code === 0) {
              this.$message({
                message: '评论成功',
                type: 'success'
              })
              this.$emit('submitComment')
              this.inputComment = ''
            } else {
              this.$message({
                message: data.msg,
                type: 'error'
              })
            }
          })
      }
    },

    /**
     * 点击评论按钮显示输入框
     * item: 当前大评论
     * reply: 当前回复的评论
     */
    showCommentInput(item, reply) {
      if (reply) {
        this.inputComment = '@' + reply.user.name + ' '
      } else {
        this.inputComment = ''
      }
      this.showItemId = item._id
    }
  }
}
</script>

<style scoped lang="less">
// @import '../../static/scss/index';
@color-main: #409eff;
@color-success: #67c23a;
@color-warning: #e6a23c;
@color-danger: #f56c6c;
@color-info: #909399;

@text-main: #303133;
@text-normal: #606266;
@text-minor: #909399; //次要文字
@text-placeholder: #c0c4cc;
@text-333: #333;

@border-first: #dcdfe6;
@border-second: #e4e7ed;
@border-third: #ebeef5;
@border-fourth: #f2f6fc;

@content-bg-color: #fff;

.comment-container {
  margin-top: 30px;
  box-sizing: border-box;
  .out-btn-control {
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
    .cancel {
      font-size: 16px;
      color: @text-normal;
      margin-right: 20px;
      cursor: pointer;
      &:hover {
        color: @text-333;
      }
    }
    .confirm {
      font-size: 16px;
    }
  }
  .comment {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid @border-fourth;
    .info {
      display: flex;
      align-items: center;
      .avatar {
        border-radius: 50%;
      }
      .right {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        .name {
          font-size: 16px;
          color: @text-main;
          margin-bottom: 5px;
          font-weight: 500;
        }
        .date {
          font-size: 12px;
          color: @text-minor;
        }
      }
    }
    .content {
      font-size: 16px;
      color: @text-main;
      line-height: 20px;
      padding: 10px 0;
    }
    .control {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: @text-minor;
      .like {
        display: flex;
        align-items: center;
        margin-right: 20px;
        cursor: pointer;
        &.active,
        &:hover {
          color: @color-main;
        }
        .iconfont {
          font-size: 14px;
          margin-right: 5px;
        }
      }
      .comment-reply {
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover {
          color: @text-333;
        }
        .iconfont {
          font-size: 16px;
          margin-right: 5px;
        }
      }
    }
    .reply {
      margin: 10px 0;
      border-left: 2px solid @border-first;
      .item {
        margin: 0 10px;
        padding: 10px 0;
        border-bottom: 1px dashed @border-third;
        .reply-content {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: @text-main;
          .from-name {
            color: @color-main;
          }
          .to-name {
            color: @color-main;
            margin-left: 5px;
            margin-right: 5px;
          }
        }
        .reply-bottom {
          display: flex;
          align-items: center;
          margin-top: 6px;
          font-size: 12px;
          color: @text-minor;
          .reply-text {
            display: flex;
            align-items: center;
            margin-left: 10px;
            cursor: pointer;
            &:hover {
              color: @text-333;
            }
            .icon-comment {
              margin-right: 5px;
            }
          }
        }
      }
      .write-reply {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: @text-minor;
        padding: 10px;
        cursor: pointer;
        &:hover {
          color: @text-main;
        }
        .el-icon-edit {
          margin-right: 5px;
        }
      }
      .fade-enter-active,
      fade-leave-active {
        transition: opacity 0.5s;
      }
      .fade-enter,
      .fade-leave-to {
        opacity: 0;
      }
      .input-wrapper {
        padding: 10px;
        .gray-bg-input,
        .el-input__inner {
          /*background-color: #67C23A;*/
        }
        .btn-control {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding-top: 10px;
          .cancel {
            font-size: 16px;
            color: @text-normal;
            margin-right: 20px;
            cursor: pointer;
            &:hover {
              color: @text-333;
            }
          }
          .confirm {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
