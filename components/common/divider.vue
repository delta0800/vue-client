<template>
  <div :class="`el-divider-${postion} el-divider-horizontal el-divider-with-text`">
    <span class="el-divider-inner-text">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    postion: {
      type: String,
      default: 'center'
    }
  }
}
</script>

<style lang="less">
.el-divider-center,
.el-divider-left,
.el-divider-right {
  display: table;
  white-space: nowrap;
  text-align: center;
  background: transparent;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  margin: 16px 0;
  .el-divider-inner-text {
    display: inline-block;
    padding: 0 24px;
  }
  &::before {
    content: '';
    display: table-cell;
    position: relative;
    top: 50%;
    width: 50%;
    border-top: 1px solid #e8e8e8;
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
  }
  &::after {
    content: '';
    display: table-cell;
    position: relative;
    top: 50%;
    width: 50%;
    border-top: 1px solid #e8e8e8;
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
  }
}
.el-divider-left::before {
  width: 5%;
}
.el-divider-left::after {
  width: 95%;
}
.el-divider-right::before {
  width: 80%;
}
.el-divider-right::before {
  width: 20%;
}
</style>
