<template>
  <div class="row  father">
    <div class="col-md-4"></div>
    <div class="col-md-4 contain_f">
      <div class="row contain d-flex justify-content-center">{{error_num}}404</div>
      <div class="row contain_sen font-weight-bold d-flex justify-content-center">متاسفیم! جایی مشکلی پیش آمده!</div>
      <div class="d-flex">
        <p class ="contain_below mt-3">ما نمی توانیم صفحه مورد نظر شما را
          پیدا کنیم. بازگشت به
          <a href="#" class="mr-1">خانه</a>
      </p>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
  export default {
    props:['error_num'],
    name: "404"
  }
</script>

<style scoped>
  .contain {
    color: #26A69A;
    font-size: 80px;
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
    font-size: 16px;
    text-align: center;
    vertical-align: middle;
    color: #4E5E6A;
  }
  .contain_below{
    font-size: 13px;
    text-align: center;
    vertical-align: middle;
    margin: 0 0 10px;
    color: #4E5E6A;
  }
</style>
