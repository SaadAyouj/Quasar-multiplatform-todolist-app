<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('auth', ['handleAuthStateChange']),
    ...mapActions('settings', ['getSettings'])
  },
  mounted() {
    this.getSettings()
    this.handleAuthStateChange()
  },
  name: 'App'
}
</script>

<style>
  .text-strikethrough{
    text-decoration: line-through;
  }
</style>
