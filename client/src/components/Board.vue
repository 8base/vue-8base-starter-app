  <template>
  <section ref="list" :data-id="board.id">
    <h3>{{ board.name }} - (<a href="#" @click="onDelete">delete</a>)</h3> 

    <textEntry
      placeholder="Add a todo"
      icon="ellipsis-h"
      @enter="addTodo"
    />

    <ul class="todos" v-for="todo in board.todos.items" :key="todo.id">
      <li><todo :todo="todo" @status="updateStatus" @delete="deleteTodo" /></li>
    </ul>
  </section>
</template>

<script>
import Todo from "./Todo";
import TextEntry from "./UI/TextEntry";

export default {
  name: 'board',
  props: {
    board: Object
  },

  components: {
    Todo,
    TextEntry
  },

  methods: {
    addTodo({ text }) {
      this.$store.dispatch("addTodo", { boardId: this.board.id, description: text });
    },

    updateStatus({id, status}){
      this.$store.dispatch("updateTodoStatus", { todoId: id, status: status });
    },

    deleteTodo({ id }) {
      this.$store.dispatch("deleteTodo", { todoId: id });
    },

    onDelete() {
      this.$emit("delete", { id: this.board.id });
    }
  }
};
</script>
