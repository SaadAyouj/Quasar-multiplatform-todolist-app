<template>
  <div>
    <q-banner
    dense
    inline-actions
    class="radius text-white bg-orange-4 text-center">
        <span class="text-bold text-subtitle1">You Have To Complete These Tasks.</span>
    </q-banner>
    <q-list
        separator
        bordered>

        <task
        v-for="(task, key) in tasksTodo"
          :key="key"
          :task="task"
          :id="key">
        </task>

      </q-list>
    </div>
</template>

<script>
export default {
  props:['tasksTodo'],
  components:{
    'task': require('./Task').default,
  }
}
</script>

<style>

</style>
