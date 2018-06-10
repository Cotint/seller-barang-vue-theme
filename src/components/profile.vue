<template>
  <div class="container-fluid row p-0 m-0">

    <div class="col-md-3 mt-3">
      <div class="row p-2 title mx-1">
        <i class="fa fa-user ml-2 fa-lg"></i>
        <div class="px-2 pt-2 ">اطلاعات کابری</div>
      </div>
      <div class="row p-2 mx-2">
        <div class="col-md-4 p-1 font-weight-bold">نام:</div>
        <div class="col-md-5 p-1">{{name}}</div>
      </div>
      <div class="row p-2 mx-2">
        <div class="col-md-4 p-1 font-weight-bold">نام خانوادگی:</div>
        <div class="col-md-5 p-1">{{lastName}}</div>
      </div>
      <div class="row p-2 mx-2">
        <div class="col-md-4 p-1 font-weight-bold">ایمیل:</div>
        <div class="col-md-7 p-1"><a :href="`mailto:${ email }`">{{email}}</a></div>
      </div>
      <div class="row p-2 mx-2">
        <div class="col-md-4 p-1 font-weight-bold">تاریخ تولد:</div>
        <div class="col-md-7 p-1">{{birthday}}</div>
      </div>
    </div>
    <div class="col-md-3 p-0 mt-3">
      <div class="row p-2 title mx-1">
        <i class="fa fa-address-book ml-2 fa-lg"></i>
        <div class="px-2 pt-2 ">اطلاعات تماس</div>
      </div>
      <div class="row p-2 mx-2">
        <div class="col-md-3 p-1 font-weight-bold">استان:</div>
        <div class="col-md-7 p-1">{{state}}</div>
      </div>
      <div class="row p-2 mx-2">
        <div class="col-md-3 p-1 font-weight-bold">شهر:</div>
        <div class="col-md-7 p-1">{{city}}</div>
      </div>
      <div class="row p-2 mx-2">
        <div class="col-md-3 p-1 font-weight-bold">شماره تلفن:</div>
        <div class="col-md-7 p-1"><a :href="`tel:${ telephone }`">{{telephone}}</a></div>
      </div>
      <div class="row p-2 mx-2">
        <div class="col-md-2 p-1 font-weight-bold">آدرس:</div>
        <div class="col-md-9 mr-3 p-1">{{address}}</div>
      </div>
    </div>
    <div class="col-md-6">
      <GoogleMap :lat1="latM" :long1="longM"></GoogleMap>
    </div>
  </div>
</template>

<script>
  import GoogleMap from "./GoogleMap";

  export default {
    props: [ 'tele', 'tmp'],
    name: "profile",
    components: {
      GoogleMap
    },
    data() {
      return {
        result2: [],
        // telephone: this.tele,
        name: '',
        lastName: '',
        email: '',
        birthday: '',
        state: '',
        city: '',
        telephone: '',
        address: '',
        latM:'',
        longM:''
      }
    },
    created() {
      const _this = this;
      console.log("it is data")
      var headers2 = {'Content-type': 'application/json; charset=UTF-8', "Access-Control-Allow-Origin": "*"}
      window.axios.get(`http://api.barangfood.com/api/v1/users/1`, headers2)
        .then(function (result) {
          // _this.result2 = result.data.data;
          console.log("it is data", result.data.data.name)
          _this.result2.push({
            name: result.data.data.name,
            email: result.data.data.email,
            lastName: result.data.data.full_name,
            telephone: result.data.data.phone,
            birthday: result.data.data.birthday,
            state: result.data.data.state,
            city: result.data.data.city,
            address: result.data.data.address,
            lat: result.data.data.lat,
            long: result.data.data.long,
          });
          _this.name = _this.result2["0"].name;
          _this.lastName = _this.result2["0"].lastName
          _this.email = _this.result2["0"].email
          _this.telephone = _this.result2["0"].telephone
          _this.birthday = _this.result2["0"].birthday
          _this.state = _this.result2["0"].state
          _this.city = _this.result2["0"].city
          _this.address = _this.result2["0"].address
          _this.latM = _this.result2["0"].lat
          _this.longM = _this.result2["0"].long

          console.log("name:", _this.result2["0"])
        })
    },
  }
</script>

<style scoped>
  i {
    color: #26A69A;
  }

  i:hover {
    color: #209084;
  }

  .title {
    color: #26A69A;
  }

  .title:hover {
    color: #209084;
  }

  div a {
    color: black;
  }
</style>
