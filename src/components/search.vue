<template>
  <el-dropdown class="border-0 p-2" :hide-on-click="true" :placement="top-end">
    <v-badge overlap color="teal accent-4" class="badge1">
      <span slot="badge" dark small>6</span>
      <!--<v-icon large color="grey darken-1">notifications</v-icon>-->
      <i class="fa fa-bell fa-2x" aria-hidden="true"></i>
    </v-badge>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item class="mt-0 pt-0 m-0 text-right message">
        !شما 3 تسک جدید دارید
      </el-dropdown-item>
      <el-dropdown-item divided class=" mt-0 pt-0 message" @cli>
        <div class="row" style="direction: rtl">
          <div class="col-md-1">
            <v-avatar size="29">
              <!--<img src="../../src/assets/img/barang.png" class="" alt="">-->
              <i class="fa fa-user green p-2 text-light avatar-icon"></i>
            </v-avatar>
          </div>
          <div class="col-md-7 pl-4">عضو جدید اضافه شد</div>
          <v-badge class="col-md-3 pt-2 mt-1 mr-2 time_seen text-black-50 p-0 m-0" style="height: 20px"  color="teal accent-4">3 دقیقه پیش</v-badge>
          <!--<div class="col-md-3 float-left no-gutters text-black-50 time_seen p-0 m-0 mr-2"></div>-->
        </div>
      </el-dropdown-item>
      <el-dropdown-item divided class=" m-0 message p-2" @cli>
        <div class="row" style="direction: rtl">
          <div class="col-md-1">
            <v-avatar size="29">
              <i class="fa fa-times red p-2 text-light avatar-icon"></i>
            </v-avatar>
          </div>
          <div class="col-md-7 pl-4">ارور در صفحه نمایش</div>
          <v-badge class="col-md-3 pt-2 mt-1 mr-2 time_seen text-black-50 p-0 m-0" style="height: 20px"  color="teal accent-4">2 دقیقه پیش</v-badge>
          <!--<div class="col-md-3 float-left no-gutters text-black-50 time_seen p-0 m-0 mr-2"></div>-->
        </div>
      </el-dropdown-item>
      <el-dropdown-item divided class=" m-0 message p-2" @cli>
        <div class="row" style="direction: rtl">
          <div class="col-md-1">
            <v-avatar size="29">
              <i class="fa fa-heart pink lighten-2 p-2 text-light avatar-icon"></i>
            </v-avatar>
          </div>
          <div class="col-md-7 pl-4">لایک ها افزایش یافت</div>
          <v-badge class="col-md-3 pt-2 mt-1 mr-2 ml-1 time_seen text-black-50 p-0 m-0" style="height: 20px"  color="teal accent-4">2 دقیقه پیش</v-badge>
          <!--<div class="col-md-3 float-left no-gutters text-black-50 time_seen p-0 m-0 mr-2"></div>-->
        </div>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>

</script>

<style scoped>

</style>
