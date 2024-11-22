<script setup>
import VideoNotification from "./VideoNotification.vue";
import Birds from "../Jungle/Birds.vue";

const image = '/img/pngegg.png';
</script>

<template>
  <div class="flex justify-center min-h-screen inset-0 bg-cover bg-center bg-no-repeat"
       style="background-image: url('/img/reserve_eau.svg');">
    <Birds/>
    <div data-aos="zoom-in-up"
         class="relative z-10 min-h-5 overflow-y-auto main-scrool bg-white shadow-md bg-opacity-50 backdrop-blur-sm w-full border-4 border-white px-5 py-10 md:mx-4 lg:py-12 mx-2 sm:px-8 rounded-md md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-lg  my-auto">
      <a-row :gutter="[24, 24]">
        <a-col :span="24">
          <a-card class="flex items-center justify-center relative bg-transparent border-none rounded-lg shadow-lg !p-0 lg:p-6 bg-cover bg-center"
                  style="background-image: url('/img/wood.svg');">
            <div
                class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-700 to-amber-500 text-white px-4 py-2 lg:px-8 lg:py-4 rounded-full shadow-[0_8px_0_rgba(102,63,20,100)] text-center font-bold text-lg"
            >
              <span class="text-3d text-md md:text-4xl lg:text-xl uppercase">Quiz niveau 1</span>
            </div>

            <!-- Contenu principal de la carte -->
            <div class=" flex items-center justify-center text-center bg-transparent h-full w-full md:max-w-sm lg:max-w-2xl md:h-60 lg:h-80 rounded-md ">
              <h3 class="text-xl md:text-4xl lg:text-4xl font-semibold text-[#501F0F] pt-2 font-waterGalon !leading-normal uppercase">
                quel secteur economique preleve le plus d'eau ?
              </h3>
            </div>
          </a-card>
        </a-col>
        <a-col :span="24" :lg="8" data-aos="slide-left" data-aos-duration="1000" class="relative duration-300">
          <a-card class="bg-white bg-opacity-80 hover:bg-opacity-100 border-2 border-[#0397A9] relative  p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
            <template #cover>
              <div class="flex justify-center items-center p-4">
                <img
                    :src="image || 'https://via.placeholder.com/300x200?text=No+Image'"
                    alt="example"
                    class="!max-w-md !h-40 w-full object-cover"
                />
              </div>
            </template>
            <a-card-meta>
              <template #description>
                <span class="text-xl text-black font-bold py-2">Composition de technologie de purification d'eau isométrique  </span>
              </template>
            </a-card-meta>
            <span class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-xl font-bold text-white bg-gradient-to-r from-[#01C8AA] to-[#0397A9] h-10 w-10 flex items-center justify-center shadow-md"
                  style="border-radius: 30% 70% 61% 39% / 48% 33% 67% 52%;">
              1
            </span>
          </a-card>
        </a-col>

        <a-col :span="24" :lg="8" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="300"
               class="relative duration-700 ">
          <a-card class="bg-white bg-opacity-80 hover:bg-opacity-100 border-2 border-[#FFA71F] relative  p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
            <template #cover>
              <img class="!max-w-md max-h-80 object-cover"
                  alt="example"
                  :src="image || 'https://via.placeholder.com/300x200?text=No+Image'"
              />
            </template>
            <a-card-meta>
              <template #description>
                <span class="text-xl text-black font-bold py-2">Composition de technologie de purification d'eau isométrique  </span>
              </template>
            </a-card-meta>

            <span class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-xl font-bold text-white bg-gradient-to-r from-[#FFA71F] to-[#FF7E29] h-10 w-10 flex items-center justify-center shadow-md"
                  style="border-radius: 30% 70% 61% 39% / 48% 33% 67% 52%;">
              2
            </span>
          </a-card>
        </a-col>

        <a-col :span="24" :lg="8" data-aos="slide-right" data-aos-duration="1000" data-aos-delay="600"
               class="relative duration-300">
          <a-card class="bg-white bg-opacity-80 hover:bg-opacity-100 border-2 border-[#FF3257] relative  p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
            <template #cover>
              <img class="!max-w-md max-h-80 object-cover"
                   alt="example"
                   :src="image || 'https://via.placeholder.com/300x200?text=No+Image'"
              />
            </template>
            <a-card-meta>
              <template #description>
                <span class="text-xl text-black font-bold py-2">Composition de technologie de purification d'eau isométrique  </span>
              </template>
            </a-card-meta>
            <span class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-xl font-bold text-white bg-gradient-to-r from-[#FF3257] to-[#CE2C4D] h-10 w-10 flex items-center justify-center shadow-md"
                  style="border-radius: 30% 70% 61% 39% / 48% 33% 67% 52%;">
              3
            </span>
          </a-card>
        </a-col>
      </a-row>

      <div class="mt-8">
        <a-button
            size="large"
            class="animate-shake flex items-center justify-center border-2 border-white !rounded-full !px-6 !py-6 uppercase text-white font-bold bg-gradient-to-b from-green-500 to-green-700
                    transform hover:bg-green-400 hover:!text-white hover:!border-white hover:rotate-x-6 hover:translate-y-[-2px]
                    focus:outline-none focus:ring-2 focus:ring-green-400 shadow-[0_8px_0_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out"
        >
          Valider la reponse
        </a-button>
      </div>
    </div>
  </div>

</template>

<style scoped>

.text-3d {
  text-shadow: 2px 2px 0 #000, 4px 4px 0 #555;
}

@keyframes shake {
  0% {
    transform: translateX(-10px);
  }
  25% {
    transform: translateX(10px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-shake {
  animation: shake 0.5s ease-in-out infinite;
  animation-play-state: running;
}

.animate-shake:hover {
  animation-play-state: paused;
}

.aeu {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: transparent;
  border-radius: 68% 32% 32% 68% / 38% 40% 60% 62%;
  box-shadow: inset 10px 10px 10px 10px rgba(0,0,0,0.05), 15px 25px 10px rgba(0,0,0,0.1), 15px 20px 20px rgba(0,0,0,0.05),
  inset -10px 10px 15px rgba(255, 255,255,0.9);
}

.aeu::before {
  content: '';
  position: absolute;
  top: 25px;
  left: 35px;
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 32% 68% 39% 61% / 51% 35% 65% 49%;
}

.aeu::after {
  content: '';
  position: absolute;
  top: 25px;
  left: 60px;
  background-color: white;
  width: 10px;
  height: 10px;
  border-radius: 71% 29% 26% 74% / 45% 27% 73% 55%;
}
</style>

<!--<template>-->
<!--  <div class="p-6">-->
<!--    <h2 class="text-xl font-bold mb-4">Sélectionnez vos questions (3 max)</h2>-->
<!--    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">-->
<!--      <a-card-->
<!--          v-for="(question, index) in questions"-->
<!--          :key="index"-->
<!--          :class="{ 'border-2 border-blue-500': selectedQuestions.includes(question) }"-->
<!--          class="cursor-pointer hover:shadow-md transition"-->
<!--          @click="toggleSelection(question)"-->
<!--      >-->
<!--        <p>{{ question }}</p>-->
<!--      </a-card>-->
<!--    </div>-->
<!--    <div class="mt-6">-->
<!--      <a-button-->
<!--          type="primary"-->
<!--          :disabled="selectedQuestions.length !== 1"-->
<!--          @click="validateSelection"-->
<!--      >-->
<!--        Valider-->
<!--      </a-button>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref } from 'vue';-->

<!--const questions = ref([-->
<!--  "Quelle est votre couleur préférée ?",-->
<!--  "Quel est votre animal préféré ?",-->
<!--  "Quelle est votre destination de rêve ?",-->
<!--  "Quel est votre plat préféré ?",-->
<!--  "Quelle est votre activité favorite ?",-->
<!--]);-->

<!--const selectedQuestions = ref([]);-->

<!--const toggleSelection = (question) => {-->
<!--  if (selectedQuestions.value.includes(question)) {-->
<!--    // Retirer la question si elle est déjà sélectionnée-->
<!--    selectedQuestions.value = selectedQuestions.value.filter(q => q !== question);-->
<!--  } else if (selectedQuestions.value.length < 1) {-->
<!--    // Ajouter la question si elle n'est pas encore sélectionnée et que le maximum n'est pas atteint-->
<!--    selectedQuestions.value.push(question);-->
<!--  }-->
<!--};-->

<!--const validateSelection = () => {-->
<!--  console.log("Questions sélectionnées :", selectedQuestions.value);-->
<!--  alert(`Vous avez sélectionné : \n${selectedQuestions.value.join("\n")}`);-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--/* Ajout de styles pour rendre les cartes plus interactives */-->
<!--.a-card {-->
<!--  padding: 16px;-->
<!--  background: #fff;-->
<!--  border-radius: 8px;-->
<!--  border: 1px solid #e5e7eb;-->
<!--  text-align: center;-->
<!--}-->
<!--.a-card:hover {-->
<!--  border-color: #2563eb;-->
<!--  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);-->
<!--}-->
<!--</style>-->

