<template>
  <el-rate
    v-model="rate"
    :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
    style="display: inline-block;"
    void-icon-class="icon-rate-face-off"
  />
</template>

<script>
export default {
  props: {
    rate: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>
</style>
