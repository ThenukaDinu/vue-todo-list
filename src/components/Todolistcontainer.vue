<template>
  <v-container v-if="loading" style="text-align:center">
    <v-progress-circular :size="100" :width="7" color="blue" indeterminate></v-progress-circular>
  </v-container>
  <v-container v-else style="max-width: 700px">
    <Alert v-bind:alertType="alertType" v-bind:alertMsg="alertMsg" v-bind:alert="alert" />
    <v-container style="max-width: 500px">
      <SearchTodo v-bind:newTask="newTask" @create="createTodo" />
      <h2 class="display-1 success--text pl-4">
        Tasks:&nbsp;
        <v-fade-transition leave-absolute>
          <span :key="`tasks-${tasks.length}`">{{ tasks.length }}</span>
        </v-fade-transition>
      </h2>
      <v-divider class="mt-4"></v-divider>
      <v-row class="my-1" align="center">
        <strong class="mx-4 info--text text--darken-2">Remaining: {{ remainingTasks }}</strong>
        <v-divider vertical></v-divider>
        <strong class="mx-4 success--text text--darken-2">Completed: {{ completedTasks }}</strong>
        <v-spacer></v-spacer>
        <v-progress-circular :value="progress" class="mr-2"></v-progress-circular>
      </v-row>
      <v-divider class="mb-4"></v-divider>
      <v-card v-if="tasks.length > 0">
        <v-slide-y-transition class="py-0" group tag="v-list">
          <template v-for="(task, i) in tasks">
            <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>
            <Todo :key="i" v-bind:task="task" @remove="removeTodo" @update="updateTodo" />
          </template>
        </v-slide-y-transition>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import TodoAPI from "../services/TodoAPI";
import Todo from "@/components/Todo";
import Alert from "@/components/Alert";
import SearchTodo from "@/components/SearchTodo";

export default {
  name: "TodoList",
  components: {
    Todo,
    Alert,
    SearchTodo
  },
  data: () => ({
    tasks: [],
    newTask: null,
    loading: true,
    alert: false,
    alertMsg: "",
    alertType: ""
  }),
  computed: {
    completedTasks() {
      return this.tasks.filter(task => task.completed).length;
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    }
  },
  methods: {
    createTodo(newTask) {
      const newTodo = {
        title: newTask,
        completed: false
      };
      TodoAPI.addTodo(newTodo)
        .then(res => {
          this.tasks.push(res.data);
          this.showAlert("success", "New task added successfully");
        })
        .catch(err => {
          this.showAlert("error", "Sorry something wrong, please try again");
          console.log(err);
        });

      this.newTask = null;
    },
    fetchTodos() {
      TodoAPI.fetchTodos()
        .then(res => {
          this.tasks = res.data;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          this.showAlert("error", "Sorry something wrong, please try again");
          console.log(err);
        });
    },
    removeTodo(id) {
      TodoAPI.removeTodo(id)
        .then(() => {
          this.tasks = this.tasks.filter(todo => todo.id !== id);
          this.showAlert("success", "Task removed successfully");
        })
        .catch(err => {
          this.showAlert("error", "Sorry something wrong, please try again");
          console.log(err);
        });
    },
    updateTodo(todo) {
      TodoAPI.updateTodo(todo).catch(err => {
        this.showAlert("error", "Sorry something wrong, please try again");
        this.fetchTodos();
        console.log(err);
      });
    },
    showAlert(type, msg) {
      this.alertMsg = msg;
      this.alertType = type;
      this.alert = true;
      setTimeout(() => (this.alert = false), 5000);
    }
  },
  mounted() {
    this.fetchTodos();
  }
};
</script>

<style>
.v-progress-circular {
  margin: 2rem;
}
</style>
