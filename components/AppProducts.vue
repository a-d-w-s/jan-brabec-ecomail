<template>
  <div class="px-7 tablet:px-[60px]">
    <div class="mx-auto max-w-screen-desktop tablet:gap-[60px]">
      <div class="pb-[60px]">
        <ul class="flex tablet:justify-start justify-center gap-4">
          <li>
            <a href=""
               @click.prevent="sortItems('best')"
               :class="{
              'inline-block text-sm font-extrabold bg-green-light text-white rounded-md p-5 py-3 hover:opacity-70': sortOrder === 'best',
              'inline-block text-sm font-extrabold rounded-md text-green-light p-5 py-3': sortOrder !== 'best'
            }"
            >Nejlepší</a>
          </li>
          <li>
            <a href=""
               @click.prevent="sortItems('worst')"
               :class="{
              'inline-block text-sm font-extrabold bg-green-light text-white rounded-md p-5 py-3 hover:opacity-70': sortOrder === 'worst',
              'inline-block text-sm font-extrabold rounded-md text-green-light p-5 py-3': sortOrder !== 'worst'
            }"
            >Nejhorší</a>
          </li>
        </ul>
      </div>
      <div>
        <!-- Show loading state -->
        <div v-if="status === 'pending'">Načítám data...</div>

        <!-- Show error if any -->
        <div v-else-if="error">Error: {{ error.message }}</div>

        <!-- Show items when data is available -->
        <div v-else class="grid gap-7 tablet:gap-8 grid-cols-auto-fit-minmax">
          <AppCard
              v-for="item in visibleItems"
              :key="item.id"
              :product="item"
          />
        </div>
      </div>
      <div v-if="data && hasMoreItems" class="text-center mt-[60px] tablet:mt-[120px]">
        <button v-if="hasMoreItems" @click="showMoreItems" class="inline-block cursor-pointer rounded-md p-3 px-5 font-bold bg-green-soft text-green hover:opacity-80">Načíst další</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import type { Product } from '~/types/Product'

  // Fetch data asynchronously with useAsyncData
  const { data, status, error } = useAsyncData<Product[]>('data', () => $fetch('/api/getProducts'))

  const visibleCount = ref(6)
  const itemsPerPage = 6
  const sortOrder = ref<'best' | 'worst'>('best')

  // Define computed properties for sorting and displaying items
  const sortedItems = computed(() => {
    if (!data.value?.length) return []
    return [...data.value].sort((a, b) =>
        sortOrder.value === 'best'
            ? b.rating.rate - a.rating.rate
            : a.rating.rate - b.rating.rate
    )
  })

  const visibleItems = computed(() => sortedItems.value.slice(0, visibleCount.value))
  const hasMoreItems = computed(() => visibleCount.value < sortedItems.value.length)

  const sortItems = (order: 'best' | 'worst') => {
    sortOrder.value = order
    visibleCount.value = itemsPerPage
  }

  const showMoreItems = () => {
    if (hasMoreItems.value) {
      visibleCount.value += itemsPerPage
    }
  }
</script>

<style scoped></style>
