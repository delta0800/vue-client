<template>
  <div class="aside">
    <div class="info-box">
      <div class="avatar">
        <img
          src="/img/avatar.jpeg"
          alt="">
      </div>
      <p class="username">Infun</p>
      <p class="sign">No pain, No gain</p>
      <p class="detail">一个会打篮球的前端er</p>
    </div>
    <div class="social">
      <p class="description"><svg-icon icon-class="address"/> 北京 丰台</p>
      <p class="description"><svg-icon icon-class="mail"/> 973394690@qq.com</p>
    </div>
    <div class="my-tags">
      <p class="tags-title">个人标签</p>
      <div class="tags">
        <el-tag
          v-for="tag in dynamicTags"
          :key="tag"
          :disable-transitions="false"
          closable
          size="small"
          type="info"
          @close="handleClose(tag)">
          {{ tag }}
        </el-tag>
        <el-input
          v-if="inputVisible"
          ref="saveTagInput"
          v-model="inputValue"
          class="input-new-tag"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <el-button
          v-else
          class="button-new-tag"
          size="small"
          @click="showInput">+</el-button>
      </div>
    </div>
    <calendar/>
  </div>
</template>

<script>
import Calendar from '~/components/common/calendar'

export default {
  components: {
    Calendar
  },
  data() {
    return {
      dynamicTags: ['帅气的', '独一无二', '难以捉摸'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput() {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm() {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style lang="less">
.aside {
  width: 18rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  .el-tag {
    margin-right: 8px;
    margin-bottom: 8px;
  }
  .button-new-tag {
    padding-top: 0;
    height: 24px;
    padding-bottom: 0;
    border-style: dashed;
  }
  .input-new-tag {
    width: 90px;
    height: 24px;
    vertical-align: bottom;
    display: inline-block;
    margin-bottom: 8px;
    input {
      height: 24px;
      padding-left: 5px;
    }
  }
  .info-box {
    text-align: center;
    border-bottom: 1px dashed #f1f1f1;
    padding-bottom: 20px;
    .avatar {
      margin: 0 auto 15px;
      width: 100px;
      height: 100px;
      img {
        border-radius: 50px;
      }
    }
    .username {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      margin-bottom: 4px;
    }
    .sign {
      margin-bottom: 10px;
    }
    .detail {
      margin-bottom: 10px;
    }
    .description {
      text-align: left;
      margin-bottom: 5px;
    }
  }
  .social {
    padding: 15px 0;
    border-bottom: 1px dashed #f1f1f1;
  }
  .my-tags {
    padding: 15px 0;
    border-bottom: 1px dashed #f1f1f1;
    .tags-title {
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      margin-bottom: 12px;
    }
  }
}
</style>
