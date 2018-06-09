<template>
  <div>
    <div class="row father pr-3 title1">
      <i class="fa fa-unlock-alt fa-lg ml-2"></i>
      تغییر رمز</div>
    <div class="row father d-flex">
      <div class="col-md-3">
        <b-form-input class="p-2 my-2 ml-2" type="password" placeholder="رمز فعلی"></b-form-input>
      </div>
      <div class="col-md-3">
        <b-form-input class="p-2 my-2 ml-2" type="password" placeholder="رمز جدید"></b-form-input>
      </div>
      <div class="col-md-3">
        <b-form-input class="p-2 my-2 ml-2" type="password" placeholder="تکرار رمز جدید"></b-form-input>
      </div>
      <div class="col-md-3">
        <button id="confirm" class="col-md-6 p-2 mt-2 mb-2  border-dark text-white float-left">تایید</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "change_pass"
  }
</script>

<style scoped>
  .contain {
    color: #6c6c6c;
    font-size: 22px;
    text-align: center;
    vertical-align: middle;
  }

  .contain_f {
    text-align: center;
    vertical-align: middle;
  }

  .father {
    margin: 1% !important;
  }

  .contain_sen {
    font-size: 13px;
    text-align: center;
    vertical-align: middle;
    color: #4E5E6A;
  }

  button:focus {
    outline: 0;
  }

  #confirm:hover {
    background-color: #5a4f9c
  }

  /*#1DB198 --> hover:#1da88f*/
  #confirm {
    background-color: #6a5fac;
  }
  i{
    color: #6a5fac;
  }
  i:hover{
    color: #5a4f9c;
    cursor: pointer;
  }

  #back {
    border: solid 1px #e5e5e5;
  }

  #back:hover {
    background-color: #ededed;
  }

  a {
    color: #2f7eb4;
  }

  a:hover {
    /*text-decoration: none;*/
    color: #1d395d;
  }
  .title1{
    font-size: 22px;
    font-weight: 400;
    color: #4E5E6A;
  }
  .title1:hover{
    cursor: pointer;
    color: #363f4a;
  }
</style>
