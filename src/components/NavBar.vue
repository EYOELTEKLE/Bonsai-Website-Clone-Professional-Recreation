<script setup lang="ts">
</script>
<template>
<header class="sticky top-0 z-50 bg-white">
      <div class="navbar_wrapper flex justify-between items-center border-b-[1px] py-6 lg:ml-9 lg:mr-9 ml-4 mr-2 ">
        <div class="navbar_elements f-full flex space-x-9 items-center">
          <div class="ele cursor-pointer">
            <img src="../assets/logo.svg">
          </div>
          <div class="navbar_element_2 lg:flex hidden  lg:space-x-8 lg:visible items-center">
           <p class="ml-5 text-greenfuse peer/product hover:text-green-400 py-3 font-normal border-hidden border-b-8">Product</p>
           <div  class="hidden product-hidden-item peer-hover/product:grid-cols-4 peer-hover/product:ml-0 peer-hover/product:shadow-lg hover:shadow-lg peer-hover/product:gap-42 border-t-[1px]  peer-hover/product:visible peer-hover/product:grid peer-hover/product:fixed peer-hover/product:top-[72px] peer-hover/product:-left-[32px] peer-hover/product:z-[440000] peer-hover/product:bg-white peer-hover/product:w-full hover:grid-cols-4 peer-hover/product:gap-42 hover:visible hover:grid hover:fixed hover:top-[72px] hover:ml-0 hover:-left-[32px] hover:z-[440000] hover:bg-white hover:w-full">
                <div class="product-hidden-grid-1 mt-10 pl-[32px] flex flex-col">
                  <p class="text-headfuse font-semibold text-lg cursor-pointer w-42 mb-5">Client Management</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">CRM</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Scheduling</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Proposals</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Contracts</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Forms</p>
                </div>
                <div class="product-hidden-grid-2 flex mt-10 flex-col">
                  <p class="text-headfuse font-semibold text-lg cursor-pointer w-42 mb-5">Project Management</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Time Tracking</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Tasks</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">File Sharing</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Client portal</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Collaboration</p>
                </div>
                <div class="product-hidden-grid-3 flex mt-10  flex-col">
                  <p class="text-headfuse font-semibold text-lg cursor-pointer w-42 mb-5">Financial Management</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Invoicing</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Payments</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Accounting</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Taxes</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Banking</p>

                </div>
                <div class="product-hidden-grid-4 flex mt-10 flex-col">
                  <p class="text-headfuse font-semibold text-lg cursor-pointer w-42 mb-5">What's new</p>
                    <div class="image_wrapper_element mb-3">
                      <img src="../assets/scheduling-preview.jpg" class="max-w-42 w-[92px] h-[71px]" alt="">
                    </div>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-42 mb-3">Branded scheduling portal</p>
                  <p class="font-bold text-sm text-green-400 b cursor-pointer w-40 mb-3 underline hover:no-underline ">Learn more</p>
                </div>
           </div>
           <p class="ml-5 text-greenfuse peer/industry hover:text-green-400 py-3 font-normal border-hidden border-b-8">Industries</p>
           <div  class="hidden product-hidden-item peer-hover/industry:grid-cols-4 peer-hover/industry:ml-0 peer-hover/industry:shadow-lg hover:shadow-lg peer-hover/industry:gap-42 border-t-[1px] peer-hover/industry:visible peer-hover/industry:grid peer-hover/industry:fixed peer-hover/industry:top-[72px] peer-hover/industry:-left-[32px] peer-hover/industry:z-[440000] peer-hover/industry:bg-white peer-hover/industry:w-full hover:grid-cols-4 peer-hover/industry:gap-42 hover:visible hover:grid hover:fixed hover:top-[72px] hover:ml-0 hover:-left-[32px] hover:z-[440000] hover:bg-white hover:w-full">
                <div class="product-hidden-grid-1 mt-10 pl-[32px] flex flex-col">
                  <p class="text-headfuse font-semibold text-lg cursor-pointer w-42 mb-5">Business Services</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Consulting</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Marketing</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Recruiting</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Virtual Assistant</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">More...</p>
                </div>
                <div class="product-hidden-grid-2 flex mt-10 flex-col">
                  <p class="text-headfuse font-semibold text-lg cursor-pointer w-42 mb-5">Creative and Digital</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Design</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Photography</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-42 mb-3">Software Development</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Writing</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">More...</p>
                </div>
                <div class="product-hidden-grid-3 flex mt-10  flex-col">
                  <p class="text-headfuse font-semibold text-lg cursor-pointer w-42 mb-5">Professional Services</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Coaching</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Architecture</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Accounting</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Legal</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">More...</p>
                </div>
                <div class="product-hidden-grid-4 flex mt-10 flex-col">
                  <p class="text-headfuse font-semibold text-lg cursor-pointer w-42 mb-5">Other services</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Event Planning</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Interior Design</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Real-Estate</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">More...</p>
                </div>
           </div>
           <p class="text-green-400 font-normal cursor-pointer">Templates</p>
           <p class="text-greenfuse hover:text-green-400 font-normal cursor-pointer">Pricing</p>
           <p class="text-greenfuse peer/resource hover:text-green-400 py-3 font-normal cursor-pointer">Resources</p>
           <div  class="hidden product-hidden-item peer-hover/resource:grid-cols-4 peer-hover/resource:ml-0 peer-hover/resource:shadow-lg hover:shadow-lg peer-hover/resource:gap-42 border-t-[1px] peer-hover/resource:visible peer-hover/resource:grid peer-hover/resource:fixed peer-hover/resource:top-[72px] peer-hover/resource:-left-[32px] peer-hover/resource:z-[440000] peer-hover/resource:bg-white peer-hover/resource:w-full hover:grid-cols-4 peer-hover/resource:gap-42 hover:visible hover:grid hover:fixed hover:top-[72px] hover:ml-0 hover:-left-[32px] hover:z-[440000] hover:bg-white hover:w-full">
                <div class="product-hidden-grid-1 mt-10 pl-[32px] flex flex-col">
                  <p class="text-headfuse font-semibold text-lg cursor-pointer w-42 mb-5">Learn</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Blog</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Help Center</p>
                  
                </div>
                <div class="product-hidden-grid-2 flex mt-10 flex-col">
                  <p class="text-headfuse font-semibold text-lg cursor-pointer w-42 mb-5">Tools</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-40 mb-3">Contract Marker</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-48 mb-3">Self-Employed Taxes Hub</p>
                  <p class="text-greenfuse font-normal hover:text-green-400  cursor-pointer w-48 mb-3">Freelance Rates Explorer</p>
                </div>
           </div>
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