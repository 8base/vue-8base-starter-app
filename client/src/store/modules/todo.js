import Vue from "vue";
import Vuex from "vuex";

import * as gql from "@/utils/graphql";
import graphqlClient from "@/utils/api";

Vue.use(Vuex);
/**
 * ToDo getters.
 */
export const getters = {
  /**
   * Getter for retrieving boards stored in state.
   *
   * (See src/views/Home.vue)
   */
  boards: state => state.boards
};

/**
 * State maintains the applications state using Vuex.
 *
 * @typedef {boards:array[]} State
 */
export const state = {
  boards: []
};
/**
 * Todo mutations.
 */
export const mutations = {
  /**
   * setBoards updates the Vuex state for boards.
   */
  setBoards(state, boards) {
    state.boards = boards;
  }
};
/**
 * ToDo actions.
 */
export const actions = {
  /**
   * fetchBoards queries the 8base API for all boards
   * belonging to the authenticated user. The response
   * items are committed to state.boards.
   */
  async fetchBoards({ commit }) {
    const response = await graphqlClient.query({
      query: gql.GET_BOARDS_QUERY,
      fetchPolicy: "network-only"
    });

    commit("setBoards", response.data.boardsList.items);
  },
  /**
   * addBoard sends a mutation to the 8base API for a new
   * board belonging to the authenticated user. Afterwards,
   * the state re-fetches the user's boards.
   */
  async addBoard({ dispatch }, board) {
    await graphqlClient.mutate({
      mutation: gql.CREATE_BOARD_MUTATION,
      variables: {
        name: board.name
      }
    });

    dispatch("fetchBoards");
  },
  /**
   * addTodo sends a mutation to the 8base API for a new
   * todo belonging to a given board. Afterwards,
   * the state re-fetches the user's boards.
   */
  async addTodo({ dispatch }, todo) {
    await graphqlClient.mutate({
      mutation: gql.CREATE_TODO_MUTATION,
      variables: {
        description: todo.description,
        boardId: todo.boardId
      }
    });
    dispatch("fetchBoards");
  },
  /**
   * updateTodo sends a mutation to the 8base API to update
   * a todo. Afterwards, the state re-fetches the user's boards.
   */
  async updateTodoStatus({ dispatch }, todo) {
    await graphqlClient.mutate({
      mutation: gql.CHANGE_TODO_STATUS_MUTATION,
      variables: {
        todoId: todo.todoId,
        status: todo.status
      }
    });
    dispatch("fetchBoards");
  },
  /**
   * deleteTodo sends a mutation to the 8base API to delete a
   * a todo item. Afterwards, the state re-fetches the user's boards.
   */
  async deleteTodo({ dispatch }, todo) {
    await graphqlClient.mutate({
      mutation: gql.DELETE_TODO_MUTATION,
      variables: {
        todoId: todo.todoId
      }
    });
    dispatch("fetchBoards");
  },
  /**
   * deleteBoard sends a mutation to the 8base API to delete a
   * a todo item. Afterwards, the state re-fetches the user's boards.
   */
  async deleteBoard({ dispatch }, board) {
    await graphqlClient.mutate({
      mutation: gql.DELETE_BOARD_MUTATION,
      variables: {
        boardId: board.boardId
      }
    });
    dispatch("fetchBoards");
  }
};

export default {
  mutations,
  actions,
  state
};
