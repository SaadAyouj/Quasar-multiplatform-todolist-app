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
              clearable />
  </div>
</template>

<script>
export default {
  props:['name']
}
</script>

<style>

</style>
