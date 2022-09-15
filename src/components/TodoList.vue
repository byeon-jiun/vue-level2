<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in this.fetchedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <span class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})">
          <i class="fas fa-check"></i>
        </span>
        <span v-bind:class="{textCompleted: todoItem.completed}">
          {{ todoItem.item }}
        </span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: "TodoList",
  computed: {
    ...mapGetters(['fetchedTodoItems'])
  },
/*  computed: {
    fetchedTodoItems () {
      return this.$store.getters.fetchedTodoItems;
    }
  },*/
  methods: {
    ...mapMutations({ removeTodo: 'removeItem', toggleComplete: 'toggleOneItem' })
    /*removeTodo (todoItem, index) {
      this.$store.commit('removeItem', {todoItem, index})
    },
    toggleComplete (todoItem, index) {
      this.$store.commit('toggleOneItem', {todoItem, index})
    }*/
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: limegreen;
    margin-right: 5px;
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
</style>