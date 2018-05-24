<template>
  <div>
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tabs",
      data() {
        return {tabs: [] };
      },

      created() {

        this.tabs = this.$children;

      },
      methods: {
        selectTab(selectedTab) {
          this.tabs.forEach(tab => {
            tab.isActive = tab.name == selectedTab.name;
          });
        }
      }
    }
</script>

<style scoped>
  .tabs li.is-active a{
    color: black;
    border-bottom-color: black;;
  }
  .tabs li.is-active a:hover{
    /*border-bottom-color: transparent;*/
  }
</style>
