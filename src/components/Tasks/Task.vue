<template>
  <q-item
		  	@click="updateTask({ id: id, updates:{ completed: !task.completed } })"
		  	:class="!task.completed ? 'bg-amber-1' : 'bg-light-green-1'"
        v-touch-hold:1000.mouse="showEditTaskModal"
		  	clickable
		  	v-ripple>
		    <q-item-section side top>
		      <q-checkbox
            :value="task.completed"
            class="no-pointer-events" />
		    </q-item-section>

		    <q-item-section>
		      <q-item-label
		      	:class="{ 'text-strikethrough' : task.completed }"
            v-html="$options.filters.searchHighlight(task.name, search)">
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
		          	{{ task.dueDate | niceDate }}
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
          @click.stop="showEditTaskModal"
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
import { mapState, mapActions } from 'vuex'
import { date } from 'quasar'
const { addToDate } = date

export default {
  props:['task','id'],
  data(){
    return {
      showEditTask: false
    }
  },
  computed: {
    ...mapState('tasks', ['search'])
  },
  methods:{
    ...mapActions('tasks', ['updateTask','deleteTask']),
    showEditTaskModal() {
      this.showEditTask = true
    },
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
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, 'MMM DD')
    },
    searchHighlight(value, search){
      if(search){
        let searchRegExp = new RegExp(search, 'ig')
        return value.replace(searchRegExp, (match) => {
          return '<span class="bg-yellow-6">' + match + '</span>'
        })
      }
      return value
    }
  }
}
</script>

<style>

</style>
