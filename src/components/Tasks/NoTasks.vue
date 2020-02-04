<template>
  <q-banner class="radiusNoTask bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="check" color="primary" />
      </template>
      <span class="text-bold text-subtitle1">You have Completed All Your Tasks !</span>
      <template v-slot:action>
        <q-btn
        @click="$root.$emit('showAddTask')"
        flat
        color="primary"
        label="Add Task" />
      </template>
  </q-banner>
</template>

<script>
export default {

}
</script>

<style>
  .radiusNoTask{
    border-radius: 5px;
  }
</style>
