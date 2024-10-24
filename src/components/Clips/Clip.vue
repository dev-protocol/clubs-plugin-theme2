<script setup lang="ts">
import { defineProps, ref, useTemplateRef, watchEffect } from 'vue'
import { FastAverageColor } from 'fast-average-color'
import { PassportItemAssetType } from '@devprotocol/clubs-plugin-passport'

// Define the types of props
type Props = {
	image: string
	title: string
	description: string
	tag: PassportItemAssetType
}

const SKIN = ['css', 'stylesheet-link']
const CLIP = ['image', 'image-link']
const BGM = ['bgm', 'bgm-link']
const VIDEO = ['video', 'video-link']

const getTagName = (tag: PassportItemAssetType) => {
	if (SKIN.includes(tag)) return 'Skin'
	if (CLIP.includes(tag)) return 'Clip'
	if (BGM.includes(tag)) return 'BGM'
	if (VIDEO.includes(tag)) return 'Video'
	return 'Unknown'
}

// Define props with types
const { image, title, description, tag } = defineProps<Props>()

const color = ref<any>('')

const imageEle = useTemplateRef('image-element')

watchEffect(async () => {
	if (SKIN.includes(tag) && imageEle.value) {
		const fac = new FastAverageColor()
		color.value = await fac
			.getColorAsync(imageEle.value)
			.catch((e) => new Error(e))

		console.log(color.value)
	}
})
</script>
<style scoped>
.gradation {
	position: relative;
}

.gradation::before {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: linear-gradient(0deg, v-bind(color.hex) 25%, transparent);
}
</style>
<template>
	<div
		class="flex flex-col gap-4 overflow-hidden rounded border border-gray-300 p-1 shadow md:p-2"
		:class="{
			'bg-white':
				CLIP.includes(tag) || BGM.includes(tag) || VIDEO.includes(tag),
			'gradation bg-cover bg-no-repeat': SKIN.includes(tag),
		}"
		:style="{
			backgroundImage: SKIN.includes(tag) ? `url(${image})` : '',
		}"
	>
		<div class="relative overflow-hidden rounded">
			<img
				ref="image-element"
				class="aspect-square h-[40.458vw] w-[40.458vw] md:h-[232px] md:w-[232px]"
				:class="{
					hidden: SKIN.includes(tag),
				}"
				:src="image"
				alt="Clip"
			/>
			<div
				v-if="SKIN.includes(tag)"
				class="h-[40.458vw] w-[40.458vw] md:h-[232px] md:w-[232px]"
			/>
			<div
				class="absolute bottom-1 left-1 rounded px-2 py-1 text-xs text-white"
				:class="{
					'bg-indigo-600': CLIP.includes(tag),
					'bg-fuchsia-500': SKIN.includes(tag),
					'bg-orange-500': BGM.includes(tag),
					'bg-yellow-500': VIDEO.includes(tag),
				}"
			>
				{{ getTagName(tag) }}
			</div>
		</div>
		<div class="z-10 flex w-[9.357rem] flex-col gap-1">
			<h3
				class="overflow-hidden text-ellipsis text-nowrap font-bold"
				:class="{
					'text-base':
						CLIP.includes(tag) || BGM.includes(tag) || VIDEO.includes(tag),
					'text-white': SKIN.includes(tag),
				}"
			>
				{{ title }}
			</h3>
			<p
				class="overflow-hidden text-ellipsis text-nowrap text-sm"
				:class="{
					'text-gray-800':
						CLIP.includes(tag) || BGM.includes(tag) || VIDEO.includes(tag),
					'text-white': SKIN.includes(tag),
				}"
				style="--tw-text-opacity: 0.6"
				v-html="description"
			/>
		</div>
	</div>
</template>
