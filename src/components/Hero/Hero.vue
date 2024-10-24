<script setup lang="ts">
import { defineProps } from 'vue'

type Props = {
	image?: string
	logo?: string
	text?: string
}

const { image, logo, text } = defineProps<Props>()
</script>

<template>
	<section class="relative md:mb-2 md:p-2">
		<div
			class="flex flex-col-reverse overflow-hidden rounded-b-xl md:rounded-2xl md:flex-row  aspect-[2/3] md:aspect-[2/1] bg-top md:bg-right bg-cover bg-no-repeat"
			:style="`background-image: url(${image});`"
		>
			<div
				class="gradient flex w-full flex-col justify-center gap-2 px-8 py-9 md:w-1/2 md:px-8 md:py-0"
			>
				<img :src="logo" class="" alt="" />
				<p
					class="text-[6.107vw] leading-none text-white md:text-[1.3889vw] md:leading-normal"
				>
					{{ text }}
				</p>
			</div>
			<div class="w-full md:w-1/2">
			</div>
		</div>
	</section>
</template>

<style scoped>
.gradient {
	background-image: linear-gradient(0deg, #4A0C43 43%, transparent 100%);
}

@media (min-width: 768px) {
	.gradient {
		background-image: linear-gradient(90deg, #4A0C43 69%, transparent 100%);
	}
}

</style>
