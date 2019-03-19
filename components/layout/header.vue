<template>
  <div class="head-container">
    <div class="main-header-box">
      <div class="container">
        <el-col
          :xs="24"
          :sm="4"
          :md="5"
          :lg="5"
          :xl="4"
        >
          <div class="logo-box">
            <a
              href="/"
              class="logo">Infun的博客</a>
          </div>
        </el-col>
        <i
          class="el-icon-more more-btn"
          @click="showMenu"/>
        <el-col
          :xs="0"
          :sm="20"
          :md="19"
          :lg="19"
          :xl="20">
          <div class="header-nav">
            <ul class="ul-main">
              <li class="nav-main">
                <el-menu
                  :default-active="activeIndex"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect">
                  <el-menu-item index="1">
                    <svg-icon
                      icon-class="home"/>
                    首页
                  </el-menu-item>
                  <el-menu-item index="2">
                    <svg-icon
                      icon-class="archive"/>
                    归档
                  </el-menu-item>
                  <el-menu-item index="3">
                    <svg-icon
                      icon-class="comment"/>
                    留言
                  </el-menu-item>
                  <el-menu-item index="4">
                    <svg-icon
                      icon-class="about"/>
                    关于
                  </el-menu-item>
                </el-menu>
              </li>
              <!-- <li class="nav-main search">
                <form
                  :model="form"
                  class="g-search">
                  <el-input
                    v-model="form.searchValue"
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"/>
                </form>
              </li> -->
              <li class="nav-main">
                <el-button
                  size="small"
                  type="text"
                  @click="handleLogin">登录后台</el-button>
              </li>
            </ul>
          </div>
        </el-col>
      </div>
      <div
        v-if="showMenuList"
        class="mobileMenu">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          @select="handleSelect">
          <el-menu-item index="1">
            <svg-icon
              icon-class="home"/>
            首页
          </el-menu-item>
          <el-menu-item index="2">
            <svg-icon
              icon-class="archive"/>
            归档
          </el-menu-item>
          <el-menu-item index="3">
            <svg-icon
              icon-class="comment"/>
            留言
          </el-menu-item>
          <el-menu-item index="4">
            <svg-icon
              icon-class="about"/>
            关于
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        searchValue: ''
      },
      showMenuList: false
    }
  },
  computed: {
    // 默认菜单选中项
    activeIndex() {
      const routes = ['/home', '/archive', '/category', '/about']
      const { fullPath } = this.$route
      return '' + (routes.indexOf(fullPath) + 1)
    }
  },
  methods: {
    handleSelect(selected) {
      this.showMenuList = false
      switch (selected) {
        case '1':
          this.$router.push('/home')
          break
        case '2':
          this.$router.push('/archive')
          break
        case '4':
          this.$router.push('/about')
          break
        default:
          break
      }
    },
    showMenu() {
      this.showMenuList = !this.showMenuList
    },
    handleLogin() {
      this.$store.commit('user/toOpenLoginModal')
    }
  }
}
</script>

<style lang="less">
.mobileMenu {
  z-index: 1;
  position: absolute;
  width: 35%;
  right: 0;
  li {
    border-bottom: 1px solid #f1f1f1;
    border-left: 1px solid #f1f1f1;
    text-align: center;
  }
}
.more-btn {
  display: none;
  font-size: 20px;
}
@media only screen and (max-width: 768px) {
  .more-btn {
    display: inline-block;
    position: absolute;
    right: 8%;
  }
}
.main-header-box {
  height: 60px;
  border-bottom: 1px solid #f1f1f1;
  .logo-box {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  .container {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    position: relative;
    .header-nav {
      flex: 1 0 auto;
      height: 100%;
    }
  }
  .ul-main {
    display: flex;
    height: 100%;
    .search {
      flex: 1 1 auto;
      justify-content: flex-end;
    }
    .nav-main {
      display: flex;
      align-items: center;
      padding: 0 10px;
      .nav-main-ul {
        display: flex;
        height: 100%;
        align-items: center;
        .nav-item {
          color: #71777c;
          padding: 0 1.2rem;
          font-size: 16px;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          cursor: pointer;
        }
      }
      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }
}
</style>
