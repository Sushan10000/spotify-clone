<template>
  <div class="tw-flex tw-items-center tw-justify-between tw-w-full">
    <!-- Left section -->
    <div class="tw-w-[250px] tw-flex tw-items-center">
      <q-avatar square rounded class="tw-ml-4" tooltip="Spotify Home">
        <img src="../assets/images/spotify-white-icon.svg" />
      </q-avatar>
    </div>

    <!-- Center section -->
    <div
      class="tw-flex tw-items-center tw-justify-center tw-flex-1 tw-max-w-[600px] tw-mt-1 tw-mb-1"
    >
      <div class="tw-flex tw-items-center tw-w-full tw-max-w-md">
        <q-btn
          flat
          icon="home"
          class="tw-text-white tw-mr-2"
          @click="goToHome"
        />
        <q-input
          rounded
          outlined
          v-model="text"
          label="What do you want to play?"
          class="tw-w-full tw-bg-grey"
          label-color="grey"
          dark
          standout
        />
      </div>
    </div>

    <!-- Right section -->
    <div class="tw-w-[380px] tw-flex tw-items-center tw-justify-end">
      <q-btn
        rounded
        label="Explore Premium"
        class="tw-ml-4 hover:tw-scale-105 tw-bg-transparent tw-text-white tw-font-bold tw-border tw-border-gray-300 hover:tw-border-white tw-transition-all"
      />
      <q-btn
        flat
        icon="download"
        class="tw-ml-4 tw-text-gray-300 hover:tw-text-white tw-transition-colors"
      />
      <q-btn
        flat
        icon="notifications"
        class="tw-ml-4 tw-text-gray-300 hover:tw-text-white tw-transition-colors"
      />

      <q-btn
        flat
        round
        size="md"
        class="tw-ml-4 hover:tw-bg-[#282828] tw-transition-colors"
      >
        <q-avatar class="tw-bg-[#282828]">
          <span class="tw-text-white">S</span>
        </q-avatar>
        <q-menu v-model="menu" anchor="bottom right" self="top right">
          <q-list class="tw-bg-[#282828] tw-text-white tw-w-[196px] tw-py-1">
            <q-item
              clickable
              v-ripple
              @click="onProfileClick"
              class="hover:tw-bg-[#3E3E3E] tw-transition-colors"
            >
              <q-item-section>Account</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              @click="onProfileClick"
              class="hover:tw-bg-[#3E3E3E] tw-transition-colors"
            >
              <q-item-section>Profile</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              @click="onProfileClick"
              class="hover:tw-bg-[#3E3E3E] tw-transition-colors"
            >
              <q-item-section>Upgrade to Premium</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              @click="onSettingsClick"
              class="hover:tw-bg-[#3E3E3E] tw-transition-colors"
            >
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              @click="onLogoutClick"
              class="tw-border-t-[1px] tw-border-gray-700 hover:tw-bg-[#3E3E3E] tw-transition-colors tw-mt-1"
            >
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const text = ref("");

const goToHome = () => {
  router.push("/");
};
const onProfileClick = () => console.log("Profile clicked");
const onSettingsClick = () => console.log("Settings clicked");
const onLogoutClick = () => console.log("Logged out");
</script>

<style lang="scss" scoped>
:deep(.q-field__native) {
  color: white;
}
</style>
