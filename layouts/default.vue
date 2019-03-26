<template>
  <div id="infun">
    <el-container>
      <el-header>
        <v-header/>
      </el-header>
      <el-main>
        <el-col
          :xs="0"
          :sm="4"
          :md="5"
          :lg="5"
          :xl="4">
          <aside-bar/>
        </el-col>
        <el-col
          :xs="24"
          :sm="20"
          :md="19"
          :lg="19"
          :xl="20">
          <div class="content-wrapper">
            <nuxt/>
          </div>
        </el-col>
        <transition name="fade">
          <div
            v-show="isBackTop"
            class="top-box"
            @click="backToTop">
            <svg-icon
              class="top-icon"
              icon-class="backtop"/>
          </div>
        </transition>
      </el-main>
    </el-container>
    <el-dialog
      :visible="showLoginModal"
      title="登录"
      width="300px"
      @open="handleLoginModalOpen"
      @close="handleLoginModalClose">
      <el-form :model="form">
        <el-form-item
          label-width="80"
          label="邮箱">
          <el-input
            v-model="form.email"
            autocomplete="off"/>
        </el-form-item>
        <el-form-item
          label-width="80"
          label="密码">
          <el-input
            v-model="form.password"
            type="password"
            autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer">
        <el-button
          size="mini"
          @click="handleLoginModalClose">取 消</el-button>
        <el-button
          type="primary"
          size="mini"
          @click="handleLoginModalConfirm">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      :visible="showSignUpModal"
      title="注册"
      width="300px"
      @open="handleSignUpModalOpen"
      @close="handleSignUpModalClose">
      <el-form :model="signForm">
        <el-form-item
          label-width="80"
          label="用户名（昵称）">
          <el-input
            v-model="signForm.name"
            autocomplete="off"/>
        </el-form-item>
        <el-form-item
          label-width="80"
          label="密码">
          <el-input
            v-model="signForm.password"
            type="password"
            autocomplete="off"/>
        </el-form-item>
        <el-form-item
          label-width="80"
          label="邮箱">
          <el-input
            v-model="signForm.email"
            autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer">
        <el-button
          size="mini"
          @click="handleSignUpModalClose">取 消</el-button>
        <el-button
          type="primary"
          size="mini"
          @click="handleSignUpModalConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import vHeader from '~/components/layout/header'
import vFooter from '~/components/layout/footer'
import AsideBar from '~/components/layout/aside'
import { mapMutations } from 'vuex'
export default {
  components: {
    vHeader,
    vFooter,
    AsideBar
  },
  data() {
    return {
      isBackTop: false,
      form: {},
      signForm: {}
    }
  },
  computed: {
    showLoginModal() {
      return this.$store.state.user.showLoginModal
    },
    showSignUpModal() {
      return this.$store.state.user.showSignUpModal
    }
  },
  mounted() {
    const target = document.querySelector('.content-wrapper')
    target.onscroll = () => {
      var scrollTop = document.querySelector('.content-wrapper').scrollTop //0-18
      this.isBackTop = scrollTop > 670
    }
  },
  methods: {
    ...mapMutations({
      toCloseLoginModal: 'user/toCloseLoginModal',
      toOpenLoginModal: 'user/toOpenLoginModal',
      toOpenSignUpModal: 'user/toOpenSignUpModal',
      toCloseSignUpModal: 'user/toCloseSignUpModal'
    }),
    handleLoginModalClose() {
      this.toCloseLoginModal()
    },
    handleLoginModalOpen() {
      this.toOpenLoginModal()
    },
    handleSignUpModalClose() {
      this.toCloseSignUpModal()
    },
    handleSignUpModalOpen() {
      this.toOpenSignUpModal()
    },
    handleLoginModalConfirm() {
      this.$store
        .dispatch({
          type: 'user/login',
          payload: this.form
        })
        .then(result => {
          if (result.data.code === 0) {
            this.$message.success('登录成功')
            this.handleLoginModalClose()
          } else {
            this.$message.error(result.data.msg)
          }
        })
    },
    handleSignUpModalConfirm() {
      this.$store
        .dispatch({
          type: 'user/register',
          payload: this.signForm
        })
        .then(result => {
          if (result.data.code === 0) {
            this.$message.success('注册成功')
            this.handleSignUpModalClose()
          } else {
            this.$message.error(result.data.msg)
          }
        })
    },
    backToTop() {
      let distance = document.getElementsByClassName('content-wrapper')[0]
        .scrollTop
      let step = distance / 100
      ;(function smoothBack() {
        if (distance > step) {
          distance -= step
          document.getElementsByClassName(
            'content-wrapper'
          )[0].scrollTop = distance
          setTimeout(smoothBack, 5)
        } else {
          document.getElementsByClassName('content-wrapper')[0].scrollTop = 0
        }
      })()
    }
  }
}
</script>


<style lang="less">
main {
  padding: 20px 0 0 0 !important;
}
header {
  padding: 0 !important;
}
.top-box {
  position: fixed;
  bottom: 100px;
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
.el-main::before {
  content: '';
  display: table;
}
.el-main::after {
  clear: both;
}
.content-wrapper {
  height: calc(100vh - 80px);
  overflow: auto;
  @media only screen and (max-width: 768px) {
    .content-wrapper-inner {
      padding: 0 20px !important;
    }
  }
  .content-wrapper-inner {
    position: relative;
    padding: 0 300px 40px 40px;
  }
}
</style>
