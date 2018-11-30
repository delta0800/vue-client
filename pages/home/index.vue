<template>
  <section class="home">
    <nav class="home-nav-f"/>
    <!-- <nav class="home-nav">
      <ul class="home-nav-ul">
        <div class="avatar"/>
        <li class="nav-item">发沸点</li>
        <li class="nav-item">写文章</li>
        <li class="nav-item">分享链接</li>
      </ul>
      <ul class="home-nav-ul">
        <li>
          <a
            class="draft"
            href="##">草稿</a>
        </li>
      </ul>
    </nav> -->
    <div class="post-entry-list">
      <ul
        class="list-ul"
      >
        <li
          v-for="item in asyncData"
          :key="item.create_at"
          class="list-item">
          <!-- <nuxt-link to="/post"></nuxt-link> -->
          <div class="banner-box">
            <img
              :src="item.images"
              alt="">
          </div>
          <div class="content-box">
            <!-- <div class="info-row meta-row">
              <ul class="meta-list">
                <li class="item hot">
                  热
                </li>
                <li class="item grey">
                  {{ item.keyword }}
                </li>
                <li class="item grey">
                  小鱼儿
                </li>
                <li class="item grey">
                  {{ item.create_at.substr(0, 10) }}
                </li>
              </ul>
            </div> -->

            <div class="info-row title-row">
              <span class="title"><nuxt-link :to="`/post/${item._id}`">{{ item.title }}</nuxt-link></span>
            </div>
            <div class="info-row content-row">
              <span class="title">{{ item.descript }}</span>
            </div>
            <div class="info-row action-row">
              <ul class="action-list">
                <li class="item grey">
                  {{ item.create_at.substr(0, 10) }}
                </li>
                <li class="item">{{ item.meta.views }} 次阅读</li>
                <li class="item">{{ item.meta.likes }} 人喜欢</li>
                <li class="item">{{ item.meta.comments }} 人评论</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  async asyncData({ store }) {
    let { data } = await store.dispatch('post/getPostList')
    return {
      asyncData: data.data
    }
  },
  transition: 'fade',
  components: {
    Logo
  }
}
</script>

<style lang="less">
.home {
  margin-right: 240px;
  width: 55rem;
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
  .post-entry-list {
    margin-top: 15px;
    background: #fff;
    .list-item {
      position: relative;
      padding-right: 150px;
      border-bottom: 1px solid #f1f1f1;
    }
    .banner-box {
      position: absolute;
      width: 125px;
      height: 100px;
      right: 0;
      top: 50%;
      margin-top: -50px;
      img {
        height: 100%;
        border-radius: 5px;
      }
    }
    .content-box {
      padding: 10px;
      .title-row {
        margin: 0 0 6px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .title {
          color: #333;
          display: inherit;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.5;
        }
      }
      .content-row {
        margin: 0 0 10px 0;
        min-height: 50px;
        font-size: 13px;
        line-height: 24px;
        color: #666;
      }
      .info-row {
        .meta-list {
          display: flex;
          .hot {
            color: red;
            font-weight: 500;
            font-size: 12px;
          }
          .grey {
            color: #b2bac2;
            font-size: 12px;
          }
          .item {
            display: flex;
            align-items: center;
            &:not(:last-child):after {
              content: ' ';
              background: #b2bac2;
              width: 2px;
              height: 2px;
              display: inline-block;
              margin: 0 5px;
            }
          }
        }
        .action-list {
          display: flex;
          .item {
            display: flex;
            align-items: center;
            color: #b2bac2;
            font-size: 12px;
            &:not(:last-child):after {
              content: ' ';
              background: #b2bac2;
              width: 2px;
              height: 2px;
              display: inline-block;
              margin: 0 5px;
            }
          }
        }
      }
    }
  }
}
</style>
