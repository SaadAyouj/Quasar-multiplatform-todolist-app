<template>
  <q-card>
    <Modal-Header>Add Task</Modal-Header>

        <q-form @submit="submitForm">

          <q-card-section class="q-pt-none">

            <Modal-Task-Name
            :name.sync="taskToSubmit.name"
             ref="modalTaskName"/>

            <Modal-Due-Date :dueDate.sync="taskToSubmit.dueDate" />

            <Modal-Due-Time
            :dueTime.sync="taskToSubmit.dueTime"
            v-if="taskToSubmit.dueDate" />

          </q-card-section>

          <Modal-Button />

        </q-form>
      </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      taskToSubmit: {
        name:'',
        dueDate:'',
        dueTime:'',
        completed:false,
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    }
  },
  components: {
    'Modal-Header':require('./Shared/ModalHeader').default,
    'Modal-Task-Name':require('./Shared/ModalTaskName').default,
    'Modal-Due-Date':require('./Shared/ModalDueDate').default,
    'Modal-Due-Time':require('./Shared/ModaleDueTime').default,
    'Modal-Button':require('./Shared/ModalButton').default
  }
}
</script>

<style>

</style>
