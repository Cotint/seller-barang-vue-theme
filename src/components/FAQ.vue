<template>
  <div class="mx-3">
    <div class="row col-md-12 py-4 title1">سوالات متداول</div>
    <b-card v-for="item in items" no-body class="mb-2 border-0 shadow-none">
      <!--<b-card-header header-tag="header" class="p-1" role="tab">-->
      <div class="bg-light p-2 contain border-0" @click="item.action">
        <b-btn block href="#" v-b-toggle="item.id" variant="light"
               class="m-0 text-right pr-3 pt-2 pb-4" style="color: inherit;font-weight: 600;">
          {{item.title}}
        </b-btn>
      </div>
      <!--</b-card-header>-->
      <b-collapse :id='item.id' accordion="my-accordion" role="tabpanel" class="border-0 ">
        <b-card-body class=" ">
          <p class="card-text border-0 ">
            {{item.text}}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: `salam`, title: 'چگونه محصول جدید ثبت کنیم؟', id: 'accordion1', action: function () {
              console.log('foo1111')
            }
          },
          {
            text: `dslkfldkfldsk`, title: 'چگونه محصول جدید حدف کنیم؟', id: 'accordion2', action: function () {
              console.log('foo22222')
            }
          },
          {
            text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `, title: 'درخواست جدید به سایت چگونه است؟', id: 'accordion3', action: function () {
              console.log('foo')
            }
          }
        ],
        active: 'accordion1'
      }
    },
    methods: {
      clicked: function (item) {
        active = item.id
        console.log("it is id:", active)
      }
    }
  }
</script>
<style scoped>
  a:hover {
    background-color: transparent;
    box-shadow: none !important;
    outline: 0 !important;
  }

  a:focus {
    background-color: transparent !important;
    box-shadow: none !important;
    outline: 0 !important;
  }

  .btn:not(.btn--depressed) {
    will-change: unset;
    box-shadow: none;
    border: none;
  }
  .btn-light{
    background-color: #f1f1f1!important;
  }
  .bg-light{
    background-color: #f1f1f1!important;
  }
  .title1{
    font-size: 24px;
    font-weight: 400;
    color: #4E5E6A;
  }
</style>
