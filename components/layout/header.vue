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
                <ul class="nav-main-ul">
                  <li class="nav-item"><nuxt-link to="/home">首页</nuxt-link></li>
                  <li class="nav-item">文章</li>
                  <li class="nav-item">心情</li>
                  <li class="nav-item">标签</li>
                </ul>
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
              <li class="nav-main">
                <div class="avatar">
                  <img
                    src="/img/avatar.jpeg"
                    alt="">
                </div>
                <svg-icon icon-class="people"/>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import dome from '~/static/icons/people.svg'
export default {
  data() {
    return {
      form: {
        searchValue: ''
      },
      demo: dome
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
