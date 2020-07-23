import { Actions, Getters, Module, Mutations } from 'vuex-smart-module';

class TodoState {
  counter: number = 10;
}

class TodoGetters extends Getters<TodoState> {
  get double() {
    return this.state.counter * 2;
  }
}

class TodoMutations extends Mutations<TodoState> {
  incrementBy(payload: number) {
    this.state.counter += payload;
  }
}

class TodoActions extends Actions<TodoState, TodoGetters, TodoMutations, TodoActions> {

}

export const todoModule = new Module({
  state: TodoState,
  getters: TodoGetters,
  mutations: TodoMutations,
  actions: TodoActions
})