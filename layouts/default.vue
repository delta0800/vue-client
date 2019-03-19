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
          label="用户名">
          <el-input
            v-model="form.username"
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
        <el-button @click="handleLoginModalClose">取 消</el-button>
        <el-button
          type="primary"
          @click="handleLoginModalConfirm">确 定</el-button>
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
      form: {}
    }
  },
  computed: {
    showLoginModal() {
      return this.$store.state.user.showLoginModal
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
      toOpenLoginModal: 'user/toOpenLoginModal'
    }),
    handleLoginModalClose() {
      this.toCloseLoginModal()
    },
    handleLoginModalOpen() {
      this.toOpenLoginModal()
    },
    handleLoginModalConfirm() {},
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
.content-wrapper {
  height: calc(100vh - 80px);
  overflow: auto;
}
</style>
