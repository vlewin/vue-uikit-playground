<template>
  <div id="app">
    <nav class="uk-navbar-container uk-margin" uk-navbar>
      <div class="uk-navbar-center">

          <div class="uk-navbar-center-left"><div>
              <ul class="uk-navbar-nav">
                <li class="uk-active"><a href="#">Active</a></li>
              </ul>
          </div></div>
          <a class="uk-navbar-item uk-logo" href="#">
            <img src="./assets/hexagon.svg" />
          </a>
          <div class="uk-navbar-center-right"><div>
            <ul class="uk-navbar-nav">
              <li><a href="#">Item</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <login></login>
  </div>
</template>

<script>

import Login from './components/Login.vue'

export default {
  name: 'app',
  components: { Login },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },

  mounted() {
  }
}
</script>

<style lang="sass">
  .uk-logo
    img
      width: 48px
      height: 48px
</style>
