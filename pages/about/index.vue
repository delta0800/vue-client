<template>
  <div class="content-wrapper-inner about">
    <span class="avatar">
      <img
        src="/img/avatar.jpeg"
        alt="">
    </span>
    <span class="desc">前端打杂人员，略微代码洁癖</span>
    <divider
      title="博客简述"
      postion="left"/>
    <p>本博客使用的技术为 nuxt.js + element-ui + koa2 + mongodb</p>
    <p>
      前台部分源码地址为
      <a
        style="color: #1890ff;"
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/infun-soso/vue-client">
        github
      </a>
      ，仅供参考，不做商业用途！
    </p>
    <divider
      title="关于我"
      postion="left"/>
    <ul class="about-list">
      <li>姓名：王彦峰</li>
      <li>学历专业：本科 大连民族大学</li>
      <li>
        联系方式：
        <svg-icon
          icon-class="weixin"/>
        Royal_28
        <span style="color: #ccc;">|</span>
        <svg-icon
          icon-class="email"/>
        <span>973394690@qq.com</span>
      </li>
      <li>坐标：北京市</li>
      <!-- <li>
        其他博客地址：
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://gershonv.github.io/">
          hexo 博客
        </a>
        <Divider type="vertical" />
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://juejin.im/user/5acac6c4f265da2378408f92">
          掘金主页
        </a>
      </li> -->
      <li>
        技能
        <ul>
          <li>
            HTML、CSS、Javascript：能熟练开发符合 W3C 标准的页面！
            <my-rate :rate="4"/>
          </li>
          <li>
            react vue 框架：熟练掌握使用！
            <my-rate :rate="4"/>
          </li>
          <li>
            es6：日常开发必备，以及掌握基本面向对象编程实现！
            <my-rate :rate="4"/>
          </li>
          <li>
            webpack: 入门级别，可以对脚手架进行针对性的配置！
            <my-rate :rate="3"/>
          </li>
          <li>
            node mongodb：针对需求可以做到简单的数据库设计、接口的开发与设计！
            <my-rate :rate="3"/>
          </li>
        </ul>
      </li>
      <li>
        其他
        <ul>
          <li>常用开发工具： vscode、webstorm、git</li>
          <li>熟悉的 UI 工具： antd、element-ui、bootstrap</li>
          <li>良好的代码习惯： 略微代码洁癖、注释规范 jsdoc</li>
        </ul>
      </li>
      <li>
        个人
        <ul>
          <li>偶尔玩玩游戏、每周要打两次篮球。</li>
          <li>性格开朗、平常比较好说话。联系方式在上面，欢迎交流！</li>
        </ul>
      </li>
    </ul>

  </div>
</template>

<script>
import divider from '~/components/common/divider'
import MyRate from '~/components/common/rate'
export default {
  components: {
    divider,
    MyRate
  },
  data() {
    return {
      value1: 4
    }
  },
  transition: 'fade'
}
</script>

<style lang="less">
.about {
  .avatar {
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
  .desc {
    padding-left: 10px;
  }
  .about-list {
    ul {
      padding-left: 40px;
    }
    li {
      list-style: circle inside;
    }
  }
}
</style>
