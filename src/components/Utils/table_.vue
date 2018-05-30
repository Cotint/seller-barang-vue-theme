<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <div class="row d-flex justify-content-between">
      <div class="col-md-9 d-flex">
        <div class="col-md-1 pt-4 mt-1 p-0">
          <i class="fa fa-bars ml-1" aria-hidden="true"></i>
          سفارش ها
        </div>
        <div class="col-md-7 mt-1 p-0 mx-2">
          <!--<b-form-group horizontal class="mb-0">-->
          <b-input-group class="col-md-3 px-0">
            <b-form-input v-model="filter" placeholder="جستجو کنید"/>
          </b-input-group>
          <!--</b-form-group>-->
        </div>
      </div>
      <b-col md="2" class="p-3 float-left">
        <div class="">
          <!--<div class="col-md-4"></div>-->
          <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0 "/>
        </div>
      </b-col>
    </div>

    <b-table
      :responsive="true"
      stacked="md"
      :striped="true"
      :outlined="true"
      :bordered="false"
      :hover="true"
      :fixed="false"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      @filtered="onFiltered"
      thead-class="head_class">
      <template slot="status" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" @click.stop="info(row.item, row.index, $event.target)"
                  :class="statuses[row.item.status].color" class="h-75">
          {{statuses[row.item.status].text}}
        </b-button>
      </template>
      <template slot="payment" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" @click.stop="info2(row.item, row.index, $event.target)"
                  :class="state_pay[row.item.payment].color" class="h-75">
          {{state_pay[row.item.payment].text}}
        </b-button>
      </template>

      <template slot="edit" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <router-link to="/information" class="">
          <button class="p-1">
            <i class="fa fa-pencil green darken-1 p-1 icon_fa" aria-hidden="true"></i>
          </button>
        </router-link>
        <button class="p-1">
          <i class="fa fa-trash-o blue-grey lighten-1 p-1 icon_fa" aria-hidden="true"></i>
        </button>
        <button class="p-1">
          <i class="fa fa-print blue darken-3 p-1 icon_fa" aria-hidden="true"></i>
        </button>
        <button class="p-1">
          <i class="fa fa-print light-blue accent-2 p-1 icon_fa" aria-hidden="true"></i>
        </button>
      </template>


    </b-table>
    <!--<b-row>-->
    <!--<b-col md="6" class="my-1">-->
    <!--<b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0"/>-->
    <!--</b-col>-->
    <!--</b-row>-->

    <!-- Info modal -->
    <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
      <pre>{{ modalInfo.content }}</pre>
    </b-modal>

  </b-container>
</template>

<script>
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
    {
      isActive: true,
      title1: 'f.maleki@cotint.ir',
      id1: '3',
      code1: '50',
      code2: '55986',
      code3: '12/2/97',
      date1: '900 ',
      status: '0',
      payment: '1'
    },
    {
      isActive: true,
      title1: 'f.maleki@cotint.ir',
      id1: '4',
      code1: '50',
      code2: '55986',
      code3: '12/2/97',
      date1: '500 ',
      status: '1',
      payment: '1'
    },
    {
      isActive: true,
      title1: 'f.maleki@cotint.ir',
      id1: '5',
      code1: '50',
      code2: '55986',
      code3: '12/2/97',
      date1: '500 ',
      status: '1',
      payment: '1'
    },
    {
      isActive: true,
      title1: 'f.maleki@cotint.ir',
      id1: '6',
      code1: '50',
      code2: '55986',
      code3: '12/2/97',
      date1: '500 ',
      status: '1',
      payment: '1'
    },
    {
      isActive: true,
      title1: 'f.maleki@cotint.ir',
      id1: '7',
      code1: '50',
      code2: '55986',
      code3: '12/2/97',
      date1: '500 ',
      status: '1',
      payment: '1'
    },
    {
      isActive: true,
      title1: 'f.maleki@cotint.ir',
      id1: '8',
      code1: '50',
      code2: '55986',
      code3: '12/2/97',
      date1: '500 ',
      status: '1',
      payment: '1'
    },
    {
      isActive: true,
      title1: 'f.maleki@cotint.ir',
      id1: '9',
      code1: '50',
      code2: '55986',
      code3: '12/2/97',
      date1: '500 ',
      status: '0',
      payment: '1'
    },
    {
      isActive: true,
      title1: 'f.maleki@cotint.ir',
      id1: '10',
      code1: '50',
      code2: '55986',
      code3: '12/2/97',
      date1: '500 ',
      status: '0',
      payment: '1'
    }, {
      isActive: true,
      title1: 'f.maleki@cotint.ir',
      id1: '11',
      code1: '50',
      code2: '55986',
      code3: '12/2/97',
      date1: '500 ',
      status: '1',
      payment: '1'
    },


  ]
  export default {
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
            key: 'id1', label: 'ردیف', sortable: false, class: 'text-center align-middle'
          },
          title1: {
            key: 'title1', label: 'نام کاربری', sortable: false, class: 'text-center align-middle'
          },
          code1: {
            key: 'code1', label: 'تعداد', sortable: false, class: 'text-center align-middle'
          },
          code2: {
            key: 'code2', label: 'کد پیگیری سفارش', sortable: false, class: 'text-center align-middle'
          },
          code3: {
            key: 'code3', label: 'تاریخ ثبت', sortable: false, class: 'text-center align-middle'
          },
          date1: {
            key: 'date1', label: 'قیمت (تومان)', sortable: false, class: 'text-center align-middle'
          },
          // date2: {
          //   key: 'date2', label: 'تاریخ ثبت سفارش', sortable: false, class: ' text-center p-3'
          // },
          status: {
            key: 'status', label: 'وضعیت سفارش', sortable: false, class: ' text-center align-middle'
          },
          payment: {
            key: 'payment', label: 'وضعیت پرداخت', sortable: false, class: ' text-center align-middle'
          },
          edit: {
            key: 'edit', label: 'تغییرات', sortable: false, class: ' text-center align-middle'
          },
        },
        currentPage: 1,
        perPage: 5,
        totalRows: items.length,
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
      }
    }
  }
</script>
<style>
  .head_class {
    /*background-color: #540883;*/
    /*border: solid 1px white;*/
    /*color: white;*/
    /*padding: 10% !important;*/
    font-size: 18px;
    font-weight: bold !important;
  }

  .icon_fa {
    border-radius: 5px;
    color: white;
  }

  table.table thead th {
    font-weight: bold !important;
    font-size: 14px;
    padding: 2% !important;
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
