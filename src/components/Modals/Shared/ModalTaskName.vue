<template>
  <div class="row q-mb-sm">
              <q-input
              outlined
              v-select-all
              :value="name"
              @input="$emit('update:name', $event)"
              label="Task Name *"
              :rules="[val => val && val.length > 0 || 'Please type a task']"
              class="col"
              ref="name"
              autofocus
              clearable />
  </div>
</template>

<script>
import { selectAll } from 'src/directives/directive-select-all.js'
export default {
  props:['name'],
  directives: {
    selectAll
  }
}
</script>

<style>

</style>
