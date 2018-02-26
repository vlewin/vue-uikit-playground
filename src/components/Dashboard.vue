<template>
  <div>
    <h1 class="uk-text-center">Dashboard</h1>
    <h3 class="uk-text-center">Welcome {{ user.username }}!</h3>

    <pre>
      {{ user }}
    </pre>

    <pre>
      {{ session }}
    </pre>

  </div>
</template>

<script>
  import Amplify, { Auth, Logger } from 'aws-amplify';

  export default {
    name: 'Dashboard',
    data () {
      return {
        session: null,
        user: {},
        pool: null,
        loading: false,
      }
    },

    computed: {
    },

    beforeMount: async function() {
      this.session = await Auth.currentSession()
      this.user = await Auth.currentUserInfo() || {}
      this.pool = await Auth.currentUserPoolUser()
    },

    watch: {
    },

    methods: {
    }
  }
</script>

<style lang="sass">



</style>
