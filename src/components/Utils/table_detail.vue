<template>
<div class="row">
  <div class="col-md-6">
    <b-table
      :responsive="true"
      stacked="md"
      :striped="false"
      :outlined="false"
      :bordered="false"
      :hover="true"
      :fixed="true"
      :items="items3"
      :fields="fields"
      :current-page="currentPage"
      per-page="10"
      :filter="filter"
      @filtered="onFiltered"
      thead-class="head_class">
    </b-table>
        <!-- Info modal -->
    <!--<b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>-->
    <!--<pre>{{ modalInfo.content }}</pre>-->
    <!--</b-modal>-->
  </div>
  <div class="col-md-6">
    <b-table
      :responsive="true"
      stacked="md"
      :striped="false"
      :outlined="false"
      :bordered="false"
      :hover="true"
      :fixed="true"
      :items="items3"
      :fields="fields"
      :current-page="currentPage"
      per-page="3"
      :filter="filter"
      @filtered="onFiltered"
      thead-class="head_class">
    </b-table>
    <!-- Info modal -->
    <!--<b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>-->
    <!--<pre>{{ modalInfo.content }}</pre>-->
    <!--</b-modal>-->
  </div>
</div>
</template>

<script>
  const items = [
      {id: '1', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
      {id: '2', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
      {id: '3', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
      {id: '4', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
      {id: '5', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
      {id: '6', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
      {id: '7', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
      {id: '8', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
      {id: '9', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
      {id: '10', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
      {id: '11', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
      {id: '12', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
      {id: '13', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
      {id: '14', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
      {id: '15', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
      {id: '16', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
      ]
  const items2= [
    {id: '1', kind: 'پروتئین سالم', name: 'کباب لقمه', number: 3, weight: 50},
    {id: '2', kind: 'جوجه سالم', name: 'کباب لقمه', number: 3, weight: 50},
  ]
  export default {
    props: ['id_father'],
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
        items3:items,
        fields: {
          id: {
            key: 'id', label: '#', sortable: false, class: ' text-center p-3'
          },
          kind: {
            key: 'kind', label: 'دسته', sortable: false, class: ' text-center p-3'
          },
          name: {
            key: 'name', label: 'نام محصول', sortable: false, class: ' text-center p-3'
          },
          number: {
            key: 'number', label: 'تعداد', sortable: false, class: ' text-center p-3'
          },
          weight: {
            key: 'weight', label: 'وزن واحد', sortable: false, class: ' text-center p-3'
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
    },
    watch:{
      id_father:function () {
        console.log("id_father changed now",this.id_father)
        if(this.id_father==2){
          this.items3 = items2
          console.log("I'm in if",this.items)
        }
        if(this.id_father==1){
          this.items3 = items
          console.log("I'm in if",this.items)
        }

      }

    },
    mounted(){
      // console.log("baleee: father",this.id_father)
    }
  }
</script>
<style>
  .head_class {
    /*background-color: #540883;*/
    /*border: solid 1px white;*/
    /*color: white;*/
    /*padding: 10% !important;*/
    color: #26A69A;
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
    padding: 1% !important;
  }
  .table thead th{
    vertical-align: middle;
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
