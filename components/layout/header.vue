<template>
  <div class="head-container">
    <div class="main-header-box">
      <header class="main-header">
        <div class="container">
          <a
            href="/"
            class="logo">Infun</a>
          <div class="header-nav">
            <ul class="ul-main">
              <li class="nav-main">
                <el-menu
                  :default-active="activeIndex"
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect">
                  <el-menu-item index="1">首页</el-menu-item>
                  <el-menu-item index="2">归档</el-menu-item>
                  <el-menu-item index="3">分类</el-menu-item>
                  <el-menu-item index="4">关于</el-menu-item>
                </el-menu>
              </li>
              <li class="nav-main search">
                <form
                  :model="form"
                  class="g-search">
                  <el-input
                    v-model="form.searchValue"
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"/>
                </form>
              </li>
              <li class="nav-main">
                <el-button
                  size="small"
                  type="text">登录后台</el-button>
              </li>
            </ul>
          </div>
        </div>
      </header>
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
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect() {
      console.log(12111)
    }
  }
}
</script>

<style lang="less">
.main-header-box {
  height: 60px;
  border-bottom: 1px solid #f1f1f1;
  header {
    height: 100%;
    .container {
      display: flex;
      align-items: center;
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      .logo {
        display: inline-block;
        width: 100px;
        font-size: 36px;
        text-align: center;
      }
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
}
</style>
