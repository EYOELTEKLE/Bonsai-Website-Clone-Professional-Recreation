<script setup lang="ts">

</script>
<template>
<header class="sticky top-0 z-50 bg-white">
      <div class="navbar_wrapper flex justify-between items-center border-b-[1px] py-6 lg:ml-9 lg:mr-9 ml-4 mr-2">
        <div class="navbar_elements f-full flex space-x-9 items-center">
          <div class="ele cursor-pointer">
            <img src="../assets/logo.svg">
          </div>
          <div class="navbar_element_2 lg:flex hidden  lg:space-x-8 lg:visible items-center">
           <p class="ml-5 text-greenfuse peer hover:text-green-400 py-3 font-normal border-hidden border-b-8">Product</p>
           <div  class="hidden product-hidden-item peer-hover:grid-cols-4 peer-hover:ml-0 peer-hover:shadow-lg hover:shadow-lg peer-hover:gap-42 border-t-[1px] peer-hover:visible peer-hover:grid peer-hover:fixed peer-hover:top-[72px] peer-hover:-left-[32px] peer-hover:z-[440000] peer-hover:bg-white peer-hover:w-full hover:grid-cols-4 peer-hover:gap-42 hover:visible hover:grid hover:fixed hover:top-[72px] hover:ml-0 hover:-left-[32px] hover:z-[440000] hover:bg-white hover:w-full">
                <div class="product-hidden-grid-1 mt-14 pl-[32px] flex flex-col">
                  <p class="text-headfuse font-semibold text-lg cursor-pointer w-42 mb-5">Client Management</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">CRM</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Scheduling</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Proposals</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Contracts</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Forms</p>
                </div>
                <div class="product-hidden-grid-2 flex mt-14 flex-col">
                  <p class="text-headfuse font-semibold text-lg cursor-pointer w-42 mb-5">Project Management</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Time Tracking</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Tasks</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">File Sharing</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Client portal</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Collaboration</p>
                </div>
                <div class="product-hidden-grid-3 flex mt-14  flex-col">
                  <p class="text-headfuse font-semibold text-lg cursor-pointer w-42 mb-5">Financial Management</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Invoicing</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Payments</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Accounting</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Taxes</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Banking</p>

                </div>
                <div class="product-hidden-grid-4 flex mt-14 flex-col">
                  <p class="text-headfuse font-semibold text-lg cursor-pointer w-42 mb-5">What's new</p>
                    <div class="image_wrapper_element mb-3">
                      <img src="../assets/scheduling-preview.jpg" class="max-w-42 w-[92px] h-[71px]" alt="">
                    </div>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-42 mb-3">Branded scheduling portal</p>
                  <p class="font-bold text-sm text-green-400 b cursor-pointer w-40 mb-3 underline hover:no-underline ">Learn more</p>
                </div>
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