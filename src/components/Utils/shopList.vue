<template>
  <div class="">
    <!--<div class="container-fluid col-md-12 d-flex justify-content-center text-center align-middle title1">-->
      <!--<div class="col-md-2 color font-weight-bold">{{title1}}</div>-->
    <!--</div>-->
    <div class="row contain mt-2">
      <div class="row py-2 my-1" v-for="item in items" :class="item.class">
        <div class="name">{{item.name}}</div>
        <div class="value font-weight-bold mr-3">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['items','title1'],
    name: "shopList",
    data(){
      return {
        // items: [
        //   {name: 'نام و نام خانوادگی:', value: 'فرناز مالکی نژاد'},
        //   {name: 'نام و نام خانوادگی:', value: 'فرناز مالکی نژاد'},
        //   {name: 'نام و نام خانوادگی:', value: 'فرناز مالکی نژاد'},
        //   {name: 'نام و نام خانوادگی:', value: 'فرناز مالکی نژاد'},
        // ]

      }
    }
  }
</script>

<style scoped>
.title1{
  font-size: 18px;
}
.color{
  color: #8e8e8e;
}
  .contain{
    border-radius: 35px;
    border: solid 1px #868686;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .name{
    font-size: 16px;
    color: #8e8e8e;
  }
  .value{
    font-size: 16px;
    color: #8e8e8e;
  }
</style>
