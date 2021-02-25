<template>
  <v-text-field
    v-model="newTask"
    label="What are you working on?"
    solo
    @keydown.enter="sendSrchVal($event.target.value)"
  >
    <template v-slot:append>
      <v-fade-transition>
        <v-icon v-if="newTask" @click="sendSrchVal(newTask)">add task</v-icon>
      </v-fade-transition>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: "SearchTodo",
  data() {
    return {
      newTask: null
    };
  },
  methods: {
    sendSrchVal(val) {
      this.newTask.trim() !== "" &&
        this.newTask !== null &&
        this.$emit("create", val);
        this.newTask = null;
    }
  }
};
</script>

<style>
</style>