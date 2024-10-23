<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'
import image1 from '../../assets/gallery/image01.png'
import image2 from '../../assets/gallery/image02.png'
import image3 from '../../assets/gallery/image03.png'
import image4 from '../../assets/gallery/image04.png'

const currentSlide = ref(0)

const slideTo = (index: number) => {
	currentSlide.value = index
}
</script>

<template>
	<Carousel
		id="gallery"
		:items-to-show="2"
		:items-to-scroll="2"
		:wrap-around="true"
		snap-align="start"
		:autoplay="0"
		v-model="currentSlide"
	>
		<Slide :key="1">
			<div class="">
				<img class="w-full" :src="image1.src" alt="" />
			</div>
		</Slide>
		<Slide :key="2">
			<div class="">
				<img class="w-full" :src="image2.src" alt="" />
			</div>
		</Slide>
		<Slide :key="3">
			<div class="">
				<img class="w-full" :src="image3.src" alt="" />
			</div>
		</Slide>
		<Slide :key="4">
			<div class="">
				<img class="w-full" :src="image4.src" alt="" />
			</div>
		</Slide>
	</Carousel>

	<div class="mt-4 w-full text-center" style="line-height: 0">
		<div class="relative inline-flex gap-0">
			<div class="absolute w-[50px] h-[5px] bg-gray-600 transition-all" :style="`left: calc((100% / 4) * ${currentSlide})`" />
			<div class="w-[50px] h-[5px] bg-gray-200" @click="slideTo(0)"></div>
			<div class="w-[50px] h-[5px] bg-gray-200" @click="slideTo(1)"></div>
			<div class="w-[50px] h-[5px] bg-gray-200" @click="slideTo(2)"></div>
			<div class="w-[50px] h-[5px] bg-gray-200" @click="slideTo(3)"></div>
		</div>
	</div>
</template>

<style>
.carousel__slide {
	padding-left: 8px;
	padding-right: 8px;
}
</style>
