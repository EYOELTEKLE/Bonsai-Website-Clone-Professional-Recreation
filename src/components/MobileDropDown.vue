<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div class="w-full px-4 h-[516px] overflow-y-auto shadow-lg shadow-slate-500">
    <div class="w-full bg-white p-2">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between border-gray-200 border-b-2 bg-white px-4 pt-3 pb-5 text-left text-sm font-medium text-headfuse"
        >
          <span class="font-bold text-lg">Product</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-green-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          <div class="Product_drop-down_nav_item-1 flex flex-col gap-2 mx-auto">
            <p class="font-medium hover:text-green-500 cursor-pointer">CRM</p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Scheduling
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Proposals
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Contracts
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">Forms</p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Time Tracking
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">Tasks</p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              File Sharing
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Client Portal
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Collaboration
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Invoicing
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Payments
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Bookkeeping
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">Taxes</p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Banking
            </p>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between border-gray-200 border-b-2 bg-white px-4 pt-3 pb-5 text-left text-sm font-medium text-headfuse"
        >
          <span class="font-bold text-lg">Industries</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-green-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          <div
            class="nva_bar_dropdown-industries_items flex flex-col gap-2 md:grid md:grid-cols-4 md:grid-rows-4 md:gap-4"
          >
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Consulting
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Marketing
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Recruiting
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Virtual Assistant
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Design
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Photography
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Software Development
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Writing
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Coaching
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Architecture
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Accounting
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">Legal</p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Event Planning
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Interior Design
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Real-Estate
            </p>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between border-gray-200 border-b-2 bg-white px-4 pt-3 pb-5 text-left text-sm font-medium text-headfuse"
        >
          <span class="font-bold text-lg">Templates</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-green-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          <div class="Product_drop-down_nav_item-1 flex flex-col gap-2 mx-auto">
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Agreements
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Briefs
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Contracts
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Credit notes
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Estimates
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">Forms</p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Invoices
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Proposals
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Quotes
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Scopes of Work
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              All templates
            </p>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <div
        class="pricing_item_container_item border-gray-200 border-b-2 bg-white px-4 pt-3 pb-5 text-left text-sm font-medium text-headfuse"
      >
        <p class="hover:text-green-500 cursor-pointer font-bold text-lg">
          Pricing
        </p>
      </div>
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between border-gray-200 border-b-2 bg-white px-4 pt-3 pb-5 text-left text-sm font-medium text-headfuse"
        >
          <span class="font-bold text-lg">Resources</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-green-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          <div class="Product_drop-down_nav_item-1 flex flex-col gap-2 mx-auto">
            <p class="font-medium hover:text-green-500 cursor-pointer">Blogs</p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Help Center
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Contract Marker
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Invoice Generator
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Self-Employed Taxes Hub
            </p>
            <p class="font-medium hover:text-green-500 cursor-pointer">
              Freelance Rates Explorer
            </p>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <div
        class="pricing_item_container_item bg-white px-4 pt-3 pb-5 text-left text-sm font-medium text-headfuse"
      >
        <p class="hover:text-green-500 cursor-pointer font-bold text-lg">
          Reviews
        </p>
      </div>
    </div>
    <div class="mx-2 text-center my-2">
      <button class="w-full outline rounded-full py-2 outline-greenfuse">
        Login
      </button>
    </div>
    <div class="mx-2 text-center my-3 mt-4 pb-2">
      <button
        class="w-full outline rounded-full py-2 bg-green-600 outline-green-500 text-white font-semibold"
      >
        Start free
      </button>
    </div>
  </div>
</template>

<style></style>
