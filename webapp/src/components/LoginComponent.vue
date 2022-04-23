<template>
  <div
    class="bg-gray-dark shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8 flex flex-col"
  >
    <div class="mb-4">
      <label class="block text-white text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark"
        id="username"
        type="text"
        placeholder="username"
        required
        v-model="username"
      />
    </div>
    <div class="mb-6">
      <label class="block text-white text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark"
        id="password"
        type="password"
        placeholder="**********"
        required
        v-model="password"
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        type="button"
        v-on:click="register"
      >
        Register
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { userService } from "@/services/user.service";
import router from "@/router";
export default defineComponent({
  name: "LoginComponent",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    register() {
      userService
        .register(this.username, this.password)
        .then(() => {
          this.userRegistered();
          router.replace("/guardians");
        })
        .catch((e) => {
          console.error(e);
        });
    },
    userRegistered() {
      this.$store.dispatch("changeUserStatus", {
        newStatus: false,
      });
    },
  },
  computed: {
    isNewUser() {
      return this.$store.getters.isNewUser;
    },
  },
});
</script>
