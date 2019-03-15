<template>
  <section class="home">
    <div class="post-entry-list">
      <div class="list-ul">
        <template
          v-for="item in asyncData"
          class="list-item">
          <el-card
            :key="item.create_at"
            style="margin-bottom: 15px;"
            class="list-card">
            <nuxt-link :to="`/post/${item._id}`">
              <div
                :key="item.create_at"
                :style="{backgroundImage:'url(' + item.images + ')'}"
                class="attach"/>
              <div class="content-box">
                <div class="info-row title-row">
                  <span class="title">{{ item.title }}</span>
                </div>
                <div class="info-row tag-row">
                  <svg-icon icon-class="tag" />
                  <el-tag
                    v-for="tag in item.tag"
                    :key="tag"
                    size="mini"
                    type="primary">{{ tag }}</el-tag>
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
            </nuxt-link>
          </el-card>
        </template>
      </div>
      <el-col :xs="0">
        <div class="preview">
          <divider title="预览"/>
          <li
            v-for="item in asyncData"
            :key="item.create_at">
            <nuxt-link :to="`/post/${item._id}`">{{ item.title }}</nuxt-link>
          </li>
        </div>
      </el-col>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import divider from '~/components/common/divider'

export default {
  async asyncData({ store }) {
    !store.state.post.postList.length &&
      (await store.dispatch('post/getPostList'))
    return {
      asyncData: store.state.post.postList
    }
  },
  transition: 'fade',
  components: {
    Logo,
    divider
  }
}
</script>

<style lang="less">
.home {
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
  @media only screen and (max-width: 768px) {
    .post-entry-list {
      padding: 0 20px !important;
    }
  }
  .post-entry-list {
    padding: 0 300px 40px 40px;
    .list-card {
      transition: all 0.3s linear;
    }
    .list-card:hover {
      cursor: pointer;
      background: #effbff;
      box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
      -webkit-transform: translate3d(0, -5px 0);
      transform: translate3d(0, -5px 0);
    }
    .attach {
      width: 100%;
      height: 300px;
      background-attachment: fixed;
      background-size: cover;
      background-position: center center;
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
          transition: all 1s linear;
          a:hover {
            color: #1890ff !important;
          }
        }
      }
      .tag-row {
        margin: 10px 0;
        .el-tag {
          &:not(:first-child) {
            margin-left: 10px;
          }
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
        .el-tag {
          margin-left: 0 !important;
          margin-right: 10px;
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
  .preview {
    position: fixed;
    width: 260px;
    top: 80px;
    right: 20px;
    list-style-type: none;
    li {
      display: block;
      transition: all 0.3s ease;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-left: -1px;
      a {
        color: #8590a6;
      }
    }
  }
}
</style>
