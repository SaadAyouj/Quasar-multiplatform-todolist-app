<template>
  <q-page class="q-pa-md">
    <div class="row q-mb-lg">
      <search />
      <sort />
    </div>

    <p
    class="text-bold text-center text-red"
    v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">
    No search result</p>

    <no-task
    v-if="!Object.keys(tasksTodo).length && !search" />

		<task-todo
    v-if="Object.keys(tasksTodo).length"
    :tasksTodo="tasksTodo" />


    <task-completed
    v-if="Object.keys(tasksCompleted).length"
    :tasksCompleted="tasksCompleted" />

    <div class="absolute-bottom text-center q-mb-lg">
    <q-btn
    @click="ShowAddTask = true"
      round
      color="primary"
      size="24px"
      icon="add"
    />
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
    ...mapState('tasks', ['search'])
  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.ShowAddTask = true
    })
  }
}
</script>
