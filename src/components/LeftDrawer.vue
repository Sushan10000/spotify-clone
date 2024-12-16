<template>
  <q-list class="tw-bg-[#121212] tw-rounded-lg tw-m-1">
    <q-item
      class="tw-text-base tw-font-bold tw-sticky tw-top-0 tw-z-10 tw-bg-[#121212]"
    >
      <q-item-section avatar>
        <img :src="libraryIcon" class="tw-w-6 tw-h-6" @click="toggleMiniMode" />
      </q-item-section>
      <q-item-section
        v-if="!miniMode"
        class="tw-flex tw-flex-row tw-justify-between tw-items-center"
      >
        <div class="tw-text-bold tw-text-gray-300" @click="toggleMiniMode">
          Your Library
        </div>
        <div class="tw-flex tw-items-center">
          <q-btn flat round icon="add" class="tw-text-gray-300" />
          <q-btn flat round icon="chevron_right" class="tw-text-gray-300" />
        </div>
      </q-item-section>
    </q-item>
    <q-item
      v-if="!miniMode"
      class="tw-sticky tw-top-12 tw-z-10 tw-bg-[#121212]"
    >
      <q-item-section class="tw-flex tw-flex-row tw-justify-between tw-w-full">
        <div class="tw-flex tw-gap-2 tw-items-center">
          <q-btn
            v-if="selectedFilter !== 'All'"
            flat
            round
            dense
            icon="close"
            class="tw-text-gray-300"
            @click="clearFilter"
          />
          <q-chip
            v-for="drawerNav in drawerNavs"
            :key="drawerNav"
            :label="drawerNav"
            rounded
            clickable
            :color="selectedFilter === drawerNav ? 'primary' : 'secondary'"
            text-color="white"
            @click="filterContent(drawerNav)"
          />
        </div>
      </q-item-section>
    </q-item>
    <q-item v-if="!miniMode">
      <q-item-section
        class="tw-flex tw-flex-row tw-justify-between tw-items-center"
      >
        <div class="tw-flex tw-items-center">
          <q-btn flat round icon="search" class="tw-text-gray-300" />
        </div>
        <q-btn flat class="tw-text-gray-300" icon="list" label="Recents" />
      </q-item-section>
    </q-item>
    <q-item
      clickable
      v-for="playlistList in filteredPlaylists"
      :key="playlistList.id"
      @click="router.push(`/playlist/${playlistList.id}`)"
    >
      <q-item-section avatar>
        <img :src="playlistList.img" alt="Image here" class="!tw-w-12 !tw-h-12 tw-rounded-lg" />
      </q-item-section>
      <q-item-section v-if="!miniMode">
        {{ playlistList.title }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  mini: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const emit = defineEmits(["open"]);

const handler = ref(props.mini)

const miniMode = ref(false);

const drawerNavs = ref(["Playlist", "Artist", "Album"]);

const selectedFilter = ref("All");

const playlistLists = ref([
  {
    id: 1,
    title: "Liked Songs",
    img: new URL("../assets/images/liked-inactive.png", import.meta.url).href,
    type: "playlist",
  },
  {
    id: 2,
    title: "Daily Mix 1",
    img: new URL("../assets/images/liked-inactive.png", import.meta.url).href,
    type: "playlist",
  },
  {
    id: 3,
    title: "Rock Classics",
    img: new URL("../assets/images/liked-inactive.png", import.meta.url).href,
    type: "playlist",
  },
  {
    id: 4,
    title: "Chill Vibes",
    img: new URL("../assets/images/liked-inactive.png", import.meta.url).href,
    type: "playlist",
  },
  {
    id: 5,
    title: "Purna Rai",
    img: "https://i.scdn.co/image/ab67616100005174e9f3b9cee3b22d742adf7d1c",
    type: "artist",
  },
  {
    id: 6,
    title: "Top Hits 2024",
    img: new URL("../assets/images/liked-inactive.png", import.meta.url).href,
    type: "playlist",
  },
  {
    id: 7,
    title: "!Seven",
    img: "https://mosaic.scdn.co/300/ab67616d00001e022ec5e79d6c36d5dc62fcdf36ab67616d00001e0240b0f57a4e93e6ba5ba50c21ab67616d00001e024ccaeba1bbdcc4e214ae8e92ab67616d00001e0260209e39f19991a7b1b58c29",
  },
  {
    id: 8,
    title: "Daily Mix 5",
    img: new URL("../assets/images/liked-inactive.png", import.meta.url).href,
    type: "playlist",
  },
  {
    id: 9,
    title: "Daily Mix 4",
    img: new URL("../assets/images/liked-inactive.png", import.meta.url).href,
    type: "playlist",
  },
  {
    id: 10,
    title: "Might Delete Later",
    img: "https://i.scdn.co/image/ab67616d00001e02b5e99d6177971707e6cd04f5",
    type: "album",
  },
]);

const filterContent = (drawerNav) => {
  selectedFilter.value = drawerNav;
};

const clearFilter = () => {
  selectedFilter.value = "All";
};

const toggleMiniMode = () => {
  miniMode.value = !miniMode.value;
  emit("open", miniMode.value);
};

const libraryIcon = computed(() => {
  return miniMode.value
    ? new URL("../assets/images/library-inactive.png", import.meta.url).href
    : new URL("../assets/images/library-active.png", import.meta.url).href;
});

const filteredPlaylists = computed(() => {
  if (selectedFilter.value === "All") return playlistLists.value;
  return playlistLists.value.filter(
    (item) => item.type?.toLowerCase() === selectedFilter.value.toLowerCase()
  );
});

onMounted(() => {
  miniMode.value = props.mini;
});
</script>
