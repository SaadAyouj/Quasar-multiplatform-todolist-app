<template>
  <q-card>
    <Modal-Header>Edit Task</Modal-Header>

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
  props:['task', 'id'],
  data() {
    return {
      taskToSubmit: {}
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
      this.$emit('close')
    }
  },
  components: {
    'Modal-Header':require('./Shared/ModalHeader').default,
    'Modal-Task-Name':require('./Shared/ModalTaskName').default,
    'Modal-Due-Date':require('./Shared/ModalDueDate').default,
    'Modal-Due-Time':require('./Shared/ModaleDueTime').default,
    'Modal-Button':require('./Shared/ModalButton').default
  },
  mounted(){
    this.taskToSubmit = Object.assign({}, this.task)
  }
}
</script>

<style>

</style>
