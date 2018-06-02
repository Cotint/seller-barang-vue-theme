<template>
  <div class="row father d-flex justify-content-center">
    <div class="col-md-4"></div>
    <div class="col-md-3 contain_f">
      <div class="row contain d-flex justify-content-center font-weight-bold p-3 mb-2">بارنگ</div>
      <div class="row contain_sen d-flex justify-content-center p-1 mb-2">آدرس ایمیل خود را وارد کنید تا رمز شما فرستاده شود.</div>
      <div class="row d-flex justify-content-center">
        <b-form-input class="p-2 my-2" type="email" placeholder="ایمیل"></b-form-input>
        <button id="confirm" class="col-md-12 p-2 mt-2 mb-2 border-dark text-white">تایید</button>
        <button id="back" class="p-2 mb-2">بازگشت</button>
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
        name: "forgot_pass"
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
    text-align: center;
    vertical-align: middle;
    margin: 0 0 10px;
    color: #4E5E6A;
  }
  button:focus {outline:0;}
  #confirm:hover {background-color: #5a4f9c
  }
  /*#1DB198 --> hover:#1da88f*/
  #confirm{
    background-color: #6a5fac;
  }
  #back{
    border: solid 1px #e5e5e5;
  }
  #back:hover{
    background-color: #ededed;
  }
  a{
    color: #2f7eb4;
  }
  a:hover{
    /*text-decoration: none;*/
    color: #1d395d;
  }
</style>
