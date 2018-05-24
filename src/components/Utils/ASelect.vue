<template>
  <div>
    <!--<div class="headerC mb-2 mt-2 d-flex">{{header1}}</div>-->
    <!--<div class="row d-flex">-->
    <!--<div class="col-md-1 px-3 py-3 border"><i class="fa fa-flag "></i></div>-->
    <!--<div class="col-md-10 p-0">-->
    <!--<b-form-select v-model="selected" class="bg-light">-->
    <!--<option :value="null" class="headerC" disabled>{{input1}}</option>-->
    <!--<option value="a">{{input2}}</option>-->
    <!--<option value="a">{{input3}}</option>-->
    <!--</b-form-select>-->
    <!--</div>-->
    <!--</div>-->


    <!--<b-form-group id="exampleInputGroup2"-->
                  <!--label="وضعیت سفارش"-->
                  <!--class="mt-2">-->
      <!--class="p-2 col-lg-3 col-md-2 col-4">-->
    <div class="headerC mb-2 mt-2 d-flex">{{header1}}</div>
      <div class="d-flex">
        <span class="px-3 pt-2 border"><i class="fa fa-flag mt-2"></i></span>
        <b-form-select v-model="selected" class="bg-light">
          <option value="null" class="headerC" disabled>{{input1}}

          </option>
          <option value="a">{{input2}}</option>
          <option value="a">{{input3}}</option>
        </b-form-select>
      </div>
    <!--</b-form-group>-->
    <!--class="bg-light p-3"-->
    <!--<b-button type="submit" variant="primary">Submit</b-button>-->
    <!--<b-button type="reset" variant="danger">Reset</b-button>-->


    <!--<form>-->

    <!--<div class="form-group">-->
    <!--<label for="sel1">انتخاب گروه</label>-->
    <!--<select class="form-control" id="sel1">-->
    <!--<option>1-->
    <!--</option>-->
    <!--<option>2</option>-->
    <!--<option>3</option>-->
    <!--<option>4</option>-->
    <!--</select>-->
    <!--</div>-->
    <!--</form>-->
  </div>
</template>

<script>
  export default {
    props: ['header1', 'input1', 'input2', 'input3'],
    components: {},
    data() {
      return {
        selected: null,
        options: [
          {value: null, text: 'salammm'},
          {value: 'a', text: 'This is First option'},
          {value: 'b', text: 'Selected Option'},
          {value: {'C': '3PO'}, text: 'This is an option with object value'},
          {value: 'd', text: 'This one is disabled', disabled: true}
        ],
        items: [
          {text: 'State 1'},
          {text: 'State 2'},
          {text: 'State 3'},
          {text: 'State 4'},
          {text: 'State 5'},
          {text: 'State 6'},
          {text: 'State 7'}
        ],
      }
    }
  }
</script>

<style scoped>
  .headerC {
    font-size: 14px;
  }

  b-dropdown {
    background-color: #1d2124 !important;
  }

  .tes {
    font-size: 12px;
  }

  select.form-control:not([size]):not([multiple]){
    height: calc(2.25rem + 16px);
  }
</style>
