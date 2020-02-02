import vue from 'vue'
import { uid } from 'quasar'

const state = {
tasks:{
  // 'ID1':{
  //   name:'Go to Gym',
  //   completed: false,
  //   dueDate:'2020/04/27',
  //   dueTime:'07:00'
  // },
  // 'ID2':{
  //     name:'Be rich',
  //     completed: false,
  //     dueDate:'2020/12/30',
  //     dueTime:'00:00'
  // },
  // 'ID3':{
  //     name:'Go to Canada',
  //     completed: false,
  //     dueDate:'2022/01/01',
  //     dueTime:'18:30'
  // },
}

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
  }
}

const getters = {
  tasks:(state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
