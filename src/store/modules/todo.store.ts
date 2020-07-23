import { Actions, createMapper, Getters, Module, Mutations } from 'vuex-smart-module';
import { ITodo } from "@/types";

class TodoState {
  todos: ITodo[] = [];
}

// Getters
class TodoGetters extends Getters<TodoState> {
  get todos() {
    return this.state.todos;
  }
}

// Mutations
class TodoMutations extends Mutations<TodoState> {
  setTodos(payload: ITodo[]) {
    this.state.todos = payload;
  }

  rmTodoById(payload: number) {
    this.state.todos = this.state.todos.filter(item => item.id !== payload);
  }
}

// Actions
class TodoActions extends Actions<TodoState, TodoGetters, TodoMutations, TodoActions> {
  async getTodos(limit = 5) {
    const todos = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
    this.commit('setTodos', await todos.json());
  }
}

export const todoModule = new Module({
  state: TodoState,
  getters: TodoGetters,
  mutations: TodoMutations,
  actions: TodoActions
});

export const todoMapper = createMapper(todoModule);