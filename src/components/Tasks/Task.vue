<template>
  <q-item
		  	@click="updateTask({ id: id, updates:{ completed: !task.completed } })"
		  	:class="!task.completed ? 'bg-amber-1' : 'bg-light-green-1'"
		  	clickable
		  	v-ripple>
		    <q-item-section side top>
		      <q-checkbox
            :value="task.completed"
            class="no-pointer-events" />
		    </q-item-section>

		    <q-item-section>
		      <q-item-label
		      	:class="{ 'text-strikethrough' : task.completed }">
		      	{{ task.name }}
		      </q-item-label>
		    </q-item-section>

		    <q-item-section
        v-if="task.dueDate" side>
		    	<div class="row">
		    		<div class="column justify-center">
				    	<q-icon
				    		name="event"
                color="blue-13"
				    		size="20px"
				    		class="q-mr-xs" />
		    		</div>
			    	<div class="column">
		          <q-item-label
		          	class="row justify-end"
		          	caption>
		          	{{ task.dueDate }}
		          </q-item-label>
		          <q-item-label
		          	class="row justify-end"
		          	caption>
		          	<small>{{ task.dueTime }}</small>
		          </q-item-label>
			    	</div>
		    	</div>
        </q-item-section>

        <q-item-section side>
          <div class="row">
          <q-btn
          @click.stop="showEditTask = true"
            flat
            dense
            color="primary"
            round
            icon="edit" />
            <q-btn
          @click.stop="promptToDelete(id)"
            flat
            dense
            color="red"
            round
            icon="delete_forever" />
            </div>
        </q-item-section>

        <q-dialog v-model="showEditTask">
            <edit-task
            @close="showEditTask = false"
            :task="task"
            :id="id"></edit-task>
        </q-dialog>
		  </q-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props:['task','id'],
  data(){
    return {
      showEditTask: false
    }
  },
  methods:{
    ...mapActions('tasks', ['updateTask','deleteTask']),
    promptToDelete(id){
      this.$q.dialog({
        title: 'Confirm',
        message: 'Delete?',
        ok: {
          push: true
        },
        cancel: {
          push: true,
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  },
  components:{
    'edit-task': require('../Modals/EditTask').default
  }
}
</script>

<style>

</style>
