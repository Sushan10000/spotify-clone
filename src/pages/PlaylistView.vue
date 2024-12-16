<template>
  <div
    class="tw-flex tw-flex-col tw-min-h-0 tw-m-2 tw-rounded-lg !tw-overflow-hidden tw-relative"
  >
    <div class="tw-flex tw-flex-row tw-bg-red-600 tw-p-5">
      <!-- Playlist Image -->
      <img
        :src="playlistSeven.playlist.image"
        class="tw-h-[182px] tw-w-[182px] tw-rounded-lg"
        alt="Playlist Cover"
      />
      <div class="tw-flex tw-flex-col tw-justify-center tw-ml-4">
        <!-- Playlist Details -->
        <div class="tw-text-sm tw-uppercase">Playlist</div>
        <div class="tw-text-7xl tw-font-black tw-mb-2">
          {{ playlistSeven.playlist.name }}
        </div>
        <div class="tw-text-base">
          <div class="tw-font-bold">
            {{ playlistSeven?.playlist.owner.name }}.
          </div>
          {{ playlistSeven.playlist.total_tracks }} songs, about 5 hr 20 min
        </div>
      </div>
    </div>

    <div class="tw-flex tw-flex-row tw-justify-between tw-bg-red-500">
      <!-- Play and More Buttons -->
      <div class="tw-flex tw-items-center tw-m-4">
        <div>
          <q-btn
            class="tw-bg-green-500 tw-w-14 tw-h-14 tw-rounded-full tw-shadow-lg tw-m-4"
            flat
            dense
            icon="play_arrow"
          />
        </div>
        <q-btn
          flat
          fab
          class="tw-bg-transparent tw-text-white hover:tw-bg-opacity-10 tw-m-4"
          icon="more_horiz"
        >
          <q-menu v-model="menu" anchor="bottom right" self="top right">
            <q-list
              class="tw-bg-[#121212] tw-text-white tw-w-[250px] tw-rounded-md"
            >
              <q-item clickable v-ripple @click="onAddToQueue">
                <q-item-section avatar>
                  <q-icon name="queue_music" />
                </q-item-section>
                <q-item-section>Add to queue</q-item-section>
              </q-item>

              <q-item clickable v-ripple @click="onAddToProfile">
                <q-item-section avatar>
                  <q-icon name="account_circle" />
                </q-item-section>
                <q-item-section>Add to profile</q-item-section>
              </q-item>

              <q-item clickable v-ripple @click="onEditDetails">
                <q-item-section avatar>
                  <q-icon name="edit" />
                </q-item-section>
                <q-item-section>Edit details</q-item-section>
              </q-item>

              <q-item clickable v-ripple @click="onDelete">
                <q-item-section avatar>
                  <q-icon name="delete" />
                </q-item-section>
                <q-item-section>Delete</q-item-section>
              </q-item>

              <q-item clickable v-ripple @click="onExcludeFromProfile">
                <q-item-section avatar>
                  <q-icon name="highlight_off" />
                </q-item-section>
                <q-item-section>Exclude from your taste profile</q-item-section>
              </q-item>

              <q-item clickable v-ripple @click="moveToFolder">
                <q-item-section avatar>
                  <q-icon name="folder" />
                </q-item-section>
                <q-item-section>Move to folder</q-item-section>
              </q-item>

              <q-item clickable v-ripple @click="">
                <q-item-section avatar>
                  <q-icon name="share" />
                </q-item-section>
                <q-item-section>Share</q-item-section>
              </q-item>

              <q-item clickable v-ripple @click="onOpenInDesktopApp">
                <q-item-section avatar>
                  <q-icon name="desktop_windows" />
                </q-item-section>
                <q-item-section>Open in Desktop app</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>

      <!-- List Button -->
      <div class="tw-flex tw-items-center tw-space-x-2 tw-text-white">
        <q-btn flat class="tw-m-4 tw-bg-transparent tw-text-white">
          <span class="tw-text-sm">List</span>
          <q-avatar icon="list" />
        </q-btn>
      </div>
    </div>

    <div class="tw-p-5">
      <q-table
        flat
        dark
        :rows="rows"
        :columns="columns"
        row-key="index"
        virtual-scroll
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const menu = ref(false);

const onAddToQueue = () => {
  console.log("Add to Queue clicked");
};
const onAddToProfile = () => {
  console.log("Add to Profile clicked");
};
const onEditDetails = () => {
  console.log("Edit Details clicked");
};
const onDelete = () => {
  console.log("Delete clicked");
};
const onExcludeFromProfile = () => {
  console.log("Exclude from Taste Profile clicked");
};
const moveToFolder = (folderName) => {
  console.log("Move to folder");
};
const onShare = (platform) => {
  console.log("Share");
};
const onOpenInDesktopApp = () => {
  console.log("Open in Desktop App clicked");
};

function formatDuration(durationMs) {
  const minutes = Math.floor(durationMs / 60000);
  const seconds = ((durationMs % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds.padStart(2, "0")} min`;
}

const playlistSeven = ref({
  playlist: {
    id: "37i9dQZF1DXcBWIGoYBM5M",
    name: "!Seven",
    description: "The biggest songs in the world. Updated regularly.",
    owner: {
      id: "spotify",
      name: "Spotify",
      url: "https://open.spotify.com/user/spotify",
    },
    image:
      "https://mosaic.scdn.co/300/ab67616d00001e022ec5e79d6c36d5dc62fcdf36ab67616d00001e0240b0f57a4e93e6ba5ba50c21ab67616d00001e024ccaeba1bbdcc4e214ae8e92ab67616d00001e0260209e39f19991a7b1b58c29",
    followers: 29032451,
    public: true,
    tracks: [
      {
        id: "3FAJ6O0NOHQV8Mc5Ri6ENp",
        name: "Blinding Lights",
        artists: [
          {
            id: "1Xyo4u8uXC1ZmMpatF05PJ",
            name: "The Weeknd",
            url: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ",
          },
        ],
        album: {
          id: "4yP0hdKOZPNshxUOjY0cZj",
          name: "After Hours",
          release_date: "2020-03-20",
          image:
            "https://i.scdn.co/image/ab67616d00001e0247d5ad6c6c1d4428748f8c2c",
          url: "https://open.spotify.com/album/4yP0hdKOZPNshxUOjY0cZj",
        },
        duration_ms: 200040,
        explicit: false,
        preview_url: "https://p.scdn.co/mp3-preview/...",
        url: "https://open.spotify.com/track/3FAJ6O0NOHQV8Mc5Ri6ENp",
      },
      {
        id: "2Fxmhks0bxGSBdJ92vM42m",
        name: "drivers license",
        artists: [
          {
            id: "1McMsnEElThX1knmY4oliG",
            name: "Olivia Rodrigo",
            url: "https://open.spotify.com/artist/1McMsnEElThX1knmY4oliG",
          },
        ],
        album: {
          id: "6s84u2TUpR3wdUv4NgKA2j",
          name: "SOUR",
          release_date: "2021-05-21",
          image:
            "https://i.scdn.co/image/ab67616d00001e02c317420f1bba69db5b7d5b03",
          url: "https://open.spotify.com/album/6s84u2TUpR3wdUv4NgKA2j",
        },
        duration_ms: 242000,
        explicit: true,
        preview_url: "https://p.scdn.co/mp3-preview/...",
        url: "https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM42m",
      },
      {
        id: "1z1Hg7Vb0AhHDiEmnDE79l",
        name: "Peaches",
        artists: [
          {
            id: "1uNFoZAHBGtllmzznpCI3s",
            name: "Justin Bieber",
            url: "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s",
          },
          {
            id: "4IVAbR2w4JJNJDDRFP3E83",
            name: "Daniel Caesar",
            url: "https://open.spotify.com/artist/4IVAbR2w4JJNJDDRFP3E83",
          },
        ],
        album: {
          id: "5dGWwsZ9iB2Xc3UKR0gif2",
          name: "Justice",
          release_date: "2021-03-19",
          image:
            "https://i.scdn.co/image/ab67616d00001e02ec4f3b29a2c3bdc832ebf098",
          url: "https://open.spotify.com/album/5dGWwsZ9iB2Xc3UKR0gif2",
        },
        duration_ms: 198000,
        explicit: false,
        preview_url: "https://p.scdn.co/mp3-preview/...",
        url: "https://open.spotify.com/track/1z1Hg7Vb0AhHDiEmnDE79l",
      },
      {
        id: "6Qs4SXO9dwPj5GKvVOv8Ki",
        name: "Levitating",
        artists: [
          {
            id: "6M2wZ9GZgrQXHCFfjv46we",
            name: "Dua Lipa",
            url: "https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we",
          },
        ],
        album: {
          id: "4hDok0OAJd57SGIT8xuWJH",
          name: "Future Nostalgia",
          release_date: "2020-03-27",
          image:
            "https://i.scdn.co/image/ab67616d00001e02123b2ba2927f37e55a04b28c",
          url: "https://open.spotify.com/album/4hDok0OAJd57SGIT8xuWJH",
        },
        duration_ms: 203000,
        explicit: false,
        preview_url: "https://p.scdn.co/mp3-preview/...",
        url: "https://open.spotify.com/track/6Qs4SXO9dwPj5GKvVOv8Ki",
      },
      {
        id: "7BqBn9nzAq8spo5e7cZ0dJ",
        name: "Shape of You",
        artists: [
          {
            id: "6eUKZXaKkcviH0Ku9w2n3V",
            name: "Ed Sheeran",
            url: "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V",
          },
        ],
        album: {
          id: "3T4tUhGYeRNVUGevb0wThu",
          name: "Divide",
          release_date: "2017-03-03",
          image:
            "https://i.scdn.co/image/ab67616d00001e025d5f2d0c129dcb8a9cc4b435",
          url: "https://open.spotify.com/album/3T4tUhGYeRNVUGevb0wThu",
        },
        duration_ms: 233000,
        explicit: false,
        preview_url: "https://p.scdn.co/mp3-preview/...",
        url: "https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ",
      },
      {
        id: "3KkXRkHbMCARz0aVfEt68P",
        name: "Sunflower",
        artists: [
          {
            id: "1Xyo4u8uXC1ZmMpatF05PJ",
            name: "The Weeknd",
            url: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ",
          },
          {
            id: "246dkjvS1zLTtiykXe5h60",
            name: "Post Malone",
            url: "https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60",
          },
        ],
        album: {
          id: "5s0rmjP8XOPhP6HhqOhuyC",
          name: "Spider-Man: Into the Spider-Verse",
          release_date: "2018-12-14",
          image:
            "https://i.scdn.co/image/ab67616d00001e02fafd8b9986a735d7e768d511",
          url: "https://open.spotify.com/album/5s0rmjP8XOPhP6HhqOhuyC",
        },
        duration_ms: 161000,
        explicit: false,
        preview_url: "https://p.scdn.co/mp3-preview/...",
        url: "https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P",
      },
    ],
    total_tracks: 80,
  },
});

const columns = [
  {
    name: "index",
    label: "#",
    field: "index",
  },
  {
    name: "title",
    required: true,
    label: "Title",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "album",
    align: "center",
    label: "Album",
    field: "album",
    sortable: true,
  },
  { name: "date", label: "Date Added", field: "date" },
  { name: "duration", label: "Duration", field: "duration" },
];

const seed = playlistSeven.value.playlist.tracks.map((track) => ({
  name: track.name,
  album: track.album.name,
  date: track.album.release_date,
  duration: formatDuration(track.duration_ms), // Convert ms to minutes
}));

const rows = ref([]);

for (let i = 0; i < 1000; i++) {
  rows.value = rows.value.concat(seed.slice(0).map((r) => ({ ...r })));
}

rows.value.forEach((row, index) => {
  row.index = index;
});
</script>
