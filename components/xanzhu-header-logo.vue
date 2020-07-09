<template>
  <div class="text-center sm:text-left mt-10 leading-5 sm:ml-6 sm:leading-5 sm:mt-4 subpixel-antialiased">
    <n-link :to="{name: 'index'}" class="link" aria-label="Return Home">
      <p class="version-date text-xs pb-1 font-bold tracking-wide hidden sm:flex">
        A1.1 — JULY 2020
      </p>
      <h1 class="text-5xl font-bold">
        XANZHU
      </h1>
    </n-link>
  </div>
</template>
<script>
export default {
  name: 'Zheader'
}
</script>
