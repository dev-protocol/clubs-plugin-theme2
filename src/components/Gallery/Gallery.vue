<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { defineProps, ref } from 'vue'
import type { HomeConfig } from '../../types.ts'
import SlideContent from './SlideContent.vue'

type Props = {
	features: HomeConfig['features']
}

const { features } = defineProps<Props>()

const currentSlide = ref(0)

const breakpoints = {
	768: {
		itemsToShow: 2,
		itemsToScroll: 2,
	},
}

const slideTo = (index: number) => {
	currentSlide.value = index
}
</script>

<template>
	<Carousel
		id="gallery"
		:items-to-show="1"
		:items-to-scroll="1"
		:wrap-around="true"
		snap-align="start"
		:autoplay="0"
		:breakpoints="breakpoints"
		v-model="currentSlide"
	>
		<Slide v-for="(feature, index) in features" :key="index">
			<SlideContent :feature="feature" />
		</Slide>
	</Carousel>

	<div class="mt-4 w-full text-center" style="line-height: 0">
		<div class="relative inline-flex gap-0">
			<div
				class="absolute h-[5px] w-[50px] bg-gray-600 transition-all"
				:style="`left: calc((100% / ${features.length}) * ${currentSlide})`"
			/>
			<div
				v-for="index in features.length"
				class="h-[5px] w-[50px] bg-gray-200"
				@click="slideTo(index - 1)"
			></div>
		</div>
	</div>
</template>

<style>
.carousel__slide {
	padding-left: 8px;
	padding-right: 8px;
}
</style>
