import type { Product } from '~/types/Product'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)

    const response = await $fetch(config.public.urlApi, {
        headers: {
            'accept': 'application/json',
        }
    })

    if (response && typeof response === 'object') {
        return response as Product[]
    } else {
        throw new Error('Invalid response from API')
    }
})
