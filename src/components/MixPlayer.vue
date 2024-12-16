<template>
  <div class="tw-grid tw-grid-cols-4 tw-gap-2 tw-px-[40px] tw-mb-5">
    <q-card
      v-for="mix in mixes"
      :key="mix.id"
      class="tw-group tw-mr-2 tw-mt-1 tw-h-[64px] tw-relative tw-flex tw-items-center tw-overflow-hidden tw-cursor-pointer tw-bg-gray-400/30"
      flat
      bordered
    >
      <q-card-section
        class="tw-flex tw-items-center tw-justify-between tw-w-full tw-p-0"
      >
        <div class="tw-flex tw-items-center">
          <q-img
            class="tw-h-[64px] tw-w-[64px] tw-object-cover"
            :src="mix.img"
          />

          <q-card-section
            class="tw-mx-4 tw-text-left tw-flex tw-items-center tw-text-white tw-font-medium"
          >
            {{ mix.title }}
          </q-card-section>
        </div>
        <q-btn
          class="tw-bg-green-500 tw-w-11 tw-h-11 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-shadow-lg tw-opacity-0 group-hover:tw-opacity-100 hover:tw-scale-105 tw-transition-all tw-duration-90 tw-mr-2"
          flat
          :icon="isPlaying ? 'pause' : 'play_arrow'"
          @click="player"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isPlaying = ref(false);

const player = () => {
  isPlaying.value = !isPlaying.value;
};

const mixes = [
  {
    id: 1,
    title: "Daily Mix 4",
    img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/3/ab6761610000e5eb13ef353589bc3866bec5a5ce/en",
  },
  {
    id: 2,
    title: "Daily Mix 4",
    img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/3/ab6761610000e5eb13ef353589bc3866bec5a5ce/en",
  },
  {
    id: 3,
    title: "Daily Mix 4",
    img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/3/ab6761610000e5eb13ef353589bc3866bec5a5ce/en",
  },
  {
    id: 4,
    title: "Daily Mix 4",
    img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/3/ab6761610000e5eb13ef353589bc3866bec5a5ce/en",
  },
  {
    id: 5,
    title: "Daily Mix 4",
    img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/3/ab6761610000e5eb13ef353589bc3866bec5a5ce/en",
  },
  {
    id: 6,
    title: "Daily Mix 4",
    img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/3/ab6761610000e5eb13ef353589bc3866bec5a5ce/en",
  },
  {
    id: 7,
    title: "Daily Mix 4",
    img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/3/ab6761610000e5eb13ef353589bc3866bec5a5ce/en",
  },
  {
    id: 8,
    title: "Daily Mix 4",
    img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/3/ab6761610000e5eb13ef353589bc3866bec5a5ce/en",
  },
];
</script>
