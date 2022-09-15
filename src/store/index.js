import {createStore} from "vuex";
import todoItem from "@/store/modules/todoItem";
import demoStore from "@/store/modules/demoStore";

const store = createStore({
    modules: {
        todoItem, demoStore
    }
})
export default store