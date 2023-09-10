<script setup lang="ts"></script>
<template>
  <div
    class="advert-content_wrapper_parent absoulute z-30 lg:grid flex-col justify-center align-middle lg:grid-rows-2 lg:gap-y-20 lg:grid-cols-2 lg:ml-11 lg:mt-12 lg:-z-20 h-96"
  >
    <div
      class="advert-content_grid-0 px-5 row-span-1 text flex-col justify-center align-middle"
    >
      <h1 class="text-headfuse font-extrabold text-5xl mt-9 mb-1">
        Business Chaos.
      </h1>
      <h1 class="text-headfuse font-extrabold text-5xl">Tamed.</h1>
      <h2 class="text-greenfuse max-w-md md:w-5/2 font-normal mt-5 text-base">
        The all-in-one platform you need to manage everything in your business.
        No learning curve.
      </h2>
    </div>
    <div
      class="advert-content_image_grid-1 row-span-2 col-span-1 flex -ml-30 overflow-hidden justify-center align-middle relative"
    >
      <div class="advent-content_sub_image-grid-1-1 absolute z-30">
        <img
          src="/assets/advert-image.png"
          loading="lazy"
          class="w-60 h-70 mt-14 mr-2"
          alt=""
        />
      </div>
      <div class="advent-content_sub_image-grid-1-2 absolute top-0 z-0">
        <img src="/assets/tree-background.png" loading="lazy" class="" alt="" />
      </div>
      <div
        class="advert-content_sub_image-grid_background_image_wrapper aboslute bg-orange-500 z-20 w-60 h-[302px] mt-[85px] top-0 mr-2 rounded-tr-3xl rounded-bl-3xl"
      ></div>
      <div
        class="advert-content_sub_mojo_invoice_paid absolute md:grid hidden md:visible grid-rows-2 grid-cols-2 bg-white border-black-200 top-[270px] -ml-60 z-30 py-1 pr-2 rounded-md"
      >
        <div
          class="advert-content_sub_mojo_invoice_paid_row_1_item md:flex row-span-2 justify-end mr-2 align-middle px-4 mt-2"
        >
          <img src="/assets/contact.svg" alt="" loading="lazy" class="h-10" />
        </div>
        <div class="row_2 advert-content_sub_mojo_invoice_paid_row_2_item">
          <h2 class="text-sm text-gray-400">$4,500</h2>
        </div>
        <div
          class="row_3 advert-content_sub_mojo_invoice_paid_row_3_item col-start-2"
        >
          <h1 class="text-headfuse text-sm font-bold">Invoice paid</h1>
        </div>
      </div>
      <div
        class="advert-content_sub_mojo_intake_lead absolute md:grid hidden md:visible grid-rows-2 grid-cols-2 bg-white border-black-200 top-[170px] h-[57px] w-[240px] mx-w-[240px] mx-h-[57px] ipad-mini:left-[470px] ipad-air:left-[450px] tricky:ml-10 tricky-2:ml-[14%] tricky-3:ml-[14%] screen-collapse:ml-9 lg:-ml-9 lg:left-[345px] laptop:left-[400px] laptop:ml-32 pl-2 mr-7 z-30 py-1 pb-4 pr-1 rounded-md"
      >
        <div
          class="advert-content_sub_mojo_intake_lead_row_1_item hidden md:visible md:flex row-span-2 pl-4 justify-start align-middle px-2 mt-2"
        >
          <img
            src="/assets/notification.svg"
            alt=""
            loading="lazy"
            class="h-8"
          />
        </div>
        <div
          class="advert-content_sub_mojo_intake_lead_row_2_item hidden md:visible md:flex -ml-12 align-middle"
        >
          <h2 class="text-sm text-gray-400 mb-2">New lead</h2>
        </div>
        <div
          class="advert-content_sub_mojo_intake_lead_row_3_item row-span-2 hidden md:visible md:flex align-middle col-start-2 -ml-12"
        >
          <h1 class="text-headfuse text-sm font-bold mt-1">
            Intake form completed
          </h1>
        </div>
      </div>
      <div
        class="advert-content_sub_mojo_expense_deducted absolute hidden md:visible md:grid grid-rows-2 grid-cols-2 bg-white border-black-200 top-[270px] h-[57px] w-[240px] mx-w-[240px] mx-h-[57px] ipad-mini:left-[470px] tricky:ml-10 tricky-2:ml-[14%] tricky-3:ml-[14%] screen-collapse:ml-9 lg:-ml-9 ipad-air:left-[450px] lg:left-[345px] laptop:left-[400px] laptop:ml-32 pl-2 mr-7 z-30 py-1 pb-4 pr-1 rounded-md"
      >
        <div
          class="advert-content_sub_mojo_expense_deducted_row_1_item hidden md:visible md:flex row-span-2 pl-4 justify-start align-middle px-2 mt-2"
        >
          <img
            src="/assets/notification-icons.svg"
            alt=""
            loading="lazy"
            class="h-8"
          />
        </div>
        <div
          class="advert-content_sub_mojo_expense_deducted_row_2_item -ml-12 hidden md:visible md:flex align-middle"
        >
          <h2 class="text-sm text-gray-400 mb-2">300$</h2>
        </div>
        <div
          class="advert-content_sub_mojo_expense_deducted_row_3_item row-span-2 hidden md:visible md:flex align-middle col-start-2 -ml-12"
        >
          <h1 class="text-headfuse text-sm font-bold mt-1">Expense deducted</h1>
        </div>
      </div>
    </div>
    <div
      class="advert-content_grid-2 row-span-1 relative col-span-1 hidden md:visible justify-center lg:justify-start md:flex align-top mt-6"
    >
      <input
        id="email-field"
        type="text"
        placeholder="Enter your email"
        class="unique-field rounded-full mt-2 py-4 border active:outline-none focus:outline-none h-10 w-72 pl-5 bg-white text-normal shadow-xl text-greenfuse font-normal border-slate-100"
      />
      <button
        class="h-11 px-7 py-1text-lg mt-1 w-50 visible -ml-9 bg-green-600 hover:bg-green-500 text-white font-bold rounded-full"
      >
        Start free
      </button>
    </div>
  </div>
</template>
<style></style>
