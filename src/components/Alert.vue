<template>
  <v-alert
    :type="alertType"
    dismissible
    dense
    transition="slide-x-transition"
    :value="alert"
  >{{ alertMsg }}</v-alert>
</template>

<script>
export default {
  name: "Alert",
  props: ["alertType", "alertMsg", "alert"]
};
</script>

<style>
</style>