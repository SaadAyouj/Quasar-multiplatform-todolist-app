<template>
<transition
  appear
  enter-active-class="animated bounceInLeft"
  leave-active-class="animated bounceOutRight absolute"
>
  <div>
    <q-banner
    v-if="!settings.showTasksInOneList"
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
</transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props:['tasksTodo'],
  computed: {
    ...mapGetters('settings', ['settings'])
  },
  components:{
    'task': require('./Task').default,
  }
}
</script>

<style>

</style>
