<style type="text/css">
  .boards-container {
    overflow-y: scroll;
    width: 100%;
  }

  .boards-container .board-container {
    width: 400px;
    padding: 5px 15px;
    vertical-align: top;
    display: inline-block;
    border: 1px solid #ddd;    
    margin: 10px 10px 10px 0;
  }
</style>

<template>
  <div>
    <h3 class="new-board">
      Add board named <textEntry placeholder="Add a board" @enter="addBoard"/>
    </h3>

    <div class="boards-container">
      <div class="board-container" v-for="board in boards" :key="board.id">
        <board :board="board" @delete="deleteBoard" />
      </div>
    </div>    
  </div>

</template>

<script>
import Board from "./Board";
import TextEntry from "./UI/TextEntry";

export default {
  name: "boardCanvas",
  components: {
    Board,
    TextEntry
  },

  props: {
    boards: Array
  },

  methods: {
    addBoard({ text }) {
      this.$store.dispatch("addBoard", { name: text });
    },

    deleteBoard({ id }) {
      this.$store.dispatch("deleteBoard", { boardId: id });
    }
  }
};
</script>