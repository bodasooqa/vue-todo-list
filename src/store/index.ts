import Vue from 'vue'
import Vuex from 'vuex'
import { createStore } from "vuex-smart-module";
import { todoModule } from "@/store/modules/todo.store";

Vue.use(Vuex)

export const store = createStore(
  todoModule
)
