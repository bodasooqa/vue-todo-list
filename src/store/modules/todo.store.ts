import { Actions, Getters, Module, Mutations, createMapper } from 'vuex-smart-module';

class TodoState {
  counter = 10;
}

// Getters
class TodoGetters extends Getters<TodoState> {
  get double() {
    return this.state.counter * 2;
  }
}

// Mutations
class TodoMutations extends Mutations<TodoState> {
  incrementBy(payload: number) {
    this.state.counter += payload;
  }
}

// Actions
class TodoActions extends Actions<TodoState, TodoGetters, TodoMutations, TodoActions> {

}

export const todoModule = new Module({
  state: TodoState,
  getters: TodoGetters,
  mutations: TodoMutations,
  actions: TodoActions
});

export const todoMapper = createMapper(todoModule);