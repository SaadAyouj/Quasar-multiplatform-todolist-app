<template>
  <q-page class="q-pa-md">

    <no-task
    v-if="!Object.keys(tasksTodo).length" />

		<task-todo
    v-else
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
import { mapGetters } from 'vuex'

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
    'no-task': require('../components/Tasks/NoTasks').default
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.ShowAddTask = true
    })
  }
}
</script>
