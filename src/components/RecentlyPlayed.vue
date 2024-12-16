<template>
  <div class="tw-mt-2 tw-px-[40px]">
    <div class="tw-text-white tw-text-2xl tw-text-left tw-font-bold tw-mb-2">
      Recently Played
    </div>
    <div class="tw-grid tw-grid-cols-5 tw-gap-2 tw-mx-[-12px]">
      <q-card
        class="tw-group tw-bg-transparent hover:tw-bg-gray-800 tw-p-[12px] tw-rounded-lg tw-cursor-pointer tw-relative"
        v-for="madeForList in madeForLists"
        :key="madeForList.id"
      >
        <div class="tw-relative">
          <img
            :src="madeForList.img"
            class="!tw-rounded-lg tw-aspect-square tw-object-cover"
          />

          <div
            class="tw-absolute tw-bottom-2 tw-right-2 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300"
          >
            <q-btn
              class="tw-bg-green-500 tw-w-12 tw-h-12 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-shadow-lg hover:tw-scale-105 tw-transition-transform"
              flat
              size="md"
              :icon="isPlaying ? 'pause' : 'play_arrow'"
              @click="player"
            />
          </div>
        </div>

        <q-card-section>
          <div class="tw-font-semibold tw-text-white tw-truncate">
            {{ madeForList.info }}
          </div>
          <div class="tw-text-sm tw-text-white">Artist</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isPlaying = ref(false);

const player = () => {
  isPlaying.value = !isPlaying.value;
};

const madeForLists = [
  {
    id: 1,
    img: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ==",
    info: "Your weekly mixtape of fresh music",
  },
  {
    id: 2,
    img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/1/ab6761610000e5ebcc1b96a354e2088071c5aec5/en",
    info: "Your weekly mixtape of fresh music",
  },
  {
    id: 3,
    img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/2/ab6761610000e5ebfb35b58efb008a08151132f5/en",
    info: "Your weekly mixtape of fresh music",
  },
  {
    id: 4,
    img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/6/ab6761610000e5eb4293385d324db8558179afd9/en",
    info: "Your weekly mixtape of fresh music",
  },
];
</script>
