<template>
  <div class="container-fluid row p-0 m-0">

    <div class="col-md-3 mt-3">
      <div class="row p-2 title mx-1">
        <i class="fa fa-user ml-2 fa-lg"></i>
        <div class="px-2 pt-2 ">اطلاعات کابری</div>
      </div>
      <div class="row p-2 mx-2">
        <div class="col-md-4 p-1 font-weight-bold">نام:</div>
        <div class="col-md-5 p-1">فرناز</div>
      </div>
      <div class="row p-2 mx-2">
        <div class="col-md-4 p-1 font-weight-bold">نام خانوادگی:</div>
        <div class="col-md-5 p-1">مالکی نژاد</div>
      </div>
      <div class="row p-2 mx-2">
        <div class="col-md-4 p-1 font-weight-bold">ایمیل:</div>
        <div class="col-md-7 p-1"><a :href="`mailto:${ email }`">{{email}}farnazmaleki96@gmail.com</a></div>
      </div>
      <div class="row p-2 mx-2">
        <div class="col-md-4 p-1 font-weight-bold">تاریخ تولد:</div>
        <div class="col-md-7 p-1">15/12/1374</div>
      </div>
    </div>
    <div class="col-md-3 p-0 mt-3">
      <div class="row p-2 title mx-1">
        <i class="fa fa-address-book ml-2 fa-lg"></i>
        <div class="px-2 pt-2 ">اطلاعات تماس</div>
      </div>
      <div class="row p-2 mx-2">
        <div class="col-md-3 p-1 font-weight-bold">استان:</div>
        <div class="col-md-7 p-1">تهران</div>
      </div>
      <div class="row p-2 mx-2">
        <div class="col-md-3 p-1 font-weight-bold">شهر:</div>
        <div class="col-md-7 p-1">تهران</div>
      </div>
      <div class="row p-2 mx-2">
        <div class="col-md-3 p-1 font-weight-bold">شماره تلفن:</div>
        <div class="col-md-7 p-1"><a :href="`tel:${ telephone }`">{{tele}}64648132</a></div>
      </div>
      <div class="row p-2 mx-2">
        <div class="col-md-2 p-1 font-weight-bold">آدرس:</div>
        <div class="col-md-9 mr-3 p-1">خیابان خواجه عبدالله انصاری،کوچه چهاردهم،پلاک 15</div>
      </div>
    </div>
    <div class="col-md-6">
      <GoogleMap></GoogleMap>
    </div>
  </div>
</template>

<script>
  import GoogleMap from "./GoogleMap";

  export default {
    props: ['email', 'tele'],
    name: "profile",
    components: {
      GoogleMap
    },
    data() {
      return {
        email: email,
        telephone: this.tele
      }
    }
  }
</script>

<style scoped>
  i {
    color: #26A69A;
  }

  .title {
    color: #26A69A;
  }

  div a {
    color: black;
  }
</style>
