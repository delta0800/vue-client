<template>
  <section class="welcome">
    <section
      id="banner"
      data-video="images/banner">
      <div class="inner">
        <!-- <h1>Infun's blog</h1> -->
        <p>Only by working
          <span class="notice">hard</span>
          can it seem effortless
          <svg-icon
            style="font-size: 16px;"
            icon-class="people"/>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/home">文章 /&nbsp;</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/home">心情 /&nbsp;</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/home">音乐</nuxt-link>
          </li>
        </ul>
      </div>
      <video
        muted
        autoplay=""
        loop="">
        <source
          src="http://demo.cssmoban.com/cssthemes5/twts_139_transitive/images/banner.mp4"
          type="video/mp4">
        <source
          src="http://demo.cssmoban.com/cssthemes5/twts_139_transitive/images/banner.webm"
          type="video/webm">
      </video>
    </section>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'index',
  components: {
    Logo
  }
}
</script>

<style lang="less" scoped>
.welcome {
  height: 100%;
  width: 100%;
}
#banner {
  position: relative;
  width: 100%;
  height: 100%;
  video {
    height: 100%;
    width: 100%;
  }
}
#banner:before {
  content: '';
  display: block;
  background-color: rgba(0, 0, 0, 0.75);
  height: 100%;
  left: 0;
  opacity: 0.45;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  transition: all 3s ease;
  transition-delay: 1.25s;
}
#banner .inner {
  position: absolute;
  -moz-transform: scale(1);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -moz-transition: opacity 1s ease, -moz-transform 1s ease;
  -webkit-transition: opacity 1s ease, -webkit-transform 1s ease;
  -ms-transition: opacity 1s ease, -ms-transform 1s ease;
  transition: opacity 1s ease, transform 1s ease;
  opacity: 1;
  z-index: 2;
  right: 70px;
  bottom: 300px;
  text-align: right;
  .nav {
    display: flex;
    justify-content: flex-end;
    a {
      color: #fff;
      font-weight: 500;
      font-size: 16px;
    }
  }
}
#banner p {
  color: rgba(255, 255, 255, 0.65);
  font-size: 25px;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 2px 2px #777;
  .notice {
    font-weight: 500;
    color: rgb(255, 251, 0);
  }
}
#banner h1 {
  font-size: 50px;
  margin-bottom: 1rem;
  color: #fff;
}
</style>
