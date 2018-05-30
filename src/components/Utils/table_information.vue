<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <div class="row d-flex justify-content-between">
      <b-col md="4"></b-col>
      <b-col md="2" class="p-3 float-left">
        <b-pagination v-on:change="foo" :total-rows="totalRows" :per-page="perPage" v-model="currentPage"
                      class="my-0 "/>
      </b-col>
      <b-col md="4">
        <router-link to="/" class="">
          <v-btn class="float-left p-0 text-dark grey lighten-4"><i class="fa fa-arrow-left ml-1"></i>بازگشت</v-btn>
        </router-link>
        <v-btn class="float-left p-0 light-green darken-1 text-white"><i class="fa fa-floppy-o ml-1"></i>ذخیره</v-btn>
      </b-col>
    </div>

    <b-table
      :responsive="true"
      stacked="md"
      :striped="true"
      :outlined="true"
      :bordered="true"
      :hover="true"
      :fixed="true"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      @filtered="onFiltered"
      thead-class="head_class_father">

      <template slot="HEAD_id1" slot-scope="data">
        <strong class="head_class_father"><i class="fa fa-shopping-bag ml-2 "></i>{{data.label}}</strong>
      </template>
      <template slot="HEAD_title1" slot-scope="data">
        <div class="head_class_father"><i class="fa fa-list ml-2"></i>{{data.label}}</div>
      </template>
      <template slot="HEAD_code1" slot-scope="data">
        <div class="head_class_father"><i class="fa fa-shopping-basket ml-2"></i>{{data.label}}</div>
      </template>
      <template slot="HEAD_code2" slot-scope="data">
        <div class="head_class_father"><i class="fa fa-sticky-note-o ml-2"></i>{{data.label}}</div>
      </template>
      <template slot="HEAD_code3" slot-scope="data" class="p-0">
        <div class="head_class_father"><i class="fa fa-money ml-2"></i>{{data.label}}</div>
      </template>

      <!--<template slot="HEAD_date2" slot-scope="data">-->
      <!--<em>{{data.label}}<i class="fa fa-close red"></i></em>-->
      <!--</template>-->
      <!--<template slot="HEAD_status" slot-scope="data">-->
      <!--<em>{{data.label}}<i class="fa fa-close red"></i></em>-->
      <!--</template>-->
      <!--<template slot="HEAD_payment" slot-scope="data">-->
      <!--<em>{{data.label}}<i class="fa fa-close red"></i></em>-->
      <!--</template>-->
      <!--<template slot="HEAD_edit" slot-scope="data">-->
      <!--<em>{{data.label}}<i class="fa fa-close red"></i></em>-->
      <!--</template>-->
    </b-table>
    <div>
      <table_detail :id_father=this.currentPage></table_detail>
    </div>

  </b-container>
</template>

<script>
  import table_detail from './table_detail'

  const items = [
    {
      isActive: true,
      title1: 'f.maleki@cotint.ir',
      id1: '1',
      code1: '50',
      code2: '55986',
      code3: '12/2/97',
      date1: '500 ',
      status: '0',
      payment: '0'
    }, {
      isActive: true,
      title1: 'f.maleki@cotint.ir',
      id1: '2',
      code1: '50',
      code2: '55986',
      code3: '12/2/97',
      date1: '600 ',
      status: '1',
      payment: '0'
    },
    {
      isActive: true,
      title1: 'f.maleki@cotint.ir',
      id1: '2',
      code1: '50',
      code2: '55986',
      code3: '12/2/97',
      date1: '600 ',
      status: '1',
      payment: '0'
    },
  ]

  export default {
    components: {
      table_detail
    },
    data() {
      return {
        state: 0,
        statuses: [
          {
            text: 'ارسال شده',
            color: 'light-green darken-1 border-0',
          },
          {
            text: 'ارسال نشده',
            color: 'red accent-2 border-0',
          }
        ],
        state_pay: [
          {
            text: 'پرداخت شده',
            color: 'light-green darken-1 border-0',
          },
          {
            text: 'پرداخت نشده',
            color: 'red accent-2 border-0',
          }
        ],
        items: items,
        fields: {
          id1: {
            key: 'id1', label: 'وعده', sortable: false, class: 'text-center align-middle'
          },
          title1: {
            key: 'title1', label: 'ظرف', sortable: false, class: 'text-center align-middle'
          },
          code1: {
            key: 'code1', label: 'نوع', sortable: false, class: 'text-center align-middle'
          },
          code2: {
            key: 'code2', label: 'نام سفارش', sortable: false, class: 'text-center align-middle'
          },
          code3: {
            key: 'code3', label: 'قیمت (ریال)', sortable: false, class: 'text-center align-middle'
          },
          date1: {
            key: 'date1', label: 'تعداد', sortable: false, class: 'text-center align-middle'
          },
          date2: {
            key: 'date2', label: 'انرژی', sortable: false, class: ' text-center align-middle'
          },
          status: {
            key: 'status', label: 'پروتئین', sortable: false, class: ' text-center align-middle'
          },
          payment: {
            key: 'payment', label: 'کربوهیدرات', sortable: false, class: ' text-center align-middle'
          },
          edit: {
            key: 'edit', label: 'چربی', sortable: false, class: ' text-center align-middle'
          },
        },
        currentPage: 1,
        // currentPage_detail: 1,
        perPage: 1,
        // perPage_detail: 5,
        totalRows: items.length,
        // totalRows_detail: items_detail.length,
        pageOptions: [5, 10, 15],
        sortBy: null,
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        modalInfo: {title: '', content: ''}
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return {text: f.label, value: f.key}
          })
      }
    },
    methods: {
      info(item, index, button) {
        if (item.status === "0") {
          item.status = "1"
          console.log(button.data("salam"))
        }
        else
          item.status = "0"

        // this.modalInfo.title = `Row index: ${index}`
        // this.modalInfo.content = JSON.stringify(item, null, 2)
        // this.$root.$emit('bv::show::modal', 'modalInfo', button)
      },
      info2(item, index, button) {
        if (item.payment === "0") {
          item.payment = "1"
        }
        else
          item.payment = "0"

        // this.modalInfo.title = `Row index: ${index}`
        // this.modalInfo.content = JSON.stringify(item, null, 2)
        // this.$root.$emit('bv::show::modal', 'modalInfo', button)
      },
      resetModal() {
        this.modalInfo.title = ''
        this.modalInfo.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      change: function () {
        if (this.state == "0") this.state = "1";
        else this.state = "0";
      },
      foo: function () {
        console.log("pagination changed", this.currentPage)
      }
    }
  }
</script>
<style>
  .head_class_father {
    background-color: #26A69A;
    color: white;
    /*border: solid 1px white;*/
    /*color: white;*/
    /*padding: 10% !important;*/
    font-size: 15px;
    font-weight: bold !important;
  }

  .icon_fa {
    border-radius: 5px;
    color: white;
  }

  table.table thead th {
    font-weight: bold !important;
    font-size: 14px;
    /*padding: 1% !important;*/
  }

  .item1 {
    background-color: #005cbf !important;
  }

  table.b-table > thead > tr > th.sorting, table.b-table > tfoot > tr > th.sorting {
    /*padding: 1% !important;*/
  }

  table.table tbody td:first-child, table.table tbody td:not(:first-child), table.table tbody th:first-child, table.table tbody th:not(:first-child), table.table thead td:first-child, table.table thead td:not(:first-child), table.table thead th:first-child, table.table thead th:not(:first-child) {
    /*padding-top: 14px !important;*/
  }

  table.b-table > thead > tr > th.sorting::before, table.b-table > thead > tr > th.sorting::after, table.b-table > tfoot > tr > th.sorting::before, table.b-table > tfoot > tr > th.sorting::after {
    opacity: 1.4;
    /*padding: 0px;*/
    /*margin: 0px;*/
    /*left: 10px;*/
  }

  table.b-table > thead > tr > th.sorting::after, table.b-table > tfoot > tr > th.sorting::after {
    /*right: 50px;*/
    /*padding-right: 50%;*/
    /*padding-bottom: 10%;*/
  }

  table.b-table > thead > tr > th.sorting::before, table.b-table > thead > tr > th.sorting::after, table.b-table > tfoot > tr > th.sorting::before, table.b-table > tfoot > tr > th.sorting::after {
    /*padding: 20%;*/
    padding-right: 77%;
    padding-bottom: 10%;
  }

  .page-item.active .page-link {
    background-color: #26A69A;
  }

  .page-link {
    color: #24056c;
  }

  b-form-input:focus {
    outline: solid 1px red;
  }
</style>
