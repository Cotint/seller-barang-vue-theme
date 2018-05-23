<template>
  <div class=" border container">
    <div class="row">
    <div class="col-md-9 p-2 num">
      <span class="float-right" v-number-transition="{target: num, iteration: 500, speed: 10 }"></span>
      <!--<span>,</span>-->
      <!--<div id="count2" v-number-transition="{target: num | formatNumber, iteration: 500, speed: 10 }"></div>-->
    </div>
    <div class="col-md-3 px-3 pt-2">
      <i :class="class_icon"></i>
    </div>
    </div>
    <div class="row text_title px-2">{{title}}</div>
    <div class="row px-1 pt-3">
      <b-progress style="border-radius: 0px"
                  v-for="bar in bars"
                  :key="bar.id"
                  :value="bar.value" :max="max" class=" w-100 danger" height="5px" :variant="colorv"></b-progress>
    </div>
  </div>

</template>
<script>
  import NumberTransition from 'vue-number-transition';
   export default {
    props: ['num', 'class_icon','title','value','colorv'],
    directives: {
      // ..
      NumberTransition
      // ..
    },
    data () {
      return {
        max: 100,
        // value: 33.333333333
        timer: null,
        bars: [
          {id: '1', value: 'value'},
        ],
      }
    },
     mounted () {
       this.timer = setInterval(() => {
         this.bars.forEach(bar => bar.value = 25 + (Math.random() * 75))
       }, 2000)
     },
     beforeDestroy () {
       clearInterval(this.timer)
       this.timer = null
     }
      }

</script>

<style scoped>
  .num {
    color: #080310;
    font-size: 20px;
  }

  i {
    color: #B0B0B0;
  }
  .text_title{
    color: #B0B0B0;
    font-size: 13px;
  }
</style>
