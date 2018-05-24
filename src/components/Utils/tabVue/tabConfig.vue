<template>
  <div class="container pt-5">

    <tabs>
      <tab name="Services" :selected="true">
        <h1>What we do</h1>
      </tab>
      <tab name="Pricing">
        <h1>How much we do it for</h1>
      </tab>
    </tabs>

  </div>
</template>

<script>
  import tabs from '../tabVue/tabs'
  import tab from '../tabVue/tab'

  export default {
    name: "tabConfig",
    components: {
      tabs,
      tab
    }
  }
</script>

<style scoped>
  :focus {
    outline: 0;
  }
</style>
