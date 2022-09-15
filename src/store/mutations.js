const addOneItem = (state, newTodoItem) => {
    const obj = {completed: false, item: newTodoItem};
    localStorage.setItem(newTodoItem, JSON.stringify(obj));
    state.todoItems.push(obj)
}
const removeItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}
const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.item, JSON.stringify(payload.todoItem));
}
const clearTodoItem = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addOneItem, removeItem, toggleOneItem, clearTodoItem}