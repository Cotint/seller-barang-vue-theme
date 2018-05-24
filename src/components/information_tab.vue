<template>
  <!--tab_father mx-5-->
  <div class="bg-white mt-2">
    <v-tabs v-model="tabs" color="white" dark slider-color="deep-purple darken-1" class="">
      <v-tab class="px-3 py-2">اطلاعات سفارش</v-tab>
      <v-tab class="px-3 py-2">محتویات سفارش</v-tab>
      <v-tab-item class="row mt-2 mr-1">
        <div class="container-fluid div_border"></div>
        <!--<v-card flat v-if="result2.length === 14" v-for="(item, key) in result2" class="border-0 col-lg-3">-->
        <!--<form_info :title="item.title" :input="item.input" :id="item.id" class="p-2" :form_class="item.form_height"-->
        <!--@interface="handleFcAfterDateBack">-->
        <!--</form_info>-->
        <!--</v-card>-->

        <!--<v-card flat v-if="result2.length === 14" class="col-lg-12 w-100 border-0 mb-5" v-show="result2.length === 14">-->
        <!--<b-form style="height: 150px;">-->
        <!--<b-form-group id="exampleInputGroup2" label="توضیحات مختصر" label-for="15" class="p-2 mb-5">-->
        <!--<textarea rows="5" id="15" type="text" required disabled :value="explanation"-->
        <!--class="bg-light p-3 w-100 col-md-12"></textarea>-->
        <!--</b-form-group>-->
        <!--</b-form>-->
        <!--</v-card>-->
        <!--<div class="col-12 d-flex justify-content-center load-img" v-else>-->
        <!--&lt;!&ndash;<v-progress-circular indeterminate color="primary"></v-progress-circular>&ndash;&gt;-->
        <!--<div class="col-1"></div>-->
        <!--<div class="col-1 pb-5 pt-2">-->
        <!--<img src="../assets/img/progress2.gif">-->
        <!--</div>-->
        <!--<div class="col-1"></div>-->
        <!--</div>-->

        <v-card flat v-for="(item, key) in items" :class="item.form_father">
          <form_info :title="item.title" :input="item.input" :id="item.id" class="p-1" :form_class="item.form_height"
                     @interface="handleFcAfterDateBack">
          </form_info>
        </v-card>
        <v-card flat class="border-0 col-lg-3 pl-5">
          <ASelect class="" header1="انتخاب گروه" input1="نمایش گروه" input2="کفش" input3="لباس"></ASelect>
        </v-card>
      </v-tab-item>
      <v-tab-item class="row mt-2 mr-1">
        <div class="container-fluid div_border"></div>
        <div>
          <table1></table1>
        </div>
        <div class="col-md-6">
          <table2></table2>
        </div>
      </v-tab-item>
    </v-tabs>
    <!--<el-tabs tab-position="top" v-model="activeName" @tab-click="handleClick">-->
    <!--<el-tab-pane label="User" name="first">User</el-tab-pane>-->
    <!--<el-tab-pane label="Config" name="second">Config</el-tab-pane>-->
    <!--<el-tab-pane label="Role" name="third">Role</el-tab-pane>-->
    <!--<el-tab-pane label="Task" name="fourth">Task</el-tab-pane>-->
    <!--</el-tabs>-->
  </div>
</template>

<script>
  import form_info from '../components/Utils/form_info'
  import ASelect from '../components/Utils/ASelect'
  import table2 from '../components/Utils/table_detail'
  import table1 from '../components/Utils/table_information'

  export default {
    components: {
      form_info,
      ASelect,
      table1,
      table2
    },
    methods: {
      next() {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0).toString()
      },
      handleFcAfterDateBack(event) {
        console.log('data after child handle: ', event) // get the data after child dealing
        // changedInput: event;
        var headers = {'Content-type': 'application/json'}
        // axios.put(`/v1/shops/3`,
        //     {name: event}
        //   ,headers
        // )
        //   .then(response => {
        //     console.log("I'm in axios.put",);
        //     // console.log("result?!",result2.name);
        //   })
        if (event.currentTarget.id == 1) {
          console.log("I'm name with id:", event.currentTarget.value);
          axios.put(`/v1/shops/3`,
            {name: event.currentTarget.value}
            , headers
          )
          // _this.result2.$set(1, input = event.target.value)
          // this.result2.push({
          //   title:'نام فروشگاه' , input:event.target.value, id:'1'
          // })
        }
        if (event.currentTarget.id == 3) {
          console.log("I'm date:", event.currentTarget.id);
          axios.put(`/v1/shops/3`,
            {start_date: event.currentTarget.value}
            , headers
          )
        }
      }
    },
    created() {
      const _this = this;
      var headers2 = {'Content-type': 'application/json', 'Access-Control-Allow-Origin': '*'}
      console.log("it is result2: ", _this.result2);
      window.axios.get(`/v1/shops/3`, headers2)
        .then(function (result) {
          // _this.result2 = result.data.data;
          _this.result2.push({
            title: 'نام فروشگاه',
            input: result.data.data.name,
            id: '1',
            width_form: 'border-0 col-lg-3',
            form_height: 'bg-light p-3'
          })
          _this.result2.push({
            title: 'نام و نام خانوادگی',
            input: 'نام و نام خانوادگی',
            id: '2',
            width_form: 'border-0 col-lg-3',
            form_height: 'bg-light p-3'
          })
          _this.result2.push({
            title: 'تاریخ ثبت نام',
            input: result.data.data.start_date,
            id: '3',
            width_form: 'border-0 col-lg-3',
            form_height: 'bg-light p-3'
          })
          _this.result2.push({
            title: 'نوع',
            input: result.data.data.type,
            id: '4',
            width_form: 'border-0 col-lg-3',
            form_height: 'bg-light p-3'
          })
          _this.result2.push({
            title: 'کد ملی',
            input: result.data.data.user.national_id,
            id: '5',
            width_form: 'border-0 col-lg-3',
            form_height: 'bg-light p-3'
          })
          _this.result2.push({
            title: 'تلفن',
            input: result.data.data.user.phone,
            width_form: 'border-0 col-lg-3',
            form_height: 'bg-light p-3'
          })
          _this.result2.push({
            title: 'آدرس سایت',
            input: result.data.data.website_url,
            width_form: 'border-0 col-lg-3',
            form_height: 'bg-light p-3'
          })
          _this.result2.push({
            title: 'جنسیت', input: result.data.data.gender, width_form: 'border-0 col-lg-3', form_height: 'bg-light p-3'
          })
          _this.result2.push({
            title: 'واحد پولی',
            input: result.data.data.bank,
            width_form: 'border-0 col-lg-3',
            form_height: 'bg-light p-3'
          })
          _this.result2.push({
            title: 'تاریخ تولد',
            input: result.data.data.start_date,
            width_form: 'border-0 col-lg-3',
            form_height: 'bg-light p-3'
          })
          _this.result2.push({
            title: 'شماره شناسنامه',
            input: result.data.data.national_id,
            width_form: 'border-0 col-lg-3',
            form_height: 'bg-light p-3'
          })
          _this.result2.push({
            title: 'کد فروشنده',
            input: result.data.data.reseller_code,
            width_form: 'border-0 col-lg-3 ',
            form_height: 'bg-light p-3'
          })
          _this.result2.push({
            title: 'فعال', input: 'هست', width_form: 'border-0 col-lg-3', form_height: 'bg-light p-3'
          })
          _this.result2.push({
            title: 'عضویت در خبرنامه', input: "ندارد", width_form: 'border-0 col-lg-3', form_height: ' bg-light p-3'
          })
          _this.explanation = result.data.data.description

          // console.log("hiiii",result.data);
        })
    },

    data() {
      return {
        active: null,
        result2: [],
        items: [
          {title: 'نام کاربر', id_title: '1', form_height: 'bg-light p-3', form_father: 'border-0 col-lg-4 pl-5'},
          {title: 'شماره تلفن', id_title: '1', form_height: 'bg-light p-3', form_father: 'border-0 col-lg-4 pl-5'},
          {
            title: 'نام و نام خانوادگی',
            id_title: '1',
            form_height: 'bg-light p-3',
            form_father: 'border-0 col-lg-4 pl-5'
          },
          {title: 'آدرس', id_title: '1', form_height: 'bg-light p-3', form_father: 'border-0 col-lg-12 pl-5'},
          {title: 'نام سفارش', id_title: '1', form_height: 'bg-light p-3', form_father: 'border-0 col-lg-12 pl-5'},
          {title: 'توضیحات کاربر', id_title: '2', form_height: 'bg-light p-3', form_father: 'border-0 col-lg-12 pl-5'},
          {
            title: 'کد سفارش',
            input: 'sdd23',
            id_title: '3',
            id_input: '3',
            form_height: 'bg-light p-3',
            form_father: 'border-0 col-lg-3 pl-5'
          },
          {
            title: 'تاریخ ثبت نام',
            input: 'sdd23',
            id_title: '4',
            id_input: '4',
            form_height: 'bg-light p-3',
            form_father: 'border-0 col-lg-3 pl-5'
          },
          {
            title: 'نوع',
            input: 'sdd23',
            id_title: '5',
            id_input: '5',
            form_height: 'bg-light p-3',
            form_father: 'border-0 col-lg-3 pl-5'
          },
          {
            title: 'کد ملی',
            input: 'sdd23',
            id_title: '6',
            id_input: '6',
            form_height: 'bg-light p-3',
            form_father: 'border-0 col-lg-3 pl-5'
          },
          {
            title: 'تلفن',
            input: 'sdd23',
            id_title: '7',
            id_input: '7',
            form_height: 'bg-light p-3',
            form_father: 'border-0 col-lg-3 pl-5'
          },
          {
            title: 'آدرس سایت',
            input: 'sdd23',
            id_title: '8',
            id_input: '8',
            form_height: 'bg-light p-3',
            form_father: 'border-0 col-lg-3 pl-5'
          },
          {
            title: 'نام فروشگاه',
            input: 'sdd23',
            id_title: '9',
            id_input: '9',
            form_height: 'bg-light p-3',
            form_father: 'border-0 col-lg-3 pl-5'
          },
          {
            title: 'نام فروشگاه',
            input: 'sdd23',
            id_title: '10',
            id_input: '10',
            form_height: 'bg-light p-3',
            form_father: 'border-0 col-lg-3 pl-5'
          },
          {
            title: 'نام فروشگاه',
            input: 'sdd23',
            id_title: '10',
            id_input: '10',
            form_height: 'bg-light p-3',
            form_father: 'border-0 col-lg-3 pl-5'
          },
        ],
        activeName: 'first',
        parentValue: 'hello',
        changedInput: '',
        explanation: ''
      }
    },

    // created() {
    //   const _this = this;
    //   window.axios.get("/v1/shops/3").then(function (result) {
    //
    //       // this.info_forms.id = result.data.data.id;
    //       // this.info_forms = result.data;
    //       console.log("salaaaaaaaaaaaaam",result.data.data.id)
    //       // console.log("hiiiiii",this.info_forms)
    //     // this.forms = result.data.data;
    //
    //   })
    //
    // },
  }
</script>

<style scoped>
  .tabs__bar {
    border-bottom: 2px !important;
  }

  .tabs__wrapper {
    border-bottom: 2px !important;
  }

  /*.tabs__items{*/
  /*border-top: solid 1px gray!important;*/
  /*}*/

  .tab_father {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .div_border {
    /*position: relative;*/
    margin-top: -10px;
    height: 3px;
    background-color: #a5a5a5;
    /*z-index: -10;*/
    /*margin-bottom: 6px;*/
    /*margin-left: -1%;*/
    /*border-bottom: solid 1px #acacac;*/
  }

  .tabs__div, .tabs__item {
    margin-right: 2px;
  }

  @media (max-width: 767px) {
    v-tabs {
      direction: ltr !important;
    }
  }

  textarea {
    border: 1px solid #ced4da;
  }

  .load-img {
    /*width: 50px;*/
    /*height: auto;*/
    resize: none;
  }

  .salam {
    border-top: solid 2px red;
    background-color: #1c7430;
  }
</style>
