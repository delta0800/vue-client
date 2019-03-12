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
      <ul class="link-list">
        <li>
          <a
            href="https://github.com/infun-soso"
            target="_blank">
            <svg-icon icon-class="github"/>
            <span style="color: blue;text-decoration: underline;">github</span>
          </a>
        </li>
        <li>
          <svg-icon icon-class="address"/> 北京 丰台
        </li>
      </ul>
    </div>
    <div class="my-tags">
      <p class="tags-title">个人标签</p>
      <div class="tags">
        <el-tag
          v-for="tag in dynamicTags"
          :key="tag"
          :disable-transitions="false"
          :type="switchType()"
          closable
          size="small"
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
      dynamicTags: [
        '帅气的',
        'CSS3',
        '难以捉摸',
        'Javascript',
        'React',
        '独一无二',
        'Vue',
        'ES6'
      ],
      inputVisible: false,
      inputValue: ''
    }
  },
  computed: {},
  methods: {
    switchType() {
      const typeArr = ['success', 'warning', 'danger', 'primary']
      return typeArr[Math.round(Math.random() * (typeArr.length - 1))]
    },
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
  padding: 0 15px;
  z-index: 1;
  border-right: 1px solid #ebedf0;
  height: calc(100vh - 80px);
  text-align: center;
  color: rgba(0, 0, 0, 0.65);
  overflow-y: auto;
  .link-list {
    display: flex;
    justify-content: space-around;
    width: 160px;
    margin: 0 auto;
  }
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
      width: 132px;
      height: 132px;
      img {
        border-radius: 50%;
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
