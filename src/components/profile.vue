<template>
<div class="container row">
  <div class="col-md-6">
    <div class="row p-2">
      <div class="p-1">نام:</div>
      <div class="p-1">فرناز</div>
    </div>
    <div class="row p-2">
      <div class="p-1">نام خانوادگی:</div>
      <div class="p-1">مالکی نژاد</div>
    </div>
    <div class="row p-2">
      <div class="p-1">ایمیل:</div>
      <div class="p-1">farnazmaleki96@gmail.com</div>
    </div>
    <div class="row p-2">
      <div class="p-1">پسورد:</div>
      <div class="p-1">111111</div>
    </div>
    <div class="row p-2">
      <div class="p-1">شماره تلفن:</div>
      <div class="p-1">22864832</div>
    </div>
    <div class="row p-2">
      <div class="p-1">تاریخ تولد:</div>
      <div class="p-1">15/12/1374</div>
    </div>
  </div>
  <div class="col-ms-6">
    <div class="row p-2">
      <div class="p-1">استان:</div>
      <div class="p-1">تهران</div>
    </div>
    <div class="row p-2">
      <div class="p-1">شهر:</div>
      <div class="p-1">تهران</div>
    </div>
    <div class="row p-2">
      <div class="p-1">آدرس:</div>
      <div class="p-1">فلان</div>
    </div>
    <GoogleMap></GoogleMap>
  </div>
</div>
</template>

<script>
  import GoogleMap from "./GoogleMap";
    export default {
        name: "profile",
      components: {
        GoogleMap
      }
    }
</script>

<style scoped>

</style>
