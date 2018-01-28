<template>
  <div>
    <h1 class="uk-text-center">My Login</h1>

    <div class="uk-flex-center uk-padding-small" uk-grid>
      <form class="uk-width-1-3@l uk-width-1-2@m uk-width-1-1@s uk-flex-middle">
        <div class="uk-margin">
          <div class="uk-inline uk-width-1-1">
            <span v-if="form.email.typing" class="uk-form-icon" uk-icon="icon: pencil"></span>
            <span v-else-if="form.email.dirty && !validEmail" class="uk-form-icon uk-text-danger" uk-icon="icon: warning"></span>
            <span v-else class="uk-form-icon" uk-icon="icon: mail"></span>

            <input class="uk-input" v-model="form.email.value" @focus="form.email.focused = true" @blur="form.email.focused = false" type="text">
            <span v-if="validEmail" class="uk-form-icon uk-form-icon-flip uk-text-success uk-animation-scale-up" uk-icon="icon: check"></span>
          </div>

          <div v-show="form.email.focused && form.email.typing" class="uk-alert-primary uk-text-small uk-animation-fade" uk-alert>
            Validating...
          </div>

          <div v-show="form.email.focused && !form.email.typing & form.email.dirty && !validEmail" class="uk-alert-danger uk-text-small" uk-alert>
            <!-- <span class="uk-label uk-label-danger">
              ERROR:
            </span> -->

            Please enter a valid email address e.g. john.doe@example.com
          </div>

          <div v-show="form.email.focused && !form.email.typing & validEmail" class="uk-alert-success uk-text-small" uk-alert>
            All green!
          </div>
        </div>

        <div class="uk-margin">
          <div class="uk-inline uk-width-1">
            <!-- <span class="uk-form-icon" uk-icon="icon: lock"></span> -->

            <span v-if="form.password.typing" class="uk-form-icon" uk-icon="icon: pencil"></span>
            <span v-else-if="form.password.dirty && !validPassword" class="uk-form-icon uk-text-danger" uk-icon="icon: warning"></span>
            <span v-else class="uk-form-icon" uk-icon="icon: lock"></span>

            <input class="uk-input" v-model="form.password.value" @focus="form.password.focused = true" @blur="form.password.focused = false" type="password">

            <span v-if="validPassword" class="uk-form-icon uk-form-icon-flip uk-text-success uk-animation-scale-up" uk-icon="icon: check"></span>
            <a v-else class="uk-form-icon uk-form-icon-flip field-info" uk-icon="icon: info"></a>
          </div>



          <div v-show="form.password.focused && form.password.typing" class="uk-alert-primary uk-text-small uk-animation-fade" uk-alert>
            Validating...
          </div>

          <div v-show="form.password.focused && !form.password.typing & form.password.dirty && !validPassword" class="uk-alert-danger uk-text-small field-info" uk-alert>
            <div class="uk-visible@s">Please enter a valid password.</div>

            <div class="uk-hidden@s">
              <p>
                Please enter a valid password.
              </p>
              <span class="uk-label uk-label-danger">
                Must have
              </span>

              at least 8 characters including at least 3 of the following 4 types of characters:
              <ul class="uk-margin-remove">
                <li>
                  a lower-case letter
                </li>
                <li>
                  an upper-case letter
                </li>
                <li>
                  a number
                </li>
                <li>
                  a special character (e.g. _!@#$%^&*)
                </li>
              </ul>
            </div>
          </div>

          <div v-show="form.password.focused && !form.password.typing & validPassword" class="uk-alert-success uk-text-small" uk-alert>
            All green!
          </div>
        </div>

        <!-- <div class="uk-margin-small" uk-drop="toggle: .field-info; mode: click; pos: right-center; boundary: .field-info;"> -->
        <div class="uk-margin-small" uk-drop="toggle: .field-info; mode: click; pos: right-center; boundary: .field-info; boundary-align: true">
          <div class="uk-card uk-card-body uk-card-default uk-text-small">
            <span class="uk-form-icon" uk-icon="icon: chevron-left"></span>
            <span class="uk-label">
              Must have
            </span>

            at least 8 characters including at least 3 of the following 4 types of characters:
            <ul class="uk-margin-remove">
              <li>
                a lower-case letter
              </li>
              <li>
                an upper-case letter
              </li>
              <li>
                a number
              </li>
              <li>
                a special character (e.g. _!@#$%^&*)
              </li>
            </ul>
          </div>
        </div>

        <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" v-bind:disabled="!formValid">LOGIN</button>

        <hr class="uk-divider-icon">

        <div class="uk-flex uk-flex-center">
          <div class="uk-card uk-card-default uk-card-small uk-card-body"><span uk-icon="icon: google-plus; ratio: 2"></span></div>
          <div class="uk-card uk-card-default uk-card-small uk-card-body uk-margin-left"><span uk-icon="icon: facebook; ratio: 2"></span></div>
          <div class="uk-card uk-card-default uk-card-small uk-card-body uk-margin-left"><span uk-icon="icon: github; ratio: 2"></span></div>
        </div>

        <hr class="uk-divider-icon">

        <div class="uk-placeholder uk-text-center">Don't have an account? - <a>Sign Up</a></div>


        <!-- HHH -->



      </form>
    </div>


  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      form: {
        email: {
          value: null,
          dirty: false,
          focused: false,
          typing: false,
          valid: false,
          policy: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
        },

        password: {
          value: null,
          dirty: false,
          focused: false,
          typing: false,
          valid: false,
          policy: "^(?=.*[A-Z])(?=.*[_!@#$&*\^%\*\.])(?=.*[0-9])(?=.*[a-z]).{8,}$"
        }
      }
    }
  },

  computed: {
    validEmail() {
      return this.isValidMail(this.form.email.value)
    },

    validPassword() {
      return this.isValidPassword(this.form.password.value)
    },

    formValid() {
      return this.validEmail && this.validPassword
    }
  },

  watch: {
    'form.email.value': function (val, oldVal) {
      this.isTyping('email')
      // this.validEmail = this.isValidMail(val)
    },

    'form.password.value': function (val, oldVal) {
      this.isTyping('password')
      // this.validPassword = this.isValidPassword(val)
    }
  },

  methods: {
    isValidMail(value) {
      console.log('Valid')
      return RegExp(this.form.email.policy).test(value);
    },

    isValidPassword(value) {
      return RegExp(this.form.password.policy).test(value);
    },

    isTyping(field) {
      this.form[field].dirty = true
      this.form[field].typing = true

      setTimeout(() => {
        this.form[field].typing = false
      }, 300);
    },

    save() {
      this.saved = false
      setTimeout(() => {
        this.saved = true
      }, 3000);
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
