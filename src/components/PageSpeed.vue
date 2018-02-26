<template>
  <div class="uk-container">
    <h2>Page metrics</h2>

    <div class="uk-child-width-expand@s uk-text-center" uk-grid>
      <div>
        <div class="uk-card uk-card-default uk-card-small">
          <div class="uk-card uk-card-body">
            <small>Perfomance grade</small>
            <h2 class="uk-margin-remove">70/<small>100</small></h2>
            <small class="uk-text-warning">+3(4.48%)</small>
          </div>
        </div>
      </div>

      <div>
        <div class="uk-card uk-card-default uk-card-small">
          <div class="uk-card uk-card-body">
            <small>Load time</small>
            <h2 class="uk-margin-remove">3.05<small>s</small></h2>
            <small class="uk-text-success">-300ms (5%)</small>
          </div>
        </div>
      </div>

      <div>
        <div class="uk-card uk-card-default uk-card-small">
          <div class="uk-card uk-card-body">
            <small>Page size</small>
            <h2 class="uk-margin-remove">1.75<small>MB</small></h2>
            <small class="uk-text-success">-11MB (5%)</small>
          </div>
        </div>
      </div>

      <div>
        <div class="uk-card uk-card-default uk-card-small">
          <div class="uk-card uk-card-body">
            <small>Requests</small>
            <h2 class="uk-margin-remove">175</h2>
            <small class="uk-text-success">-11 (6%)</small>
          </div>
        </div>
      </div>
    </div>

    <h2>Page resources</h2>
    <div class="uk-overflow-auto">
      <table class="uk-table uk-table-responsive uk-table-divider">
        <thead>
          <tr>
            <th class="uk-table-shrink">Shrink</th>
            <th class="uk-table-expand">Expand</th>
            <th class="uk-width-small">Width Small</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
          </tr>
          <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>

export default {
  name: 'PageSpeed',
  components: {  },
  data () {
    return {
      loading: false,
      error: null,
      username: null,
    }
  },

  computed: {
    valid() {
      return Object.values(this.form).every((e) => e.valid)
    }
  },

  watch: {

  },

  methods: {
    setValue(input) {
      // FIXME: apply atob() to password
      this.form[input.id] = { value: input.value, valid: input.valid }
    },
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
