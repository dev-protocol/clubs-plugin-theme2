<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { defineProps, ref } from 'vue'
import { i18nFactory } from '@devprotocol/clubs-core'
import type { HomeConfig } from '../../types.ts'

type Props = {
	features: HomeConfig['features']
}

const { features } = defineProps<Props>()

function mapFeaturesToTitles(features: HomeConfig['features']) {
	return features.reduce((acc, feature, index) => {
		return {
			...acc,
			[`title${index}`]: feature.title,
			[`description${index}`]: feature.description
		}
	}, {})
}

const i18nSeed = mapFeaturesToTitles(features)
const i18nBase = i18nFactory(i18nSeed)
const i18n = i18nBase(navigator.languages)

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
			<div
				class="flex aspect-[5/3] w-full overflow-hidden rounded bg-cover bg-top bg-no-repeat md:aspect-[5/3] md:flex-row md:rounded-2xl md:bg-right"
				:style="`background-image: url(${feature.image});`"
			>
				<div
					class="flex w-full flex-col items-start justify-end p-6 font-bold text-white"
					:style="`background-image: linear-gradient(0deg, ${feature.color} 10%, transparent 100%);`"
				>
					<p class="text-[8.142vw] md:text-[1.852vw]">{{ i18n(`title${index}`) }}</p>
					<p class="text-[3.563vw] md:text-[0.810vw]">{{ i18n(`description${index}`) }}</p>
				</div>
			</div>
		</Slide>
	</Carousel>

	<div class="mt-4 w-full text-center" style="line-height: 0">
		<div class="relative inline-flex gap-0">
			<div
				class="absolute h-[5px] w-[50px] bg-gray-600 transition-all"
				:style="`left: calc((100% / 4) * ${currentSlide})`"
			/>
			<div class="h-[5px] w-[50px] bg-gray-200" @click="slideTo(0)"></div>
			<div class="h-[5px] w-[50px] bg-gray-200" @click="slideTo(1)"></div>
			<div class="h-[5px] w-[50px] bg-gray-200" @click="slideTo(2)"></div>
			<div class="h-[5px] w-[50px] bg-gray-200" @click="slideTo(3)"></div>
		</div>
	</div>
</template>

<style>
.carousel__slide {
	padding-left: 8px;
	padding-right: 8px;
}
</style>
