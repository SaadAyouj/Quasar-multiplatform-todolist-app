<template>
  <div class="row q-mb-sm">
              <q-input
              outlined
              class="col"
              label="Task Date"
              :value="dueDate"
              @input="$emit('update:dueDate', $event)">
                <template v-slot:append>
                  <q-icon color="orange" name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date
                      :value="dueDate"
                      @input="$emit('update:dueDate', $event)"  />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
  </div>
</template>

<script>
export default {
  props:['dueDate']
}
</script>

<style>

</style>
