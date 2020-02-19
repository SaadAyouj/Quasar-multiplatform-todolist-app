<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md">

      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        <b v-if="tab == 'register'">Register to get access to you Todos from all you devices !</b>
        <b v-else>Login and get all your Tasks !</b>
      </q-banner>

    </div>

    <div class="row q-mb-md">

      <q-input
      outlined
      v-model="formData.email"
      label="Email"
      class="col"
      ref="email"
      :rules="[val => isValidEmail(val) || 'Please enter a valide email']" />

    </div>

    <div class="row q-mb-md">

      <q-input
      outlined
      v-model="formData.password"
      label="Password"
      type="password"
      class="col"
      :rules="[ val => val.length >= 6 || 'Please enter at least 6 characters']"
      lazy-rules
      ref="password"
      />

    </div>

    <div class="row">
      <q-space />
      <q-btn
      color="primary"
      icon-right="send"
      :label="tab"
      type="submit" />

    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['tab'],
  data() {
    return {
      formData: {
        email: '',
        password:''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser']),
    submitForm() {
      this.$refs.email.validate()
      this.$refs.password.validate()
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab == 'login') {
          this.loginUser(this.formData)
        }
        else {
          this.registerUser(this.formData)
        }
      }
    },
    isValidEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase());
    },
  }

}
</script>

<style>

</style>
