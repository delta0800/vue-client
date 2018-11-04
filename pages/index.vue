<template>
  <section class="home"/>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="less">
.home {
  margin-right: 15rem;
  .home-nav {
    display: flex;
    justify-content: space-between;
    background: #fff;
    .avatar {
      width: 50px;
      height: 50px;
      background: url('~static/img/avatar.jpeg') no-repeat;
      background-size: 100% 100%;
    }
    .home-nav-ul {
      display: flex;
      align-items: center;
      .nav-item {
        padding: 0 18px;
      }
      .draft {
        padding-right: 15px;
      }
    }
  }
}
</style>
