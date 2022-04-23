<template>
  <div class="greetings">
    <div class="text-white text-center text-3xl">{{ msg }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WelcomeTitle",
  props: {
    msg: String,
  },
});
</script>
