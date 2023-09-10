<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div
    class="mt-2 -mb-5 mobile-version_features_wrapper_parent md:hidden mx-auto"
  >
    <h1 class="ml-2 mr-2 font-extrabold text-xl text-center text-headfuse">
      Cut costs, not features.
    </h1>
    <div class="w-full px-4 mx-auto pt-7">
      <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium"
          >
            <div
              class="statements_1_wrapper flex flex-col border-b-2 border-gray-200 pb-2 border-6 w-[292.24px]"
            >
              <p class="font-bold text-sm iphone:text-lg">
                Manage your finances
              </p>
              <p class="text-xs my-1 font-base text-greenfuse">
                Get paid, handle bookkeeping & Manage your Money
              </p>
            </div>

            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-green-600"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div class="panel-hidden-parent">
              <div class="row1 flex items-center gap-4 iphone:gap-14 mb-2">
                <div class="row1-image">
                  <img
                    src="/assets/Icons_Paper-1.svg"
                    alt=""
                    class="w-[30px] h-[30px]"
                  />
                </div>
                <p
                  class="basis-2/4 ml-1 iphone:-ml-7 w-[160px] font-bold text-headfuse"
                >
                  Payments
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
              <div class="row2 flex items-center gap-4 iphone:gap-14 mb-2">
                <div class="row2-image">
                  <img
                    src="/assets/Icons_Activity.svg"
                    alt=""
                    class="w-[30px] h-[30px]"
                  />
                </div>
                <p
                  class="basis-2/4 ml-1 iphone:-ml-7 w-[160px] font-bold text-headfuse"
                >
                  Accounting
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
              <div class="row3 flex items-center gap-4 iphone:gap-14 mb-2">
                <div class="row3-image">
                  <img
                    src="/assets/Icons_Paper-1.svg"
                    alt=""
                    class="w-[30px] h-[30px]"
                  />
                </div>
                <p
                  class="basis-2/4 ml-1 iphone:-ml-7 w-[160px] font-bold text-headfuse"
                >
                  Taxes
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
              <div class="row3 flex items-center gap-4 iphone:gap-14 mb-2">
                <div class="row3-image">
                  <img
                    src="/assets/Icons_coin.svg"
                    alt=""
                    class="w-[30px] h-[30px]"
                  />
                </div>
                <p
                  class="basis-2/4 ml-1 iphone:-ml-7 w-[160px] font-bold text-headfuse"
                >
                  Banking
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium"
          >
            <div
              class="statements_1_wrapper flex flex-col border-b-2 border-gray-200 pb-2 border-6 w-[292.24px]"
            >
              <p class="font-bold text-sm iphone:text-lg">Manage Clients</p>
              <p class="text-xs my-1 font-base text-greenfuse">
                Turn leads into Clients seamlessly & win more work
              </p>
            </div>

            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-green-600"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div class="panel-hidden-parent">
              <div class="row1 flex items-center gap-4 iphone:gap-14 mb-2">
                <div class="row1-image">
                  <img
                    src="/assets/Icon_Paper.svg"
                    alt=""
                    class="w-[30px] h-[30px]"
                  />
                </div>
                <p
                  class="basis-2/4 ml-1 iphone:-ml-7 w-[160px] font-bold text-headfuse"
                >
                  Contracts
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
              <div class="row2 flex items-center gap-4 iphone:gap-14 mb-2">
                <div class="row2-image">
                  <img
                    src="/assets/Icon_Document.svg"
                    alt=""
                    class="w-[30px] h-[30px]"
                  />
                </div>
                <p
                  class="basis-2/4 ml-1 iphone:-ml-7 w-[160px] font-bold text-headfuse"
                >
                  Forms
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
              <div class="row3 flex items-center gap-4 iphone:gap-14 mb-2">
                <div class="row3-image">
                  <img
                    src="/assets/Icon_Calendar.svg"
                    alt=""
                    class="w-[30px] h-[30px]"
                  />
                </div>
                <p
                  class="basis-2/4 ml-1 iphone:-ml-7 w-[160px] font-bold text-headfuse"
                >
                  Scheduling
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
              <div
                class="row3 flex items-center gap-4 iphone:gap-14 mb-2 font-bold text-headfuse"
              >
                <div class="row3-image">
                  <img
                    src="/assets/Icons_coin.svg"
                    alt=""
                    class="w-[30px] h-[30px]"
                  />
                </div>
                <p
                  class="basis-2/4 ml-1 iphone:-ml-7 w-[160px] font-bold text-headfuse"
                >
                  Banking
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium"
          >
            <div
              class="statements_1_wrapper flex flex-col border-b-2 border-gray-200 pb-2 border-6 w-[292.24px]"
            >
              <p class="font-bold text-sm iphone:text-lg">Projects</p>
              <p class="text-xs my-1 font-base text-greenfuse">
                Track your projects from opportunity to delivery
              </p>
            </div>

            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-green-600"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div class="panel-hidden-parent">
              <div class="row1 flex items-center gap-4 iphone:gap-14 mb-2">
                <div class="row1-image">
                  <img
                    src="/assets/Icon_users.svg"
                    alt=""
                    class="w-[30px] h-[30px]"
                  />
                </div>
                <p
                  class="basis-2/4 ml-1 iphone:-ml-7 w-[160px] font-bold text-headfuse"
                >
                  CRM
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
              <div class="row2 flex items-center gap-4 iphone:gap-14 mb-2">
                <div class="row2-image">
                  <img
                    src="/assets/Icons_envelope.svg"
                    alt=""
                    class="w-[30px] h-[30px]"
                  />
                </div>
                <p
                  class="basis-2/4 ml-1 iphone:-ml-7 w-[160px] font-bold text-headfuse"
                >
                  Invoicing
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
              <div class="row3 flex items-center gap-4 iphone:gap-14 mb-2">
                <div class="row3-image">
                  <img
                    src="/assets/icons_timer.svg"
                    alt=""
                    class="w-[30px] h-[30px]"
                  />
                </div>
                <p
                  class="basis-2/4 ml-1 iphone:-ml-7 w-[160px] font-bold text-headfuse"
                >
                  Time Tracking
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
              <div class="row3 flex items-center gap-4 iphone:gap-14 mb-2">
                <div class="row3-image">
                  <img
                    src="/assets/Icons_Tick-Square.svg"
                    alt=""
                    class="w-[30px] h-[30px]"
                  />
                </div>
                <p
                  class="basis-2/4 ml-1 iphone:-ml-7 w-[160px] font-bold text-headfuse"
                >
                  Project Management
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-green-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </div>
  <div
    class="testimony_parent_wrapper_element mt-24 relative bg-testimony-bg Nesthub:overflow-hidden mid-laptop:overflow-visible bg-headfuse rounded-3xl gap-4 md:gap-48 Nesthub:ml-10 mid-laptop:mx-auto max-w-fit flex flex-col justify-center items-center mx-auto iphone:grid iphone:grid-cols-2 iphone:grid-rows-3 w-[280px] h-[329px] iphone:w-[573px] iphone:h-[655px] md:w-[1280px] md:h-[584px]"
  >
    <div
      class="grid-1 flex items-center -mt-20 iphone:mt-20 h-full row-start-1 row-end-3"
    >
      <h1
        class="text-white text-xs iphone:text-base md:text-xl lg:text-3xl max-w-32 ml-8 font-semibold"
      >
        “Bonsai is a great hub for my business. It’s super simple to use. I
        would really recommend it for anyone who is after an easy-to-use CRM
        system without the hassle of complicated setups.”
      </h1>
    </div>
    <div
      class="grid-2 flex justify-end col-start-2 md:mt-80 md:-ml-3 gap-8 mid-laptop:-ml-14 laptop:ml-18 row-start-1 row-end-2 mt-5 mr-10 absolute"
    >
      <div
        class="w-[78.4px] h-[78.4px] hover:scale-125 transition delay-300 duration-100 ease-in-out iphone:w-[181.33px] iphone:h-[181.33px] iphone:md:w-[301px] -ml-42 laptop:-ml-32"
      >
        <img
          src="/assets/banner-profile.png"
          alt=""
          loading="lazy"
          class="w-[78.4px] h-[78.4px] iphone:h-[181.33px] iphone:w-[181.33px] md:w-[301px] md:h-[301px] md:min-w-[301px]"
        />
      </div>
      <div
        class="child2 mr-2 w-[301px] h-[301px] hover:scale-125 transition delay-300 duration-100 ease-in-out hidden Nesthub:visible Nesthub:flex"
      >
        <img
          src="/assets/banner-profile-2.png"
          alt=""
          loading="lazy"
          class="w-[78.4px] h-[78.4px] iphone:h-[181.33px] iphone:w-[181.33px] md:w-[301px] md:h-[301px] md:min-w-[301px]"
        />
      </div>
      <div
        class="child3 mr-2 w-[301px] h-[301px] hidden hover:scale-125 transition delay-300 duration-100 ease-in-out laptop:flex laptop:visible"
      >
        <img
          src="/assets/banner-profile-3.png"
          alt=""
          loading="lazy"
          class="w-[78.4px] h-[78.4px] iphone:h-[181.33px] iphone:w-[181.33px] md:w-[301px] md:h-[301px] md:min-w-[301px]"
        />
      </div>
    </div>
    <div
      class="grid-4 row-start-3 ml-8 flex flex-col justify-start items-start"
    >
      <div
        class="features flex gap-4 Galaxy-Fold:-mt-30 md:-mt-14 iphone:gap-10 md:grap-12"
      >
        <p class="text-white pr-3 py-3 font-semibold border-t-2">01</p>
        <p
          class="text-white pr-12 iphone:pr-40 py-3 font-semibold border-t-2 border-green-500"
        >
          02
        </p>
        <p class="text-white pr-3 py-3 font-semibold border-t-2">03</p>
      </div>
      <p
        class="mt-2 mb-4 iphone:-mb-4 iphone:mt-7 text-white font-bold text-xs iphone:text-sm"
      >
        Laura, <span class="font-extrabold">Coach at Ebb, Flow & Grow</span>
      </p>
    </div>
  </div>
</template>
<style></style>
