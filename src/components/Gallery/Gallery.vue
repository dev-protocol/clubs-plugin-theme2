<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'
import image1 from '../../assets/gallery/image01.png'
import image2 from '../../assets/gallery/image02.png'
import image3 from '../../assets/gallery/image03.png'
import image4 from '../../assets/gallery/image04.png'
import thumbnail1 from '../../assets/gallery/thumbnail01.png'
import thumbnail2 from '../../assets/gallery/thumbnail02.png'
import thumbnail3 from '../../assets/gallery/thumbnail03.png'
import thumbnail4 from '../../assets/gallery/thumbnail04.png'

const currentSlide = ref(0)

const slideTo = (index: number) => {
	currentSlide.value = index
}
</script>

<template>
	<Carousel
		id="gallery"
		:items-to-show="1"
		:wrap-around="false"
		v-model="currentSlide"
		class="mb-3"
	>
		<Slide :key="1">
			<div class="carousel__item">
				<img class="w-full" :src="image1.src" alt="" />
			</div>
		</Slide>
		<Slide :key="2">
			<div class="carousel__item">
				<img class="w-full" :src="image2.src" alt="" />
			</div>
		</Slide>
		<Slide :key="3">
			<div class="carousel__item">
				<img class="w-full" :src="image3.src" alt="" />
			</div>
		</Slide>
		<Slide :key="4">
			<div class="carousel__item">
				<img class="w-full" :src="image4.src" alt="" />
			</div>
		</Slide>
	</Carousel>

	<Carousel
		id="thumbnails"
		:items-to-show="4"
		snapAlign="start"
		:mouseDrag="false"
		:touchDrag="false"
	>
		<Slide :key="1">
			<div class="" @click="slideTo(0)">
				<img :src="thumbnail1.src" alt="" />
			</div>
		</Slide>
		<Slide :key="2">
			<div class="" @click="slideTo(1)">
				<img :src="thumbnail2.src" alt="" />
			</div>
		</Slide>
		<Slide :key="3">
			<div class="" @click="slideTo(2)">
				<img :src="thumbnail3.src" alt="" />
			</div>
		</Slide>
		<Slide :key="4">
			<div class="" @click="slideTo(3)">
				<img :src="thumbnail4.src" alt="" />
			</div>
		</Slide>
	</Carousel>
</template>

<style>
.carousel__item {
	width: 100%;
	border-radius: 8px;
}

#thumbnails {
	.carousel__track {
		gap: 1rem;
	}

	.carousel__slide {
		width: auto !important;
	}
}
</style>
