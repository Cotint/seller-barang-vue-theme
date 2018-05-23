<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
  @import url('../src/assets/awesomedoc/css/font-awesome.min.css');

  @font-face {
    font-family: awesome;
    src: url('../src/assets/fonts/fontawesome-webfont.ttf');
  }

  @font-face {
    font-family: iran;
    src: url('../src/assets/fonts/IRANSans(FaNum).ttf');
  }

  @font-face {
    font-family: iranbold;
    src: url('../src/assets/fonts/IRANSans(FaNum)_Bold.ttf');

  }

  #app {
    text-align: right;
    direction: rtl;
    font-family: iran;
  }
</style>
