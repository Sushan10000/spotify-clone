<template>
  <div class="tw-mt-2 tw-px-[40px]">
    <div class="tw-grid tw-grid-cols-3 tw-gap-4">
      <q-card
        v-for="madeForList in madeForLists"
        :key="madeForList.id"
        class="tw-group tw-bg-red-900 tw-p-[12px] tw-rounded-lg tw-cursor-pointer tw-relative tw-overflow-hidden"
      >
        <q-card-section>
          <div class="text-sm text-white">{{ madeForList.info }}</div>
          <div class="text-sm text-grey">Episode. Luffy</div>
        </q-card-section>

        <img
          :src="madeForList.img"
          class="tw-aspect-square tw-w-full !tw-rounded-lg tw-scale-75 tw-mx-auto tw-transition-transform tw-transform group-hover:tw-scale-50 tw-mt-[-45px] tw-mb-3"
        />
        <q-card-section
          class="tw-flex-rows tw-absolute tw-bottom-[-50px] tw-left-0 tw-right-0 tw-transition-all group-hover:tw-bottom-0"
        >
          <div class="text-sm text-white">WWWWW</div>
          <div class="text-sm text-grey">Episode. Luffy</div>
          <q-card-actions class="tw-flex tw-justify-end">
            <q-btn
              flat
              color="white"
              icon="add"
              class="tw-mr-2"
              @click="addBtnClick"
            />
            <q-btn
              flat
              label="Go to Episode"
              color="white"
              class="tw-w-auto"
              @click="goToEpClick"
            />
          </q-card-actions>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
const madeForLists = [
  {
    id: 1,
    img: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ==",
    info: "Your weekly mixtape of fresh music",
    bg: "blue-300",
  },
  {
    id: 2,
    img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/1/ab6761610000e5ebcc1b96a354e2088071c5aec5/en",
    info: "Your weekly mixtape of fresh music",
    bg: "red-300",
  },
  {
    id: 3,
    img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/2/ab6761610000e5ebfb35b58efb008a08151132f5/en",
    info: "Your weekly mixtape of fresh music",
    bg: "yellow-300",
  },
  {
    id: 4,
    img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/6/ab6761610000e5eb4293385d324db8558179afd9/en",
    info: "Your weekly mixtape of fresh music",
    bg: "black",
  },
];

const addBtnClick = () => {
  console.log("Add Clicked");
};
const goToEpClick = () => {
  console.log("GO to Clicked");
};
</script>
