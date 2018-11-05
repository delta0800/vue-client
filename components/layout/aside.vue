<template>
  <div class="aside">
    <calendar/>
  </div>
</template>

<script>
import Calendar from '~/components/common/calendar'

export default {
  components: {
    Calendar
  }
}
</script>

<style>
.aside {
  width: 14rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  height: 100%;
}
</style>
