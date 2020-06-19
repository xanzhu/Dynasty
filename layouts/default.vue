<template>
  <div>
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
