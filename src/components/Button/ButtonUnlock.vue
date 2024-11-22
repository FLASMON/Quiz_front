<script setup>

</script>

<template>
  <a-button type="primary"  size="large" class="button_unlock bg-center focus:outline-none focus:ring-[#F7B153] focus:scale-100 bg-transparent  hover:!bg-yellow-600 hover:scale-110 transition duration-300 bg-cover bg-no-repeat text-lg px-8 py-4 !h-16 !w-16" style="background-image: url('/img/buttonUnlock.svg');">
    <template #icon>
      <font-awesome-icon icon="fa-solid fa-solid fa-star" class="!size-7 text-yellow-500 transition duration-300"
                         style="-webkit-text-stroke: 4px #fff;"/>
    </template>
  </a-button>
</template>

<style scoped>
.button_unlock:hover .text-yellow-500 {
  @apply text-yellow-400
}
</style>

