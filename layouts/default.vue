<template>
  <div id="infun">
    <v-header/>
    <section class="main-container">
      <div class="main">
        <nuxt/>
        <div class="main-aside"/>
      </div>
    </section>
  </div>
</template>
<script>
import vHeader from '~/components/common/header'
export default {
  components: {
    vHeader
  }
}
</script>


<style lang="less">
.main-container {
  background: #f4f5f5;
  .main {
    position: relative;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    height: 1000px;
    border: 1px solid red;
    .main-aside {
      width: 14rem;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      background: yellow;
      height: 100%;
    }
  }
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
