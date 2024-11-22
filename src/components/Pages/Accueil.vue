<script setup>
import Nuage from "../Jungle/Nuage.vue";
import Birds from "../Jungle/Birds.vue";
import Fleure from "../Jungle/Fleure.vue";
import Defauts from "../Jungle/Defauts.vue";
import Lumiere from "../Jungle/Lumiere.vue";
</script>

<template>
  <div class="overflow-hidden bg-gradient-to-l from-[#9FDAE0] to-[#1CD8FF] relative mx-auto flex h-screen w-screen-xl pt-0 pb-6 sm:pt-6 my-auto">
    <Nuage/>
    <Birds/>
    <Fleure/>
    <Defauts/>
    <Lumiere/>
    <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-sm mx-auto my-auto relative">
      <div
          class="relative z-10 lg:py-4 text-center bg-white p-4 rounded-md shadow-2xl animate-pop motion-preset-pop duration-500">
        <span class="text-xl font-bold text-[#5ABBD0] shadow-2xl text-center mx-auto max-w-xl uppercase animate-bounce-slow">
          Irrigants de france présente
        </span>
        <h1 class="text-[#3258A4] font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase animate-expand-slow text_irrigant text-stroke font-waterGalon">
          Tout savoir sur L’<span class="loader uppercase">eau</span>
        </h1>
        <span
            class="absolute bottom-0 left-0 w-full h-1 bg-blue-400 transform origin-left transition-transform duration-500"
        ></span>
        <!-- Effet de décoration -->
        <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
        <div class="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full opacity-20 transform -translate-x-12 translate-y-12"></div>

      </div>
      <div class="my-8 flex flex-col items-center justify-center gap-4">
      <span class=" animate-bounce ">
        <font-awesome-icon icon="fa-solid fa-down-long"
                           class="!size-7 px-1 py-2 text-white font-bold bg-green-600 hover:bg-green-700  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95 transition-transform duration-200 ease-in-out animate-pulse"/>
      </span>
        <div class="z-10">
          <a-button
              type="primary"
              size="large"
              class="flex items-center justify-center border-2 border-white !px-6 !py-6 uppercase text-white font-bold bg-gradient-to-b from-blue-400 to-blue-600 transform hover:rotate-x-6 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-[0_8px_0_rgba(0,0,0,0.3)] transition-transform duration-300 ease-in-out"
              style="perspective: 1000px;"
          >
            Play
          </a-button>
        </div>
      </div>

    </div>
    <div class="absolute right-1/2 bottom-24 transform z-20">
      <img src="/img/eau.png" alt="Eau mascotte" class="water-drop"/>
    </div>
  </div>
</template>

<style scoped>
.loader {
  display: inline-block;
  color: #5ABBD0;
  letter-spacing: 2px;
  position: relative;
  box-sizing: border-box;
  -webkit-text-stroke: 2px #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
}

.loader::after {
  content: 'eau';
  position: absolute;
  left: 0;
  top: 0;
  color: #3258A4;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
  -webkit-text-stroke: 2px #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
}

@keyframes animloader {
  0% {
    height: 100%;
  }
  100% {
    height: 0;
  }
}

.text_irrigant {
  -webkit-text-stroke: 2px #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
}

/* Animation Pop */
@keyframes pop {
  0% {
    transform: scale(0.85);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-pop {
  animation: pop 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

/* Animation Bounce (Lent) */
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 1.5s ease-in-out alternate;
}

/* Animation Expand (Lent) */
@keyframes expand-slow {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-expand-slow {
  animation: expand-slow 1.2s ease-out forwards;
}

/* Image de la goutte d'eau */
.water-drop {
  width: 180px;
  animation: bounce 2s infinite ease-in-out, sparkle 3s infinite ease-in-out;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes sparkle {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.1);
  }
}

</style>
