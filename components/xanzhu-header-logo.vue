<template>
  <div class="logo-header">
    <n-link :to="{name: 'index'}" class="link" aria-label="Home">
      <p class="version-date font-display">
        A1.1 — JULY 2020
      </p>
      <h1 class="header-branding font-display">
        XANZHU
      </h1>
    </n-link>
  </div>
</template>
<style scoped>
.logo-header {
  margin: 1em 0 0 1.5em;
  padding: 0;
  line-height: 1.7em !important;
  background-color: inherit;
  color: inherit;
  font-weight: bold;
}

.version-date {
  font-size: 0.7em;
  padding-bottom: 0.2em;
  letter-spacing: 0.4px;
}

.header-branding {
  font-size: 4em;
}

</style>
<script>
export default {
  name: 'Zheader'
}
</script>
