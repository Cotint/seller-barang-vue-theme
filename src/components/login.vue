<template>
  <div class="row father d-flex justify-content-center">
    <div class="col-md-4"></div>
    <div class="col-md-3 contain_f">
      <div class="row contain d-flex justify-content-center font-weight-bold p-3 mb-2">بارنگ</div>
      <div class="row contain_sen d-flex justify-content-center p-1 mb-2">لطفا وارد سیستم شوید.</div>
      <div class="row d-flex justify-content-center">
        <!--<form @submit.prevent="submit">-->
        <!--<div class="form-group" :class="{ 'form-group&#45;&#45;error': $v.name.$error }">-->
        <!--<label class="form__label">Name</label>-->
        <!--<input class="form__input" v-model.trim="$v.name.$model"/>-->
        <!--</div>-->
        <!--<div class="error" v-if="!$v.name.required">Name is required</div>-->
        <!--<div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>-->
        <!--<button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>-->
        <!--<p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>-->
        <!--<p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>-->
        <!--<p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>-->
        <!--</form>-->
        <b-form-group id="exampleInputGroup1" >
          <b-form-input :state="!$v.form.email.$invalid"
                        v-model="form.email"
                        aria-describedby="input1LiveFeedback"
                        class="p-2 my-2" type="email" placeholder="نام کاربری">
          </b-form-input>
          <b-form-invalid-feedback id="input1LiveFeedback" class="text-right">
            فرمت ورودی باید ایمیل شما باشد
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-input class="p-2 my-2" type="password" placeholder="رمز عبور"
                      :state="!$v.form.password.$invalid"
                      v-model="form.password"
                      aria-describedby="input2LiveFeedback"></b-form-input>
        <b-form-invalid-feedback id="input2LiveFeedback" class="text-right">
          وارد کردن رمز الزامی است.
        </b-form-invalid-feedback>
        <button class="p-2 my-2 border-dark text-white" type="submit" :disabled="$v.form.$invalid">وارد شوید
        </button>
      </div>
      <div class="">
        <p class="contain_below mt-3"><a href="#/forget" class="">رمز خود را فراموش کرده اید؟</a></p>
      </div>
      <div class="p-1" style="direction: ltr;font-size: 11px">powered by
        <a href="#">Cotint</a>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
  import {required, minLength, email} from 'vuelidate/lib/validators'
  import {validationMixin} from "vuelidate"

  export default {
    data() {
      return {
        name: '',
        age: 0,
        submitStatus: null,
        form: {},
        okk:'false'
      }
    },
    mixins: [
      validationMixin
    ],
    validations: {
      form: {
        password: {
          required
        },
        email: {
          required,
          email,
          // minLength: minLength(3)
        }
      }
    },
    created(){
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    },
    methods: {
      submit() {
        console.log('submit!')
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
          console.log('errrrrrrrrror!')
        } else {
          // do your submit logic here
          this.submitStatus = 'PENDING'
          setTimeout(() => {
            this.submitStatus = 'OK'
          }, 500)
        }
      }
    }
  }
</script>

<style scoped>
  .contain {
    color: #6c6c6c;
    font-size: 22px;
    text-align: center;
    vertical-align: middle;
  }

  .contain_f {
    text-align: center;
    vertical-align: middle;
  }

  .father {
    margin: 5% !important;
  }

  .contain_sen {
    font-size: 13px;
    text-align: center;
    vertical-align: middle;
    color: #4E5E6A;
  }

  .contain_below {
    font-size: 13px;
    /*text-align: center;*/
    /*vertical-align: middle;*/
    margin: 0 0 10px;
    color: #4E5E6A;
  }

  button:focus {
    outline: 0;
  }

  button:hover {
    background-color: #1da88f
  }

  button {
    background-color: #1DB198;
  }

  a {
    color: #2f7eb4;
  }

  a:hover {
    /*text-decoration: none;*/
    color: #1d395d;
  }
  button:disabled{
    background-color: #bdbdbd;
  }
</style>
