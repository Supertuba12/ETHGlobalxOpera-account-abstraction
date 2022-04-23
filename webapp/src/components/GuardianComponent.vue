<template>
  <div
    class="bg-gray-dark shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8 flex flex-col"
  >
    <div class="mb-4">
      <label class="block text-white text-sm font-bold mb-2" for="username">
        Add guardians
      </label>
      <p class="text-gray">
        In the case that you need to transfer the ownership of your wallet, your
        guardians will be asked to approve the transfer. Having multiple and
        trusted guardians is recommended to safeguard your wallet from malicious
        attempts to transfer your wallet ownership.
      </p>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark"
        id="guardians"
        type="text"
        placeholder="guardians"
        required
        v-model="guardians"
      />
    </div>
    <div class="mb-6"></div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        type="button"
        v-on:click="next"
      >
        Next
      </button>
      <button
        class="hover:bg-blue-dark text-black font-bold py-2 px-4 rounded border-width-1 border-color-blue"
        type="button"
        v-on:click="skip"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { userService } from "@/services/user.service";
import router from "@/router";
export default defineComponent({
  name: "GuardianComponent",
  data() {
    return {
      guardians: [],
    };
  },
  methods: {
    next() {
      userService
        .addGuardians(this.currentUser(), this.guardians)
        .then(() => {
          this.guardiansRegistered();
          router.replace("/");
        })
        .catch((e) => {
          console.error(e);
        });
    },
    guardiansRegistered() {
      this.$store.dispatch("updateGuardians", {
        guardians: this.guardians,
      });
    },
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
});
</script>
