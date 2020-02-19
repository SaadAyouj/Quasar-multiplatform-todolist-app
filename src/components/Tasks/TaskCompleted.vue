<template>
<transition
  appear
  enter-active-class="animated bounceInLeft"
  leave-active-class="animated bounceOutDown"
>
  <div
  :class="{ 'q-mt-lg' : !settings.showTasksInOneList }">
      <q-banner
      v-if="!settings.showTasksInOneList"
      dense
      inline-actions
      class="radius text-white bg-green-4 text-center">
          <span class="text-bold text-subtitle1">You Have Completed These Tasks.</span>
      </q-banner>

      <q-list
          separator
          bordered>

          <task
          v-for="(task, key) in tasksCompleted"
            :key="key"
            :task="task"
            :id="key">
          </task>

        </q-list>
  </div>
</transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props:['tasksCompleted'],
  computed: {
    ...mapGetters('settings', ['settings'])
  },
  components:{
    'task': require('./Task').default,
  }
}
</script>

<style>
  .radius{
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>
