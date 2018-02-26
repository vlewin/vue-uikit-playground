<template>
  <div>
    <h1 class="uk-text-center">My Login</h1>
    <!-- <h3 class="uk-text-center">UIKit demo application</h3> -->

    <div class="uk-flex-center uk-padding-small" uk-grid>
      <form class="uk-width-1-3@l uk-width-1-2@m uk-width-1-1@s uk-flex-middle">
        <div v-if="error" class="uk-alert-danger uk-text-small" uk-alert>
          <span class="uk-icon" uk-icon="icon: warning"></span>
          {{ error }}
        </div>

        <uk-input id="email" type="email" :init-value="form.email.value" v-on:change="setValue">
          <span slot="message">
            Please enter a valid email address e.g. john.doe@mail.com
          </span>
        </uk-input>

        <uk-input id="password" type="password" :init-value="form.password.value" info="show" v-on:change="setValue">
          <div slot="message">
            Password must have
            <ul class="message">
              <li v-bind:class="{ match: new RegExp('(?=.*[a-z])').test(form.password.value) }">
                a lower-case letter
              </li>
              <li v-bind:class="{ match: new RegExp('(?=.*[A-Z])').test(form.password.value) }">
                an upper-case letter
              </li>
              <li v-bind:class="{ match: new RegExp('(?=.*[0-9])').test(form.password.value) }">
                a number
              </li>
              <!-- (?=.*[_!@#$&*\^%\*\.]) -->
              <li v-bind:class="{ match: new RegExp('(?=.*[_!@#$&*\^%\*\.])').test(form.password.value) }">
                a special character (e.g. _!@#$%^&*)
              </li>
              <li v-bind:class="{ match: form.password.value.length > 7 }">
                at least 8 characters
              </li>
            </ul>
          </div>
        </uk-input>

        <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" v-on:click.stop.prevent="signin" v-bind:disabled="!valid">
          <!-- <div v-if="loading" uk-spinner></div> -->
          <span v-if="loading" class="uk-icon spin" uk-icon="icon: clock"></span>
          <div v-else>LOGIN</div>
        </button>

        <hr class="uk-divider-icon">

        <div class="uk-flex uk-flex-center">
          <div class="uk-card uk-card-default uk-card-small uk-card-body"><span uk-icon="icon: google-plus; ratio: 2"></span></div>
          <div class="uk-card uk-card-default uk-card-small uk-card-body uk-margin-left"><span uk-icon="icon: facebook; ratio: 2"></span></div>
          <div class="uk-card uk-card-default uk-card-small uk-card-body uk-margin-left"><span uk-icon="icon: github; ratio: 2"></span></div>
        </div>

        <hr class="uk-divider-icon">

        <div class="uk-placeholder uk-text-center">
          Don't have an account? - <router-link to="signup">Sign up</router-link>
        </div>

      </form>
    </div>

    <pre>
      Session: {{ session }}
    </pre>
  </div>
</template>

<script>
  // import { signin, refresh } from '../libraries/cognito'
  import { Auth, Logger } from 'aws-amplify';
  import { signin } from '../libraries/amplify'
  import UkInput from './shared/UkInput.vue'

  export default {
    name: 'SignIn',
    components: { UkInput },
    data () {
      return {
        loading: false,
        error: null,
        session: null,
        form: {
          email: { value: 'vlad@my-prtg.com', valid: true },
          password: { value: 'Password_1', valid: true }
        }
      }
    },

    computed: {
      valid() {
        return Object.values(this.form).every((e) => e.valid)
      }
    },

    beforeMount: async function() {
      // refresh()
      this.pool = await Auth.currentUserPoolUser()
      this.session = await Auth.currentSession()
    },

    mounted: async function() {
      let user = await Auth.currentAuthenticatedUser();
      console.log(user)
      // const session = await Auth.currentSession()
      // console.log(session)
    },

    methods: {
      setValue(input) {
        this.form[input.id] = { value: input.value, valid: input.valid }
      },

      async signin() {
        try {
          const response = await signin('vlad', this.form.password.value)
          console.log('RESPONSE:', response)
          localStorage.setItem('authenticated', true)
          this.$router.push('/dashboard')
          this.error = null
          this.loading = false
          this.saved = true

        } catch(error) {
          console.log('in catch', error)
          this.error = error.message
        }
      },

      async submit() {
        console.log('submit')

        this.loading = true
        this.saved = false

        const response = await signin(this.form)
        console.log(response)
        if(response.error) {
          this.error = response.error
        } else {
          this.$router.push('/dashboard')
          this.error = null
          this.loading = false
          this.saved = true
        }

        // setTimeout(() => {
        //   this.loading = false
        //   this.saved = true
        //
        //   if(this.form.email.value.includes('vlad')) {
        //     this.error = 'Email is already taken!'
        //   } else {
        //     this.error = null
        //   }
        // }, 3000);
      }
    }
  }
</script>

<style lang="sass">
  @keyframes spin
    from
      transform: rotate(0deg)
    to
      transform: rotate(360deg)

  .spin
    animation-name: spin
    animation-duration: 5000ms
    animation-iteration-count: infinite
    animation-timing-function: linear

  .uk-text-danger
    circle:first-child
      stroke: transparent
      fill: #f0506e

    circle
      stroke: #f0506e

    path
      fill: #f0506e


</style>
