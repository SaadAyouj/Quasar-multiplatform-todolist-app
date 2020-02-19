import vue from 'vue'
import { uid } from 'quasar'

const state = {
  tasks:{
    // 'TMLumqFAEJPD5BA1vVJWiK4tVo03:': {
    //   'ID1':{
    //       name:'Go to Gym',
    //       completed: false,
    //       dueDate:'2020/04/27',
    //       dueTime:'07:00'
    //   },
    //   'ID2':{
    //       name:'Be rich',
    //       completed: false,
    //       dueDate:'2020/12/30',
    //       dueTime:'00:00'
    //   },
    //   'ID3':{
    //       name:'Go to Canada',
    //       completed: false,
    //       dueDate:'2022/01/01',
    //       dueTime:'18:30'
    //   }
    // }
  },
  search: '',
  sort: 'dueDate'

}

const mutations = {
  updateTask(state, payload){
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id){
    vue.delete(state.tasks, id)
  },
  addTask(state, payload) {
    vue.set(state.tasks, payload.id, payload.task)
  },
  setSearch(state, value) {
    state.search = value
  },
  setSort(state, value) {
    state.sort = value
  }
}

const actions = {
  updateTask({ commit }, payload){
    commit('updateTask', payload);
  },
  deleteTask({ commit }, id) {
    commit('deleteTask', id)
  },
  addTask({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  },
  setSearch({ commit }, value) {
    commit('setSearch', value)
  },
  setSort({ commit }, value) {
    commit('setSort', value)
  }
}

const getters = {
  tasksSorted: (state) => {
    let tasksSorted = {},
        keysOrdred = Object.keys(state.tasks)

    keysOrdred.sort((a,b) => {
      let taskAProp = state.tasks[a][state.sort].toLowerCase(),
          taskBProp = state.tasks[b][state.sort].toLowerCase()

      if (taskAProp > taskBProp) return 1
      else if (taskAProp < taskBProp) return -1
      else return 0
    })

    keysOrdred.forEach((key)=> {
      tasksSorted[key] = state.tasks[key]
    })

    return tasksSorted
  },
  tasksFiltred: (state, getters) => {
    let tasksSorted = getters.tasksSorted,
        tasksFiltred = {}
    if (state.search) {
      Object.keys(tasksSorted).forEach(function(key) {
        let task = tasksSorted[key],
            taskNameLowerCase = task.name.toLowerCase(),
            searchLowerCase = state.search.toLowerCase()
        if (taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltred[key] = task
        }
      })
      return tasksFiltred
    }
    return tasksSorted
  },
  tasksTodo:(state, getters) => {
    let tasksFiltred = getters.tasksFiltred
    let tasks = {}
    Object.keys(tasksFiltred).forEach(function(key) {
      let task = tasksFiltred[key]
      if(!task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  },
  tasksCompleted:(state, getters) => {
    let tasksFiltred = getters.tasksFiltred
    let tasks = {}
    Object.keys(tasksFiltred).forEach(function(key) {
      let task = tasksFiltred[key]
      if(task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
