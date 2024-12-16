<template>
  <div
    class="tw-flex tw-flex-col tw-min-h-0 tw-m-2 tw-rounded-lg !tw-overflow-hidden tw-relative"
  >
    <div
      class="tw-flex tw-gap-4 tw-overflow-x-auto tw-mb-8 tw-px-[40px] tw-py-4"
    >
      <q-btn
        v-for="category in categories"
        :key="category.id"
        rounded
        :label="category.name"
        @click="() => handleRoute(category.route)"
        class="tw-bg-gray-400/30 tw-text-white tw-rounded-full tw-text-sm hover:tw-bg-gray-700"
      />
    </div>
    <div class="tw-flex tw-flex-col">
      <Podcast />

      <RecentlyPlayed />

      <Podcast />
    </div>
  </div>
</template>

<script setup>
import Podcast from "src/components/Podcast.vue";
import RecentlyPlayed from "src/components/RecentlyPlayed.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const categories = ref([
  {
    id: 1,
    name: "All",
    route: "/",
  },
  {
    id: 2,
    name: "Music",
    route: "/music",
  },
  {
    id: 3,
    name: "Podcast",
    route: "/podcast",
  },
]);

const handleRoute = (route) => {
  if (route) {
    router.push(route);
  }
};
</script>
