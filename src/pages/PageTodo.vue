<template>
  <q-page class="q-pa-md">
		<q-list
			separator
			bordered>

		  <q-item
		  	v-for="task in tasks"
		  	:key="task.id"
		  	@click="task.completed = !task.completed"
		  	:class="!task.completed ? 'bg-amber-1' : 'bg-light-green-1'"
		  	clickable
		  	v-ripple>
		    <q-item-section side top>
		      <q-checkbox v-model="task.completed" />
		    </q-item-section>

		    <q-item-section>
		      <q-item-label
		      	:class="{ 'text-strikethrough' : task.completed }">
		      	{{ task.name }}
		      </q-item-label>
		    </q-item-section>

		    <q-item-section side>
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
		  </q-item>

		</q-list>
  </q-page>
</template>

<script>
export default {
  data(){
    return{
      tasks:[
        {
          id:1,
          name:'Go to Gym',
          completed: false,
          dueDate:'2020/04/27',
          dueTime:'07:00'
        },
        {
          id:2,
          name:'Be rich',
          completed: false,
          dueDate:'2020/12/30',
          dueTime:'00:00'
        },
        {
          id:3,
          name:'Go to Canada',
          completed: false,
          dueDate:'2022/01/01',
          dueTime:'18:30'
        },
      ]
    }
  },
}
</script>
