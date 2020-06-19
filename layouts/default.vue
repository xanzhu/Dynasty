<template>
  <div>
    <xheader />
    <nuxt />
    <zfooter />
  </div>
</template>
<style>

</style>
<script>
import xheader from '@/components/xanzhu-header-logo'
import zfooter from '@/components/global-footer'

export default {
  components: {
    xheader,
    zfooter
  }
}
</script>
