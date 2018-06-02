<template>
  <div class="row father d-flex justify-content-center">
    <div class="col-md-4"></div>
    <div class="col-md-3 contain_f">
      <div class="row contain d-flex justify-content-center font-weight-bold p-3 mb-2">بارنگ</div>
      <div class="row contain_sen d-flex justify-content-center p-1 mb-2">لطفا وارد سیستم شوید.</div>
      <div class="row d-flex justify-content-center">
        <b-form-input class="p-2 my-2" type="text" placeholder="نام کاربری"></b-form-input>
        <b-form-input class="p-2 my-2" type="password" placeholder="رمز عبور"></b-form-input>
        <button class="p-2 my-2 border-dark text-white">وارد شوید</button>
      </div>
      <div class="">
        <p class="contain_below mt-3"><a href="#" class="">رمز خود را فراموش کرده اید؟</a></p>
      </div>
      <div class="p-1" style="direction: ltr;font-size: 11px">powered by
      <a href="#">Cotint</a>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
  export default {
    name: "login"
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
    margin: 5% !important;
  }

  .contain_sen {
    font-size: 13px;
    text-align: center;
    vertical-align: middle;
    color: #4E5E6A;
  }

  .contain_below {
    font-size: 13px;
    /*text-align: center;*/
    /*vertical-align: middle;*/
    margin: 0 0 10px;
    color: #4E5E6A;
  }
  button:focus {outline:0;}
  button:hover {background-color: #1da88f
  }
  button{
    background-color: #1DB198;
  }
  a{
    color: #2f7eb4;
  }
  a:hover{
    /*text-decoration: none;*/
    color: #1d395d;
  }
</style>
