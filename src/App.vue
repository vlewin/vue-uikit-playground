<template>
  <div id="app">
    <nav class="uk-navbar-container uk-margin" uk-navbar>
      <div class="uk-navbar-center">
        <div class="uk-navbar-center-left">
          <div>
            <ul class="uk-navbar-nav">
              <li class="uk-active"><a href="#">Active</a></li>
            </ul>
          </div>
        </div>
        <a class="uk-navbar-item uk-logo" href="#">
          <svg version="1.1" viewBox="0 0 500.00001 500.00001" xmlns="http://www.w3.org/2000/svg">
           <g transform="translate(0 -552.36)">
            <path d="m250 571.78 199.69 115.29-1e-5 230.58-199.69 115.29-199.69-115.29 7e-6 -230.58z" fill="none" stroke="#555" stroke-linecap="round" stroke-width="18.446"/>
            <g transform="translate(0 .020371)" fill="#555" fill-rule="evenodd" shape-rendering="auto">
             <path d="m185.61 740.19a9.9393 9.9393 0 0 0 -6.832 3.0059l-51.805 51.805a9.9393 9.9393 0 0 0 0 14.055l51.805 51.805a9.9393 9.9393 0 1 0 14.055 -14.055l-44.775-44.777 44.775-44.777a9.9393 9.9393 0 0 0 -7.2226 -17.061z" color="#000000" color-rendering="auto" image-rendering="auto" solid-color="#000000" style="block-progression:tb;isolation:auto;mix-blend-mode:normal;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-transform:none;white-space:normal"/>
             <path d="m314.09 740.19a9.9393 9.9393 0 0 0 -6.9238 17.066l44.775 44.777-44.775 44.777a9.9393 9.9393 0 1 0 14.055 14.055l51.805-51.805a9.9393 9.9393 0 0 0 0 -14.055l-51.805-51.805a9.9393 9.9393 0 0 0 -7.1309 -3.0117z" color="#000000" color-rendering="auto" image-rendering="auto" solid-color="#000000" style="block-progression:tb;isolation:auto;mix-blend-mode:normal;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-transform:none;white-space:normal"/>
             <path d="m262.01 724.5a9.9393 9.9393 0 0 0 -9.6406 8.0742l-27.861 135.57a9.9393 9.9393 0 1 0 19.471 4.002l27.861-135.57a9.9393 9.9393 0 0 0 -9.8301 -12.076z" color="#000000" color-rendering="auto" image-rendering="auto" solid-color="#000000" style="block-progression:tb;isolation:auto;mix-blend-mode:normal;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-transform:none;white-space:normal"/>
            </g>
           </g>
          </svg>
        </a>
        <div class="uk-navbar-center-right">
          <div>
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
    svg
      width: 48px
      height: 48px
</style>
