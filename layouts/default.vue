<template>
  <div class="default-container top-0 bottom-0 left-0 right-0 overflow-auto fixed leading-6 text-white">
    <!-- <zheader /> -->
    <headerex />
    <nuxt />
    <zfooter />
  </div>
</template>
<script>
// import zheader from '@/components/xanzhu-header-logo'
import zfooter from '@/components/global-footer'
import headerex from '@/components/header'

export default {
  components: {
    // zheader,
    zfooter,
    headerex
  }
}
</script>
