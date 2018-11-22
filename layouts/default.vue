<template>
  <div id="infun">
    <v-header/>
    <section class="main-container">
      <div class="main">
        <nuxt/>
        <aside-bar/>
      </div>
    </section>
  </div>
</template>
<script>
import vHeader from '~/components/layout/header'
import AsideBar from '~/components/layout/aside'
export default {
  components: {
    vHeader,
    AsideBar
  }
}
</script>


<style lang="less">
#infun {
  height: 100%;
  width: 100%;
}
.main-container {
  background: #f4f5f5;
  overflow: hidden;
  .main {
    position: relative;
    width: 100%;
    max-width: 960px;
    margin: 15px auto 0;
    height: 2000px;
    // border: 1px solid red;
  }
}
</style>
