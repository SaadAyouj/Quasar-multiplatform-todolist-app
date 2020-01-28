const state = {
tasks:{
  'ID1':{
    name:'Go to Gym',
    completed: false,
    dueDate:'2020/04/27',
    dueTime:'07:00'
  },
  'ID2':{
      name:'Be rich',
      completed: false,
      dueDate:'2020/12/30',
      dueTime:'00:00'
  },
  'ID3':{
      name:'Go to Canada',
      completed: false,
      dueDate:'2022/01/01',
      dueTime:'18:30'
  },
}

}

const mutations = {

}

const actions = {

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
