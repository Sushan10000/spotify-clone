<template>
  <q-layout view="hHh LpR fFf" class="tw-bg-black">
    <q-header class="tw-text-white">
      <q-toolbar class="tw-flex tw-items-center tw-justify-between">
        <SearchBar />
      </q-toolbar>
    </q-header>

    
    <q-drawer
      v-model="leftDrawerOpen"
      :mini="miniMode"
      show-if-above
      bordered
      class="tw-bg-[#121212] tw-text-white"
    >
      <!-- Drawer Content -->
      <LeftDrawer
        :mini="miniMode"
        @open="
          (val) => {
            miniMode = val;
          }
        "
      />
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="tw-bg-[#121212] tw-text-white">
      <q-toolbar>
        <PlayBar />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import LeftDrawer from "src/components/LeftDrawer.vue";
import SearchBar from "src/components/SearchBar.vue";
import PlayBar from "src/components/PlayBar.vue";
import { computed, ref } from "vue";

const leftDrawerOpen = ref(true);

const miniMode = ref(true);
</script>
