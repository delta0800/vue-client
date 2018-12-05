<template>
  <div id="infun">
    <v-header/>
    <section class="main-container">
      <div class="main">
        <nuxt/>
        <aside-bar/>
      </div>
    </section>
    <v-footer/>
  </div>
</template>
<script>
import vHeader from '~/components/layout/header'
import vFooter from '~/components/layout/footer'
import AsideBar from '~/components/layout/aside'
export default {
  components: {
    vHeader,
    vFooter,
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
  .main {
    position: relative;
    width: 1200px;
    margin: 15px auto 0;
    // border: 1px solid red;
  }
}
</style>
