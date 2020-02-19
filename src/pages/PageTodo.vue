<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
    <div class="row q-mb-lg">
      <search />
      <sort />
    </div>

    <p
    class="text-bold text-center text-red"
    v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">
    No search result</p>

    <q-scroll-area
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        class="q-scroll-area-tasks"
      >

    <no-task
    v-if="!Object.keys(tasksTodo).length && !search && !settings.showTasksInOneList" />

    <q-banner
      v-if="settings.showTasksInOneList && !search"
      dense
      inline-actions
      class="radius text-white bg-blue-4 text-center">
          <span class="text-bold text-subtitle1">All Your Tasks.</span>
      </q-banner>

		<task-todo
    v-if="Object.keys(tasksTodo).length"
    :tasksTodo="tasksTodo" />


    <task-completed
    v-if="Object.keys(tasksCompleted).length"
    :tasksCompleted="tasksCompleted"
    class="q-mb-xl" />

    </q-scroll-area>

    <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
    <q-btn
    @click="ShowAddTask = true"
      round
      class="all-pointer-events"
      color="primary"
      size="24px"
      icon="add"
    />
    </div>
    </div>
    <q-dialog v-model="ShowAddTask">
      <add-task @close="ShowAddTask = false"></add-task>
    </q-dialog>

  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data(){
    return {
      ShowAddTask: false
    }
  },
  components:{
    'add-task': require('../components/Modals/AddTask').default,
    'task-todo': require('../components/Tasks/TasksTodo').default,
    'task-completed': require('../components/Tasks/TaskCompleted').default,
    'no-task': require('../components/Tasks/NoTasks').default,
    'search': require('../components/Tasks/Tools/Search').default,
    'sort': require('../components/Tasks/Tools/Sort').default
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
    ...mapGetters('settings', ['settings']),
    ...mapState('tasks', ['search']),
    thumbStyle () {
      return {
        right: '1.5px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      }
    },

    barStyle () {
      return {
        right: '0.1px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
      }
    }
  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.ShowAddTask = true
    })
  }
}
</script>

<style lang="scss">
 .q-scroll-area-tasks {
   display: flex;
   flex-grow: 1;
   .mobile & {
     flex-basis: 100px;
   }
 }
</style>
