
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
const state = {
    todoItems: storage.fetch()
}

const getters = {
    fetchedTodoItems(state) {
        return state.todoItems;
    }
}

const mutations = {
    addOneItem (state, newTodoItem) {
        const obj = {completed: false, item: newTodoItem};
        localStorage.setItem(newTodoItem, JSON.stringify(obj));
        state.todoItems.push(obj)
    },
    removeItem (state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem (state, payload) {
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.item, JSON.stringify(payload.todoItem));
    },
    clearTodoItem (state) {
        localStorage.clear();
        state.todoItems = [];
    }
}


export default {
    state, getters, mutations
}