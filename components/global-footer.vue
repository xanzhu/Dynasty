<template>
  <div class="z-footer font-body text-center font-bold text-sm absolute bottom-0 right-0 left-0 pb-10">
    <p>© XANZHU 2020 </p>
    <div class="text-white font-body font-normal text-opacity-50">
      <n-link :to="{name: '#'}">
        Privacy policy
      </n-link>
      <n-link :to="{name: '#'}" class="px-2">
        Terms and Conditions
      </n-link>
      <n-link :to="{name: '#'}">
        Changelog
      </n-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Zfooter'
}
</script>
