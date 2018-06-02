<template>
  <el-dropdown class="border-0" :hide-on-click="true" :placement="top-end">
  <span class="el-dropdown-dark">
    شاپکت<i class="el-icon-arrow-down el-icon--right py-1 px-2"></i>
  </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item class=" m-0 text-dark">
        <router-link to="/profile" class="">
          <div class="ml-5">پروفایل شما</div>
        </router-link>
      </el-dropdown-item>
      <el-dropdown-item class=" m-0 text-dark">
        <router-link to="/change" class="">
          <div class="ml-5">تغییر رمز</div>
        </router-link>
      </el-dropdown-item>
        <!--<el-dropdown-item class=" m-0 text-dark">-->
          <!--<router-link to="/faq" class="">-->
            <!--<div class="ml-5">FAQ</div>-->
          <!--</router-link>-->
        <!--</el-dropdown-item>-->
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  export default {
    data() {
      return {
        currentPage: 3
      }
    }
  }
</script>
<style scoped>
  .el-dropdown-dark {
    cursor: pointer;
    color: #0f041f;
    border: none !important;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .el-dropdown-menu__item {
    /*margin-left: 5%;*/
    /*margin-right: 5%;*/
    /*padding: 2%;*/
    direction: rtl;
  }

  a:hover {
    text-decoration: none;
    direction: rtl;
  }
  a{
    color: black;
  }
</style>
