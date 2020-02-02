<template>
  <q-page class="q-pa-md">
		<q-list
      v-if="Object.keys(tasks).length"
			separator
			bordered>

      <task
      v-for="(task, key) in tasks"
		  	:key="key"
        :task="task"
        :id="key">
        </task>

		</q-list>

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
    'task': require('../components/Tasks/Task').default,
    'add-task': require('../components/Modals/AddTask').default
  },
  computed: {
    ...mapGetters('tasks', ['tasks'])
  }
}
</script>
