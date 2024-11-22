<script setup>

import { ref, onMounted } from "vue";

const videoRef = ref(null); // Référence à la vidéo
const videoSrc = "https://www.w3schools.com/html/mov_bbb.mp4"; // Remplacez par votre URL vidéo
const videoDuration = ref(null);
const formattedDuration = ref("00:00");
const formattedCurrentTime = ref("00:00");
const loading = ref(true); // Pour gérer le chargement
const progress = ref(0); // Pour la barre de progression

const onVideoLoaded = () => {
  const minutes = Math.floor(videoRef.value.duration / 60);
  const seconds = Math.floor(videoRef.value.duration % 60);
  videoDuration.value = videoRef.value.duration;
  formattedDuration.value = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const onVideoEnded = () => {
  // Masquer la vidéo une fois terminée
  videoRef.value.parentElement.style.display = "none";
};

const onVideoProgress = () => {
  if (videoRef.value.buffered.length > 0) {
    const bufferEnd = videoRef.value.buffered.end(videoRef.value.buffered.length - 1);
    progress.value = (bufferEnd / videoRef.value.duration) * 100;
  }
  if (progress.value === 100) {
    loading.value = false; // Masquer la barre de progression lorsque le chargement est terminé
  }
};

const onTimeUpdate = () => {
  const currentTime = videoRef.value.currentTime;
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  formattedCurrentTime.value = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  // Mettre à jour la progression
  progress.value = (currentTime / videoRef.value.duration) * 100;
};

onMounted(() => {
  // Assurez-vous que la vidéo commence à jouer dès que le composant est monté
  if (videoRef.value) {
    videoRef.value.play();
  }
});
</script>

<template>

  <div class="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-md">
    <div
        data-aos="zoom-in-up"
        class="motion-preset-pop  min-h-5 overflow-hidden bg-white shadow-md bg-opacity-50 backdrop-blur-sm w-full border-4 border-white p-0 rounded-md  max-w-screen-lg my-auto relative !z-[9999]"
    >
      <!-- Vidéo -->
      <video
          ref="videoRef"
          class="w-full h-auto rounded-md"
          :src="videoSrc"
          autoplay
          muted
          playsinline
          @loadedmetadata="onVideoLoaded"
          @ended="onVideoEnded"
          @progress="onVideoProgress"
          @timeupdate="onTimeUpdate"
      ></video>

      <!-- Icône de durée -->
      <div
          v-if="videoDuration"
          class="absolute bottom-4 right-4 bg-black text-white text-xs py-1 px-2 rounded flex items-center gap-1"
      >
        <a-progress
            type="circle"
            :percent="progress"
            :size="40"
        />
<!--        <span>{{ formattedCurrentTime }}</span>-->
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
