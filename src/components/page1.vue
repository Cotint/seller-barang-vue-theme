<template>
  <!--<fullscreen :fullscreen.sync="fullscreen" ref="fullscreen">-->
  <div id="app">
    <div class="example">
      <!--<transition name="fade" mode="out-in">-->
      <div v-if="search" transition="fade"
           class="row container-fluid header-border d-md-flex justify-content-md-between">
        <div class="col-md-5 col-12 d-flex justify-content-md-start justify-content-center mt-2 mr-md-5 p-1">
          <div class="col-md-1 col-2">
            <v-avatar>
              <img src="../../src/assets/img/barang.png" class="" alt="">
            </v-avatar>
          </div>
          <div class="col-md-2 col-5 pt-2 p-md-0 mr-md-3 mr-2 w-100">
            <drop_down class="py-2 float-left"></drop_down>
          </div>
          <div class="col-md-1 col-2 mt-2 p-0">
            <el-dropdown class="border-0 p-2" :hide-on-click="true" :placement="top-start">
              <v-badge overlap color="teal accent-4" class="badge1">
                <span slot="badge" dark small>6</span>
                <!--<v-icon large color="grey darken-1">notifications</v-icon>-->
                <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
              </v-badge>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="p-2 text-right message">
                  !شما 4 پیام خوانده نشده دارید
                </el-dropdown-item>
                <el-dropdown-item divided class="align-self-start m-0 message" @cli>
                  <div class="row" style="direction: rtl">
                    <div class="col-2">
                      <v-avatar size="30">
                        <img src="../../src/assets/img/barang.png" class="" alt="">
                      </v-avatar>
                    </div>
                    <div class=" col-10 text-right">
                      <div class="col-md-9 text-dark font-weight-bold">فرناز مالکی</div>
                      <div class="col-md-12 text-black-50 ">سلام اون محصول چی شد؟!</div>
                      <div class="col-md-9 text-black-50">آنلاین</div>
                    </div>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item divided class="align-self-start m-0 message" @cli>
                  <div class="row d-flex justify-content-start" style="direction: rtl  ">
                    <div class="col-2">
                      <v-avatar size="30">
                        <img src="../../src/assets/img/barang.png" class="" alt="">
                      </v-avatar>
                    </div>
                    <div class="col-10" style="text-align: right">
                      <div class="col-md-9 text-dark font-weight-bold">حمیدرضا شکوهی</div>
                      <div class="col-md-12 text-black-50 ">براتون ارسال کردم</div>
                      <div class="col-md-9 text-black-50">آنلاین</div>
                    </div>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="col-md-1 col-2 mt-2 p-0">
            <el-dropdown class="border-0 p-2" :hide-on-click="true" :placement="top-end">
              <v-badge overlap color="teal accent-4" class="badge1">
                <span slot="badge" dark small>6</span>
                <!--<v-icon large color="grey darken-1">notifications</v-icon>-->
                <i class="fa fa-bell fa-2x" aria-hidden="true"></i>
              </v-badge>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="text-right message">
                  !شما 3 تسک جدید دارید
                </el-dropdown-item>
                <el-dropdown-item divided class=" m-0 message" @cli>
                  <div class="row p-2" style="direction: rtl">
                    <div class="col-md-1">
                      <v-avatar size="29">
                        <!--<img src="../../src/assets/img/barang.png" class="" alt="">-->
                        <i class="fa fa-user green p-2 text-light avatar-icon"></i>
                      </v-avatar>
                    </div>
                    <div class="col-md-7 pl-4">عضو جدید اضافه شد</div>
                    <v-badge class="col-md-3 pt-1 mt-1 mr-2 time_seen text-black-50 p-0 m-0" style="height: 20px"
                             color="teal accent-4">3 دقیقه پیش
                    </v-badge>
                    <!--<div class="col-md-3 float-left no-gutters text-black-50 time_seen p-0 m-0 mr-2"></div>-->
                  </div>
                </el-dropdown-item>
                <el-dropdown-item divided class=" m-0 message" @cli>
                  <div class="row p-2" style="direction: rtl">
                    <div class="col-md-1">
                      <v-avatar size="29">
                        <i class="fa fa-times red p-2 text-light avatar-icon"></i>
                      </v-avatar>
                    </div>
                    <div class="col-md-7 pl-4">ارور در صفحه نمایش</div>
                    <v-badge class="col-md-3 pt-1 mt-1 mr-2 time_seen text-black-50 p-0 m-0" style="height: 20px"
                             color="teal accent-4">2 دقیقه پیش
                    </v-badge>
                    <!--<div class="col-md-3 float-left no-gutters text-black-50 time_seen p-0 m-0 mr-2"></div>-->
                  </div>
                </el-dropdown-item>
                <el-dropdown-item divided class=" m-0 message" @cli>
                  <div class="row p-2" style="direction: rtl">
                    <div class="col-md-1">
                      <v-avatar size="29">
                        <i class="fa fa-heart pink lighten-2 p-2 text-light avatar-icon"></i>
                      </v-avatar>
                    </div>
                    <div class="col-md-7 pl-4">لایک ها افزایش یافت</div>
                    <v-badge class="col-md-3 pt-1 mt-2 mr-2 ml-1 time_seen text-black-50 p-0 m-0" style="height: 20px"
                             color="teal accent-4">2 دقیقه پیش
                    </v-badge>
                    <!--<div class="col-md-3 float-left no-gutters text-black-50 time_seen p-0 m-0 mr-2"></div>-->
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="col-md-1 col-1 mt-2 p-0 pt-2 m-0">
            <button class="icon-hover button border-0" @click="search = !search">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div class=" col-md-2 p-3 col-12 d-flex">
          <div class=" p-2 font-weight-bold">مدیریت</div>
          <div class="p-2">
            <button class="icon-hover button border-0" @click="show = !show">
              <i class="fa fa-bars " aria-hidden="true"></i>
            </button>
          </div>
          <div class="p-2">
            <button class="icon-hover button border-0" @click="toggle">
              <i class="fa fa-expand" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      <div v-else class="row header-border">
        <div class="col-md-11">
          <input class="p-3 border-0 w-100" type="text" placeholder="جستجو کنید ..."></input>
        </div>
        <div class="col-md-1">
          <button class="float-left p-3 fa-lg" @click="search = !search"><i class="fa fa-close ml-1"></i></button>
        </div>
      </div>
      <!--</transition>-->
      <transition name="fade" mode="out-in">
        <div v-if="show" class="header-border">
          <b-navbar toggleable="md" type="light" variant="white" class="mx-5">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <!--<b-navbar-brand href="#">NavBar</b-navbar-brand>-->

            <b-collapse is-nav id="nav_collapse">

              <b-navbar-nav class="p-2  ">
                <b-nav-item href="#" class="px-3 item">
                  <i class="fa fa-home ml-1"></i>
                  داشبورد
                </b-nav-item>
                <b-nav-item href="#" class="px-3 item">
                  <i class="fa fa-home ml-1"></i>
                  خانه
                </b-nav-item>
                <b-nav-item href="#" class="px-3 item">
                  <router-link to="/faq" class="nav1">
                    <i class="fa fa-home ml-1"></i>
                    سوالات متداول
                  </router-link>
                </b-nav-item>
                <b-nav-item href="#" class="px-3 item">
                  <i class="fa fa-home ml-1"></i>
                  خانه
                </b-nav-item>
                <b-nav-item href="#" class="px-3 item">
                  <i class="fa fa-home ml-1"></i>
                  داشبورد
                </b-nav-item>
                <b-nav-item href="#" class="px-3 item">
                  <i class="fa fa-home ml-1"></i>
                  خانه
                </b-nav-item>
                <b-nav-item href="#" class="px-3 item">
                  <i class="fa fa-home ml-1"></i>
                  داشبورد
                </b-nav-item>
                <b-nav-item href="#" class="px-3 item">
                  <i class="fa fa-home ml-1"></i>
                  خانه
                </b-nav-item>
                <b-nav-item href="#" class="px-3 item">
                  <i class="fa fa-home ml-1"></i>
                  داشبورد
                </b-nav-item>
                <b-nav-item href="#" class="px-3 item">
                  <i class="fa fa-home ml-1"></i>
                  خانه
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
        <div v-else class="header-border ">
          <div class="container p-0">
            <b-navbar toggleable="md" type="light" variant="white"
                      class="mx-5 container p-0 d-flex justify-content-center">
              <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
              <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="p-2">
                  <b-nav-item href="#" class="px-3 item">
                    <i class="fa fa-home ml-1"></i>
                  </b-nav-item>
                  <b-nav-item href="#" class="px-3 item">
                    <i class="fa fa-home ml-1"></i>
                  </b-nav-item>
                  <b-nav-item href="#" class="px-3 item">
                    <i class="fa fa-home ml-1"></i>
                  </b-nav-item>
                  <b-nav-item href="#" class="px-3 item">
                    <i class="fa fa-home ml-1"></i>
                  </b-nav-item>
                  <b-nav-item href="#" class="px-3 item">
                    <i class="fa fa-home ml-1"></i>
                  </b-nav-item>
                  <b-nav-item href="#" class="px-3 item">
                    <i class="fa fa-home ml-1"></i>
                  </b-nav-item>
                  <b-nav-item href="#" class="px-3 item">
                    <i class="fa fa-home ml-1"></i>
                  </b-nav-item>
                  <b-nav-item href="#" class="px-3 item">
                    <i class="fa fa-home ml-1"></i>
                  </b-nav-item>
                  <b-nav-item href="#" class="px-3 item">
                    <i class="fa fa-home ml-1"></i>
                  </b-nav-item>
                  <b-nav-item href="#" class="px-3 item">
                    <i class="fa fa-home ml-1"></i>
                  </b-nav-item>
                  <b-nav-item href="#" class="px-3 item">
                    <i class="fa fa-home ml-1"></i>
                  </b-nav-item>
                  <b-nav-item href="#" class="px-3 item">
                    <i class="fa fa-home ml-1"></i>
                  </b-nav-item>
                  <b-nav-item href="#" class="px-3 item">
                    <i class="fa fa-home ml-1"></i>
                  </b-nav-item>
                  <b-nav-item href="#" class="px-3 item">
                    <i class="fa fa-home ml-1"></i>
                  </b-nav-item>


                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </div>
        <div class=" header-border bg-light">
          <b-navbar toggleable="md" type="light" variant="light" class=" mx-5 p-1">
            <b-navbar-nav class="align-content mr-3">
              <b-nav-item href="#" active class="">
                <span class="text-color align-content-center p-2">داشبورد</span>
                <span href="#" class="mt-2">/</span>
                <span class="text-color p-2">
              خانه</span>
              </b-nav-item>

            </b-navbar-nav>
          </b-navbar>
        </div>
      </transition>
      <div class="row mx-5 pt-4">
        <div class="col">
          <result_box num="925" class_icon="fa fa-eye fa-2x float-left" title="تعداد بازدید کاربران از سایت"
                      v-bind:value_out="60"
                      colorv="danger"></result_box>
        </div>
        <div class="col">
          <result_box num="125" class_icon="fa fa-users fa-2x float-left" title="تعداد یوزر های فعال"
                      v-bind:value_out="20"
                      colorv="info"></result_box>
        </div>
        <div class="col">
          <result_box num="477215" class_icon="fa fa-envelope fa-2x float-left" title="تعداد ایمیل های دریافت شده"
                      v-bind:value_out="90"
                      colorv="warning"></result_box>
        </div>
        <div class="col">
          <result_box num="899" class_icon="fa fa-shopping-basket fa-2x float-left" title="تعداد محصول اضافه شده"
                      v-bind:value_out="30"
                      colorv="success"></result_box>
        </div>
      </div>
      <div class="mx-5 mt-5 table_border">
        <!--<table1></table1>-->
        <!--<information class="mt-2"></information>-->
        <router-view></router-view>

      </div>


    </div>
    <!--</fullscreen>-->
  </div>
</template>

<script>
  import drop_down from './Utils/dropdown_'
  import table1 from './Utils/table_'
  import result_box from './Utils/box-result'
  import information from '../components/information_tab'

  export default {
    components: {
      drop_down,
      table1,
      result_box,
      information
    },
    methods: {
      toggle() {
        this.$fullscreen.toggle(this.$el.querySelector('.example'), {
          wrap: true,
          callback: this.fullscreenChange,
          background: "white",
        })
      },
      fullscreenChange(fullscreen) {
        this.fullscreen = fullscreen
      }
    },
    data() {
      return {
        drawer: true,
        right: null,
        show: true,
        fullscreen: false,
        search: true
      }
    },
  }
</script>
<style scoped>
  .header-border {
    border-bottom: solid 1px #dddddd;
    vertical-align: center;
  }

  .text-color {
    color: #898989;
  }

  .item {
    font-size: 16px !important;
  }

  .icon-hover {
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
  }

  .icon-hover:hover {
    opacity: 0.6;
    background-color: #e2e2e2;
  }

  button:focus {
    outline: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }

  .table_border {
    border: solid 1px #afafaf;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  input:focus {
    outline: 0;
  }

  .expand-transition {
    transition: all .3s ease;
    height: 30px;
    padding: 10px;
    background-color: #eee;
    overflow: hidden;
  }

  /* .expand-enter defines the starting state for entering */
  /* .expand-leave defines the ending state for leaving */
  .expand-enter, .expand-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
  }

  .message {
    font-family: iran;
  }

  .time_seen {
    /*border-radius: 5px;*/
    font-size: 10px;
    background-color: #efefef;
  }

  .avatar-icon {
    border-radius: 40px;
  }

  .message div {
    color: #9c9c9c;
  }

  .badge1:hover {
    color: #00BFA5;
  }
  .nav1{
    color: #8c8c8c;
  }
  .nav1:hover{
    color: #4e4e4e;
  }
</style>
