<template>
  <div class="uk-margin">
    <div class="uk-inline uk-width-1-1">
      <!-- FIXME:  move to computed property icon -->
      <span v-if="typing" class="uk-form-icon" uk-icon="icon: pencil"></span>
      <span v-else-if="dirty && !valid" class="uk-form-icon uk-text-danger" uk-icon="icon: warning"></span>
      <span v-else class="uk-form-icon" :uk-icon="element.icon"></span>

      <input class="uk-input" v-model="value" @focus="focused = true" @blur="focused = false" type="text">

      <span v-if="valid" class="uk-form-icon uk-form-icon-flip uk-text-success uk-animation-scale-up" uk-icon="icon: check"></span>
      <a v-else-if="!valid && info === 'show'" class="uk-form-icon uk-form-icon-flip drop-trigger" uk-icon="icon: info"></a>
    </div>

    <div v-show="focused && typing" class="uk-alert-primary uk-text-small uk-animation-fade" uk-alert>
      Validating...
    </div>

    <div v-show="focused && !typing & dirty && !valid" class="uk-alert-danger uk-text-small" uk-alert>
      <slot name="message"></slot>
    </div>

    <div v-show="focused && !typing & valid" class="uk-alert-success uk-text-small" uk-alert>
      All green!
    </div>

    <!-- FIXME: How to pass content from parent??? Move to drop component -->
    <div v-if="info === 'show'" class="uk-margin-small" uk-drop="toggle: .drop-trigger; mode: click; pos: right-center; boundary: .drop-trigger; boundary-align: true">
      <div class="uk-card uk-card-body uk-card-default uk-text-small">
        <span class="uk-form-icon" uk-icon="icon: chevron-left"></span>

        Must have at least 8 characters including at least 3 of the following 4 types of characters:
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

  </div>
</template>

<script>

import paterns from '../helpers/forms'

export default {
  name: 'uk-input',
  data() {
    return {
      value: null,
      focused: false,
      typing: false,
      dirty: false,

      types: {
        email: {
          icon: 'icon: mail',
          pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
        },

        password: {
          icon: 'icon: lock',
          pattern: "^(?=.*[A-Z])(?=.*[_!@#$&*\^%\*\.])(?=.*[0-9])(?=.*[a-z]).{8,}$",
        }
      }
    }
  },

  props: {
    type: {
      type: String,
      default: 'text',
      required: true
    },

    info: {
      type: String,
      default: 'hide'
    }
  },

  computed: {
    element() {
      return this.types[this.type]
    },

    icon() {
      return this.types[this.type].icon
    },

    valid() {
      return this.isValid(this.value)
    }
  },

  watch: {
    value: function (val, oldVal) {
      this.isTyping()
    },

    valid: function (val, oldVal) {
      this.$emit('input-valid', { type: this.type, value: this.value })
    },
  },

  methods: {
    isValid(value) {
      return RegExp(this.element.pattern).test(value);
    },

    isTyping(field) {
      this.dirty = true
      this.typing = true

      setTimeout(() => {
        this.typing = false
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
