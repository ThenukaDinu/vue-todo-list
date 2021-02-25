<template>
  <div>
    <v-list-item>
      <v-list-item-action>
        <v-btn
          class="mx-7"
          icon
          absolute
          right
          @click="$emit('remove', task.id)"
          style="bottom: 5px"
        >
          <v-icon size="24px" color="red">mdi-delete</v-icon>
        </v-btn>

        <v-checkbox
          v-model="task.completed"
          :color="(task.completed && 'grey') || 'primary'"
          @click="$emit('update', task)"
        >
          <template v-slot:label>
            <div
              :class="(task.completed && 'grey--text') || 'primary--text'"
              class="ml-4"
              v-text="task.title"
            ></div>
          </template>
        </v-checkbox>
      </v-list-item-action>

      <v-spacer></v-spacer>

      <v-scroll-x-transition>
        <v-icon v-if="task.completed" color="success">mdi-check</v-icon>
      </v-scroll-x-transition>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["task"]
};
</script>

<style></style>
