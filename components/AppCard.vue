<template>
  <div class="flex flex-col rounded-md">
    <div class="relative rounded-t-lg bg-green-light aspect-[400/222]">
      <div class="absolute top-8 right-8 text-sm font-extrabold text-white">
        {{ product.rating.rate }}/{{ product.rating.count }}
      </div>
      <img :src="categoryImageSrc" class="w-full rounded-t-lg" alt="">
    </div>
    <div class="flex flex-1 flex-col rounded-b-lg bg-gradient-to-b from-white p-8 to-gray">
      <div class="flex h-full flex-col gap-8">
        <div class="">
          <h2 class="text-2xl font-bold tracking-letter-negative-2">
            {{ truncateText(product.title) }}
          </h2>
        </div>
        <div class="flex-1">
          <p>
            {{ truncateText(product.description, 142) }}
          </p>
        </div>
      </div>
      <div class="mt-12">
        <NuxtLink
            :to="product.image"
            target="_blank"
            class="inline-block cursor-pointer rounded-md p-3 px-5 font-bold text-white bg-green-deep hover:opacity-80"
        >
          Detail produktu
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Product } from '~/types/Product'
  import truncateText from '~/utils/truncateText'
  import categoryImage from '~/utils/categoryImage'

  const props = defineProps<{
    product: Product
  }>();

  const categoryImageSrc = computed(() => categoryImage(props.product.category))
</script>

<style scoped></style>
