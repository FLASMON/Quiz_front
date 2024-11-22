<script setup>
import ButtonUnlock from "../Button/ButtonUnlock.vue";
import ButtonLock from "../Button/ButtonLock.vue";
import Birds from "../Jungle/Birds.vue";
import Nuage from "../Jungle/Nuage.vue";
import Lumiere from "../Jungle/Lumiere.vue";
import Fleure from "../Jungle/Fleure.vue";
</script>

<template>
  <div class="overflow-hidden relative h-screen bg-gradient-to-t from-[#FFFFFF] to-[#80CFDF]">
    <Birds/>
    <Nuage/>
    <Fleure/>
    <Lumiere/>
    <div class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/img/arbre.svg');"></div>
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 h-screen">

      <div class="flex justify-center items-center">
        <span class="motion-preset-pulse  text_border uppercase text-5xl lg:text-6xl xl:text-[6rem] font-extrabold text-wrap font-waterGalon">Choisir <br> un niveau</span>
      </div>

      <div class="flex justify-center items-center p-2">
        <div class="relative grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-9 max-h-full h-2/3 max-w-screen-lg p-6 gap-6 bg-white shadow-md bg-opacity-50 border-2 border-white rounded-md main-scrool overflow-y-auto">
          <ButtonUnlock/><ButtonUnlock/><ButtonUnlock/><ButtonUnlock/>
          <ButtonUnlock/><ButtonUnlock/><ButtonUnlock/><ButtonUnlock/>
          <ButtonUnlock/><ButtonUnlock/><ButtonUnlock/><ButtonUnlock/>
          <ButtonUnlock/><ButtonUnlock/><ButtonUnlock/><ButtonUnlock/>
          <ButtonLock/><ButtonLock/><ButtonLock/><ButtonLock/><ButtonLock/>
          <ButtonLock/><ButtonLock/><ButtonLock/><ButtonLock/><ButtonLock/>
          <ButtonLock/><ButtonLock/><ButtonLock/><ButtonLock/><ButtonLock/>
          <ButtonLock/><ButtonLock/><ButtonLock/><ButtonLock/><ButtonLock/>
          <ButtonLock/><ButtonLock/><ButtonLock/><ButtonLock/><ButtonLock/>
        </div>
      </div>
    </div>
    <div class="absolute inset-0 -z-0">
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
      <div class="wave wave4"></div>
    </div>
  </div>
</template>

<style scoped>

.text_border {
  display: inline-block;
  color: #1CD8FF;
  letter-spacing: 2px;
  position: relative;
  box-sizing: border-box;
  -webkit-text-stroke: 3px #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .8);
}

.text_border::after {
  content: 'Choisir un niveau';
  position: absolute;
  left: 0;
  top: 0;
  color: #3258A4;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  clip-path: polygon(0% 65%, 28% 64%, 51% 56%, 70% 46%, 82% 36%, 91% 28%, 100% 18%, 100% 100%, 0 100%);
  -webkit-text-stroke: 2px #fff;
}
.wave {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("/img/wave.svg");
  background-size: 1000px 100px;
}

.wave.wave1 {
  opacity: 1;
  animation-delay: 0s;
  bottom: 0;
  animation: wave 30s linear infinite;
}

.wave.wave2 {
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 10px;
  background: url("/img/wave_white.svg");
  animation: wave2 15s linear infinite;
}

.wave.wave3 {
  opacity: 0.2;
  animation-delay: -2s;
  bottom: 15px;
  animation: wave 30s linear infinite;
}

.wave.wave4 {
  opacity: 0.7;
  animation-delay: -5s;
  bottom: 30px;
  animation: wave2 5s linear infinite;
}

@keyframes wave {
  0% {
    background-position-x: 0;
  }

  100% {
    background-position-x: 1000px;
  }
}

@keyframes wave2 {
  0% {
    background-position-x: 0;
  }

  100% {
    background-position-x: -1000px;
  }
}
</style>
