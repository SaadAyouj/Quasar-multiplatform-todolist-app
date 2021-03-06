import { firebaseAuth } from 'boot/firebase'
import { LocalStorage, Loading, QSpinnerPie } from 'quasar'
import { showErrorMessage } from 'src/functions/fucntion-show-error'

const state = {
  loggedIn: false
}

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value
  }
}

const actions = {
  registerUser ({}, payload) {
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
    .then (response => {
      console.log('response :', response);

    })
    .catch (error => {
      showErrorMessage(error.message)
    })
  },
  loginUser({}, payload) {
    Loading.show({
      spinner: QSpinnerPie,
      spinnerColor: 'white',
      spinnerSize: 110,
      backgroundColor: 'teal-9',
      message: 'Redirection to your tasks. Hang on...',
      messageColor: 'grey-4'
    })
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
    .then (response => {
      console.log('response :', response);

    })
    .catch (error => {
      showErrorMessage(error.message)
    })
  },
  logoutUser() {
    firebaseAuth.signOut()
  },
  handleAuthStateChange({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide()
      if (user) {
        commit('setLoggedIn', true)
        LocalStorage.set('loggedIn', true)
        this.$router.push('/').catch(err => {})
      }
      else {
        commit('setLoggedIn', false)
        LocalStorage.set('loggedIn', false)
        this.$router.replace('/auth').catch(err => {})
      }
    });

  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
