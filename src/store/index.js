import Vue from 'vue'
import Vuex from 'vuex'
import films from './index/films'
import cinemas from './cinema/index'
import detail from './detail'
import city from './city'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    films,
    cinemas,
    detail,
    city
  }
})
