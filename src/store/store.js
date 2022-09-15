import {createStore} from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'

const storage = {
    fetch () {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
}

const store = createStore({
    state: {
        todoItems: storage.fetch()
    },
    getters,
    mutations
})

export default store
