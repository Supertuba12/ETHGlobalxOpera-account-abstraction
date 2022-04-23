<template>
  <div class="flex flex-col h-screen justify-between">
    <header class="w-full">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/operaLogo.svg"
        width="125"
        height="125"
      />
    </header>
    <div class="flex-grow">
      <GuardianComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import GuardianComponent from "@/components/GuardianComponent.vue";
</script>

<style scoped></style>
