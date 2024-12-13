<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import type { HomeConfig } from '../../types.ts'
import SlideContent from './SlideContent.vue'
import { useKeenSlider } from 'keen-slider/vue'
import 'keen-slider/keen-slider.min.css'

type Props = {
	features: HomeConfig['features']
	langs: string[]
}

const { features, langs } = defineProps<Props>()

const currentSlide = ref(0)
const mounted = ref(false)

const current = ref(1)
const [container, slider] = useKeenSlider({
	loop: true,
	slides: {
		perView: 2,
		spacing: 20,
	},
	slideChanged: (s) => {
		current.value = s.track.details.rel
	},
	breakpoints: {
		'(min-width: 768px)': {
			slides: {
				perView: 2,
				spacing: 20,
			},
		},
	},
}, [
	// add plugins here
])

const breakpoints = {
	768: {
		itemsToShow: 2,
		itemsToScroll: 2,
	},
}

const slideTo = (index: number) => {
	currentSlide.value = index
}

onMounted(() => {
	mounted.value = true
})
</script>
<template>
	<div ref="container" class="keen-slider">
		<div
			v-for="(feature, index) in features"
			:key="index"
			class="keen-slider__slide"
			:class="`number-slide${index + 1}`"
			:style="`min-width: 535.07px; max-width: 535.07px; transform: translate3d(${20 * index}px, 0px, 0px);`"
		>
			<SlideContent :feature="feature" :langs="langs" :as-placeholder="!mounted" />
		</div>
	</div>

	<div class="mt-4 w-full text-center" style="line-height: 0">
		<div class="relative inline-flex gap-0 overflow-hidden rounded-full">
			<div
				class="absolute h-[5px] w-[50px] rounded-full bg-gray-600 transition-all"
				:style="`left: calc((100% / ${features.length}) * ${current})`"
			/>
			<div
				v-for="index in features.length"
				class="h-[5px] w-[50px] bg-gray-200"
				@click="slider?.moveToIdx(index - 1)"
			></div>
		</div>
	</div>
</template>
