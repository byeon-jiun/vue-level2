<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <SlotModalLayout v-if="showModal">
      <template v-slot:header>
        <h3>알림
          <i class="fas fa-times closeModalBtn" v-on:click="showModal = false"></i>
        </h3>
      </template>
      <template v-slot:main>
        <h5>값을 입력해주세요.</h5>
      </template>
    </SlotModalLayout>
  </div>
</template>

<script>
import SlotModalLayout from './common/SlotModalLayout.vue'
export default {
  name: "TodoInput",
  data () {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem !== '') {
        this.$store.commit('addOneItem', this.newTodoItem)
        this.clearInput();
      } else {
        this.showModal = !this.showModal
      }
    },
    clearInput: function () {
      this.newTodoItem = '';
    }
  },
  components: {
    SlotModalLayout
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background-color: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
  .closeModalBtn {
    color: black;
  }
</style>