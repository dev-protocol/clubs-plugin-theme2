<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import { defineProps, onMounted, ref } from 'vue'

import 'swiper/swiper-bundle.css'
import SlideContent from './SlideContent.vue'
import type { HomeConfig } from '../../types.ts'

type Props = {
	features: HomeConfig['features']
	langs: string[]
}
const { features, langs } = defineProps<Props>()

register()
const mounted = ref(false)

onMounted(() => {
	mounted.value = true
})
</script>

<template>
	<swiper-container
		:slides-per-view="2"
		:space-between="20"
		:navigation="true"
		:breakpoints="{
			768: {
				slidesPerView: 2,
			},
		}"
	>
		<swiper-slide
			v-for="(feature, index) in features"
			:key="index"
			:class="`number-slide${index + 1}`"
			:style="`min-width: 535.07px; max-width: 535.07px; transform: translate3d(${20 * index}px, 0px, 0px);`"
		>
			<SlideContent
				:feature="feature"
				:langs="langs"
				:as-placeholder="!mounted"
			/>
		</swiper-slide>
	</swiper-container>
</template>
