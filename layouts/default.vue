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
      </el-main>
    </el-container>
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
main {
  padding: 20px 0 0 0 !important;
}
header {
  padding: 0 !important;
}
// #infun {
//   background: url('../static/img/bg2.jpg');
// }
.content-wrapper {
  height: calc(100vh - 80px);
  overflow: auto;
}
</style>
