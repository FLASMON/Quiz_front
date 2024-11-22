<script setup>
import Niveau from "./components/Pages/Niveau.vue";
import Accueil from "./components/Pages/Accueil.vue";
import Quiz from "./components/Pages/Quiz.vue";
import VideoNotification from "./components/Pages/VideoNotification.vue";

const onClickLevel = (level) => {
  console.log("NIVEAU CLICKÉ",level);
}
</script>

<template>

  <Accueil/>
<!--   <Niveau :niveau_actuel="3" :niveau_max="15" @click-level="onClickLevel" />-->
<!--  <Quiz/>-->
<!--  <Niveau/>-->
<!--  <VideoNotification/>-->

</template>

<style scoped>

</style>