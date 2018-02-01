<template>
  <div>
    <h1 class="uk-text-center">Dashboard</h1>
    <h3 class="uk-text-center">Welcome {{ user.username }}!</h3>

    <pre>
      {{ attributes }}
    </pre>
  </div>
</template>

<script>
  import {userPool} from '../libraries/cognito'
  console.log(userPool)
  export default {
    name: 'Dashbaord',
    data () {
      return {
        user: userPool.getCurrentUser(),
        attributes: null,
        loading: false,
      }
    },

    computed: {
    },

    mounted() {
      this.getUserAttributes()
    },

    watch: {
    },

    methods: {
      getUserAttributes() {
        console.log('TBD')
      }
    }
  }
</script>

<style lang="sass">



</style>
