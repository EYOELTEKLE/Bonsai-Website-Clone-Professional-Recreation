<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>
<template>
<header class="sticky top-0 z-50 bg-white">
      <div class="navbar_wrapper flex justify-between items-center border-b-[1px] py-6 lg:ml-9 lg:mr-9 ml-4 mr-2">
        <div class="navbar_elements  flex space-x-9 items-center">
          <div class="ele cursor-pointer">
            <img src="../assets/logo.svg">
          </div>
          <div class="navbar_element_2 lg:flex hidden  lg:space-x-8 lg:visible items-center">
           <p id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" data-dropdown-delay="40" class="ml-5 text-greenfuse hover:text-green-400 font-normal cursor-pointer">Product</p>
           <div id="dropdownHover" >
              <p>Test</p>
           </div>
           <p class="text-greenfuse hover:text-green-400 font-normal cursor-pointer">Industries</p>
           <p class="text-greenfuse hover:text-green-400 font-normal cursor-pointer">Templates</p>
           <p class="text-greenfuse hover:text-green-400 font-normal cursor-pointer">Pricing</p>
           <p class="text-greenfuse hover:text-green-400 font-normal cursor-pointer">Resources</p>
           <p class="text-greenfuse hover:text-green-400 font-normal cursor-pointer">Reviews</p>
          </div>
        </div>
        <div class="navbar_element_3 lg:flex lg:space-x-1 hidden lg:visible items-center ">
          <p class="hover:bg-slate-100 hover:rounded-full hover:py-2 hover:px-6 px-6 font-semibold cursor-pointer">Log In</p>
          <button class="bg-green-600 rounded-full px-5 py-2 text-white font-semibold hover:bg-green-500">Start free</button>
        </div>
        <div class="navbar_hamburger  lg:hidden">
          <img src="../assets/hamburger.svg" alt="">
        </div>
      </div>
  </header>
</template>
<style>
</style>