<script setup>

//import { RouterView } from 'vue-router';

</script>

<template>

  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto"
           src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
           alt="Your Company" />
    </div>
    <!-- This is where the content of the page will be injected -->
    <slot></slot>

  </div>
</template>

<style>

</style>