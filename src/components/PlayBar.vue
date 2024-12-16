<template>
  <div class="tw-flex tw-items-center tw-justify-between tw-w-full tw-px-4">
    <!-- Left section-->
    <div class="tw-w-[250px] tw-flex tw-items-center tw-gap-4">
      <div class="tw-cursor-pointer">
        <img
          src="https://i.scdn.co/image/ab67616d00001e02b5e99d6177971707e6cd04f5"
          class="tw-w-14 tw-h-14 tw-rounded-lg"
          @click="playerClick"
        />
      </div>
      <div class="tw-flex tw-flex-col">
        <div
          class="tw-text-white tw-font-medium hover:tw-underline tw-cursor-pointer"
          @click="onSongClick"
        >
          Might Delete Later
        </div>
        <div
          class="tw-text-gray-400 tw-text-sm hover:tw-underline tw-cursor-pointer"
          @click="onArtistClick"
        >
          J. Cole
        </div>
      </div>
    </div>

    <!-- Center section -->
    <div class="tw-flex tw-flex-col tw-items-center tw-flex-1 tw-max-w-[600px]">
      <div class="tw-flex tw-items-center">
        <q-btn
          flat
          round
          icon="shuffle"
          class="tw-text-gray-400"
          @click="onShuffle"
        />
        <q-btn
          flat
          round
          icon="skip_previous"
          class="tw-text-white"
          size="md"
          @click="onPrevious"
        />
        <q-btn
          flat
          round
          icon="play_circle"
          class="tw-text-white"
          size="lg"
          @click="onPlayPause"
        />
        <q-btn
          flat
          round
          icon="skip_next"
          class="tw-text-white"
          size="md"
          @click="onNext"
        />
        <q-btn
          flat
          round
          icon="repeat"
          class="tw-text-gray-400"
          @click="onRepeat"
        />
      </div>
      <div class="tw-flex tw-items-center tw-w-[380px]">
        <span class="tw-text-xs tw-text-gray-400 tw-mx-2">0:00</span>
        <q-slider
          v-model="progress"
          :min="0"
          :max="100"
          class="tw-flex-1"
          dark
          @change="onSeek"
        />
        <span class="tw-text-xs tw-text-gray-400 tw-mx-2">2:50</span>
      </div>
    </div>

    <!-- Right section-->
    <div class="tw-w-[350px] tw-flex tw-items-center tw-gap-2 tw-justify-end">
      <q-btn
        flat
        round
        size="sm"
        icon="queue_music"
        class="tw-text-gray-400 hover:tw-text-white"
        @click="onQueue"
      >
        <q-tooltip>Now Playing</q-tooltip>
      </q-btn>
      <q-btn
        flat
        round
        size="sm"
        icon="lyrics"
        class="tw-text-gray-400 hover:tw-text-white"
        @click="onLyrics"
      >
        <q-tooltip>Lyrics</q-tooltip>
      </q-btn>
      <q-btn
        flat
        round
        size="sm"
        icon="queue"
        class="tw-text-gray-400 hover:tw-text-white"
        @click="onQueue"
      >
        <q-tooltip>Queue</q-tooltip>
      </q-btn>
      <q-btn
        flat
        round
        size="sm"
        icon="devices"
        class="tw-text-gray-400 hover:tw-text-white"
        @click="onConnectDevice"
      >
        <q-tooltip>Connect to Device</q-tooltip>
      </q-btn>
      <div class="tw-flex tw-items-center tw-gap-2">
        <q-btn
          flat
          round
          size="sm"
          icon="volume_up"
          class="tw-text-gray-400 hover:tw-text-white"
          @click="onMute"
        >
          <q-tooltip>Volume</q-tooltip>
        </q-btn>
        <q-slider
          v-model="volume"
          :min="0"
          :max="100"
          class="tw-w-24"
          dark
          @change="onVolumeChange"
        />
      </div>
      <q-btn
        flat
        round
        size="sm"
        icon="picture_in_picture_alt"
        class="tw-text-gray-400 hover:tw-text-white"
        @click="onMiniPlayer"
      >
        <q-tooltip>Mini Player</q-tooltip>
      </q-btn>
      <q-btn
        flat
        round
        size="sm"
        icon="fullscreen"
        class="tw-text-gray-400 hover:tw-text-white"
        @click="onFullScreen"
      >
        <q-tooltip>Full Screen</q-tooltip>
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const progress = ref(0);
const volume = ref(50);

const playerClick = () => {
  console.log("playerClick");
};

const onSongClick = () => {
  console.log("Song clicked");
};

const onArtistClick = () => {
  console.log("Artist clicked");
};

const onPlayPause = () => {
  console.log("Play/Pause clicked");
};

const onPrevious = () => {
  console.log("Previous clicked");
};

const onNext = () => {
  console.log("Next clicked");
};

const onShuffle = () => {
  console.log("Shuffle clicked");
};

const onLyrics = () => {
  console.log("Lyrics clicked");
};

const onRepeat = () => {
  console.log("Repeat clicked");
};

const onConnectDevice = () => {
  console.log("Connect Device clicked");
};

const onSeek = (value) => {
  console.log("Seek to:", value);
};

const onQueue = () => {
  console.log("Queue clicked");
};

const onMute = () => {
  console.log("Mute clicked");
};

const onVolumeChange = (value) => {
  console.log("Volume changed to:", value);
};

const onMiniPlayer = () => {
  console.log("Mini clicked");
};

const onFullScreen = () => {
  console.log("Full clicked");
};
</script>
