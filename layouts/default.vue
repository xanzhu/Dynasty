<template>
  <div class="default-container top-0 bottom-0 left-0 right-0 overflow-auto fixed leading-6 px-3 sm:px-0 text-white">
    <zheader />
    <nuxt />
    <zfooter />
  </div>
</template>
<script>
import zheader from '@/components/xanzhu-header-logo'
import zfooter from '@/components/global-footer'

export default {
  components: {
    zheader,
    zfooter
  }
}
</script>
