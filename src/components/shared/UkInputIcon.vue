<template>
  <span class="uk-form-icon" :uk-icon="icon" v-bind:class="{ 'uk-text-danger' : invalid }"></span>
</template>

<script>
  export default {
    name: 'uk-input-icon',
    data() {
      return {
      }
    },

    props: {
      defaultIcon: {
        type: String,
        default: 'edit',
        required: true
      },

      typing: {
        type: Boolean,
        default: false,
        required: true
      },

      dirty: {
        type: Boolean,
        default: false,
        required: true
      },

      valid: {
        type: Boolean,
        default: false,
        required: true
      },
    },

    computed: {
      icon() {
        if(this.typing) {
          return 'pencil'
        } else if (this.dirty && this.invalid) {
          return 'warning'
        }

        return this.defaultIcon
      },

      invalid() {
        return !this.typing && this.dirty && !this.valid
      }
    }
  }
</script>
