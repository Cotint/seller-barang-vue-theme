<template>
  <div class="">
    <div class="row d-flex container-fluid justify-content-between mt-2 mx-1">
      <div class="col-md-2 border border-dark group1 pt-4 px-1">
        <div class="">کد پیگیری سفارش:</div>
        <div>ashdkj45vx67</div>
      </div>
      <div class="col-md-3 row">
        <v-avatar class="col p-0 mt-2" size="80">
          <img src="../../src/assets/img/barang.png" class="float-left avatarImg" alt="avatar">
        </v-avatar>
        <div class="col p-0 mt-4 barang">
          <div>بارنگ فود</div>
          <div>فاکتور خرید</div>
        </div>
      </div>
      <div class="col-md-2 border border-dark group1 pt-4 px-1">
        <div class="">تاریخ ثبت سفارش:</div>
        <div>11:56 24/12/1396</div>
      </div>
    </div>
    <hr class="mx-2">
    <div class=" mx-5">
      <div class="d-flex justify-content-center align-middle title1">
        <div class="col-md-2 color font-weight-bold my-2">اطلاعات سفارش</div>
      </div>
      <shop-list :items="this.items"></shop-list>
    </div>

    <div class="mx-5 mt-4">
      <div class="d-flex justify-content-center align-middle title1">
        <div class="col-md-2 color font-weight-bold my-2">محتویات سفارش</div>
      </div>
      <shop-list :items="this.foods"></shop-list>
    </div>
    <div class="mx-5 mt-4">
      <div class="d-flex justify-content-center align-middle title1">
        <div class="col-md-2 color font-weight-bold my-2">توضیحات کاربر</div>
      </div>
      <shop-list :items="this.comments"></shop-list>
    </div>
    <!--<b-table :fields="fields2">-->
      <!--<template slot="slot1" slot-scope="row">-->
        <!--<b-table-->
          <!--:responsive="true"-->
          <!--stacked="md"-->
          <!--:striped="false"-->
          <!--:outlined="false"-->
          <!--:bordered="false"-->
          <!--:hover="true"-->
          <!--:fixed="true"-->
          <!--:items="values"-->
          <!--:fields="fields"-->
          <!--:current-page="currentPage"-->
          <!--per-page="10"-->
          <!--:filter="filter"-->
          <!--@filtered="onFiltered"-->
          <!--thead-class="head_class">-->
        <!--</b-table>-->

      <!--</template>-->
      <!--<template slot="slot2" slot-scope="row">-->
        <!--<b-table-->
          <!--:responsive="true"-->
          <!--stacked="md"-->
          <!--:striped="false"-->
          <!--:outlined="false"-->
          <!--:bordered="false"-->
          <!--:hover="true"-->
          <!--:fixed="true"-->
          <!--:items="values"-->
          <!--:fields="fields"-->
          <!--:current-page="currentPage"-->
          <!--per-page="10"-->
          <!--:filter="filter"-->
          <!--@filtered="onFiltered"-->
          <!--thead-class="head_class">-->
        <!--</b-table>-->

      <!--</template>-->
      <!--<template slot="slot3" slot-scope="row">-->
        <!--<b-table-->
          <!--:responsive="true"-->
          <!--stacked="md"-->
          <!--:striped="false"-->
          <!--:outlined="false"-->
          <!--:bordered="false"-->
          <!--:hover="true"-->
          <!--:fixed="true"-->
          <!--:items="values"-->
          <!--:fields="fields"-->
          <!--:current-page="currentPage"-->
          <!--per-page="10"-->
          <!--:filter="filter"-->
          <!--@filtered="onFiltered"-->
          <!--thead-class="head_class">-->
        <!--</b-table>-->

      <!--</template>-->
    <!--</b-table>-->
    <div class="col-md-4 mt-2">
      <b-table
        :responsive="true"
        stacked="md"
        :striped="false"
        :outlined="false"
        :bordered="false"
        :hover="true"
        :fixed="true"
        :items="values"
        :fields="fields"
        :current-page="currentPage"
        per-page="10"
        :filter="filter"
        @filtered="onFiltered"
        thead-class="head_class">
      </b-table>
    </div>
  </div>
</template>

<script>
  import shopList from './Utils/shopList'

  const vals = [
    {name: 'لوبیا قرمز آب پز', weight: 30},
    {name: 'لوبیا قرمز آب پز', weight: 30},
    {name: 'لوبیا قرمز آب پز', weight: 30},
    {name: 'لوبیا قرمز آب پز', weight: 30},
    {name: 'لوبیا قرمز آب پز', weight: 30},
  ]
  export default {
    name: "factor1",
    components: {
      shopList
    },
    data() {
      return {
        items: [
          {name: 'نام و نام خانوادگی:', value: 'فرناز مالکی نژاد', class: 'col-6 px-5'},
          {name: 'شماره تلفن:', value: '02177893622', class: 'col-6 px-5'},
          {name: 'قیمت:', value: '16,500', class: 'col-6 px-5'},
          {name: 'کد سفارش:', value: '1', class: 'col-6 px-5'},
          {name: 'نوع پرداخت:', value: 'نقدی', class: 'col-6 px-5'},
          {name: 'نوع ارسال:', value: 'تحویل در محل رستوران', class: 'col-6 px-5'},
          {name: 'هزینه ارسال:', value: '200,000', class: 'col-6 px-5'},
          {name: 'تاریخ رسیدگی سفارش:', value: '12:56 1397/12/03', class: 'col-6 px-5'},
          {name: 'آدرس:', value: 'خیابان خواجه عبدالله انصاری، کوچه 14، پلاک 15، واحد 5', class: 'col-12 px-5'},
        ],
        foods: [
          {name: 'وعده:', value: 'شام و بعد از شام', class: 'col-3 mr-3'},
          {name: 'تعداد:', value: '1', class: 'col-3'},
          {name: 'انرژی:', value: '237.1 kcal', class: 'col-3'},
          {name: 'پروتئین:', value: '9.97 gr', class: 'col-3'},
          {name: 'ظرف:', value: 'بدون سالاد و بعد از شام', class: 'col-3 mr-3'},
          {name: 'نوع:', value: 'ظرف', class: 'col-3'},
          {name: 'کربوهیدرات:', value: '237.1 kcal', class: 'col-3'},
          {name: 'چربی:', value: '9.97 gr', class: 'col-3'},
        ],
        comments: [{
          name: 'هدف اصلی صفحه آرا در نهایت نمایش و ترکیب عناصر در صفحه است به نحوی که مطالب بطور مستقیم و در جای مناسب خود قرار گیرند و درعین آسانی خوانش متن ها و تصاویر، مخاطب به دیدن و خواندن بیشتر ترغیب شود. از این رو طراحی یک صفحه نیاز به شناخت متن، شناخت مخاطب و همچنین رعایت تناسبات ترکیب بندی یک صفحه از کتاب یا مجله و روزنامه و...دارد.'
          , class: 'col-md-12 mr-3'
        }
        ],
        fields: [
          {key: 'name', label: 'نام محصول(تعداد)', sortable: false, class: ' text-center p-3'},
          {key: 'weight', label: 'وزن واحد', sortable: false, class: ' text-center p-3'},
        ],
        fields2: [
          {key: 'slot1', sortable: false, class: ' text-center p-3'},
          {key: 'slot2', sortable: false, class: ' text-center p-3'},
          {key: 'slot3', sortable: false, class: ' text-center p-3'},
        ],
        values: vals,
      }
    },
    mounted() {
      window.print();
    }
  }
</script>

<style scoped>
  .group1 {
    border-radius: 35px;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
  }

  .barang {
    font-size: 20px;
    vertical-align: middle;
  }

  .avatarImg {
    text-align: left;
  }

  @media print {
    @page {
      margin: 0;
    }

    body {
      margin: 1.6cm;
    }
  }

  .title1 {
    font-size: 18px;
  }

  .color {
    color: #8e8e8e;
  }

</style>
