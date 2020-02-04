<template>
  <div class="row q-mb-sm">
              <q-input
              outlined
              :value="name"
              @input="$emit('update:name', $event)"
              label="Task Name *"
              :rules="[val => val && val.length > 0 || 'Please type a task']"
              class="col"
              ref="name"
              autofocus
              v-select-all
              clearable />
  </div>
</template>

<script>
export default {
  props:['name'],
  directives: {
    selectAll: {
      inserted(el) {
        let input = el.querySelector('.q-field__native')
        input.addEventListner
      }
    }
  }
}
</script>

<style>

</style>
