<template>
  <section class="home">
    <nav class="home-nav-f"/>
    <nav class="home-nav">
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
    </nav>
    <div class="post-entry-list">
      <ul class="list-ul">
        <li
          v-for="item in asyncData"
          :key="item.create_at"
          class="list-item">
          <!-- <nuxt-link to="/post"></nuxt-link> -->
          <div class="content-box">
            <div class="info-row meta-row">
              <ul class="meta-list">
                <li class="item hot">
                  热
                </li>
                <li class="item grey">
                  专栏
                </li>
                <li class="item grey">
                  小鱼儿
                </li>
                <li class="item grey">
                  {{ item.create_at.substr(0, 10) }}
                </li>
              </ul>
            </div>
            <div class="info-row title-row">
              <span class="title">{{ item.title }}</span>
            </div>
            <div class="info-row action-row">
              <ul class="action-list">
                <li>zan</li>
                <li>pinglun</li>
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
  async asyncData({ params, app, store }) {
    // console.log(store)
    console.log(app)

    // let res = await store.dispatch('post/getPostList')
    let res = await app.$axios.get('/admin/index')
    console.log(res)
    return { asyncData: res.data.data }
  },

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
  .post-entry-list {
    margin-top: 15px;
    background: #fff;
    .list-item {
      padding: 15px;
    }
    .content-box {
      .title-row {
        margin: 6px 0 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .title {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          color: #2e3135;
        }
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
            &:after {
              content: '\B7';
              margin: 0 3px;
              color: #b2bac2;
            }
          }
        }
        .action-list {
          display: flex;
        }
      }
    }
  }
}
</style>
