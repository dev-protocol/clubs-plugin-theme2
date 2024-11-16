<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import { FastAverageColor, FastAverageColorResult } from 'fast-average-color'
import { PassportItemAssetType } from '@devprotocol/clubs-plugin-passports'
import ModalContent from './ModalContent.vue'
import Modal from '../Home/Modal.vue'
import {
	BGM,
	CLIP,
	getTagName,
	SKIN,
	VIDEO,
} from '../../utils/filtering-clips.ts'

// Define the types of props
type Props = {
	image: string
	video?: string
	title: string
	description: string
	tag: PassportItemAssetType
	propertyAddress?: string
	price?: number
	currency?: string
	discountPrice?: number
	discountCurrency?: string
	discountStart?: number
	discountEnd?: number
	chainId?: number
	rpcUrl?: string
}

// Define props with types
const {
	image,
	video,
	title,
	description,
	tag,
	discountPrice,
	discountCurrency,
	discountStart,
	discountEnd,
} = defineProps<Props>()

// discount state
const isDiscountActive = ref(false)

// check if the discount is active
if (discountStart && discountEnd) {
	const now = new Date().getTime()
	isDiscountActive.value = discountStart < now && now < discountEnd
}

// modal visibility
const modalVisible = ref(false)

// open modal
const modalOpen = () => {
	modalVisible.value = true
}

// close modal
const modalClose = () => {
	modalVisible.value = false
}

const color = ref<FastAverageColorResult>()

onMounted(async () => {
	if (SKIN.includes(tag)) {
		const fac = new FastAverageColor()
		color.value = await fac.getColorAsync(image).catch((e) => {
			console.error(e)
			return undefined
		})
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
	background: linear-gradient(0deg, v-bind(color?.hex) 25%, transparent);
}
</style>
<template>
	<div
		class="flex aspect-[3/4] flex-col gap-4 overflow-hidden rounded border border-gray-300 p-1 shadow md:p-2"
		:class="{
			'bg-white':
				CLIP.includes(tag) || BGM.includes(tag) || VIDEO.includes(tag),
			'gradation bg-cover bg-no-repeat': SKIN.includes(tag),
		}"
		:style="{
			backgroundImage: SKIN.includes(tag) ? `url(${image})` : '',
		}"
		@click.stop="modalOpen"
	>
		<div class="relative overflow-hidden rounded">
			<img
				v-if="CLIP.includes(tag)"
				class="aspect-square w-full object-cover"
				:src="image"
				alt="Clip"
			/>
			<video
				v-if="VIDEO.includes(tag) && video"
				class="aspect-square w-full object-cover"
				autoplay
				muted
				loop
				controlsList="nodownload"
				:src="video"
				alt="Clip"
			/>
			<div
				v-if="SKIN.includes(tag)"
				class="aspect-square w-full object-cover"
				role="presentation"
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
		<div class="z-10 flex flex-col gap-1">
			<h3
				class="overflow-hidden text-ellipsis text-nowrap font-bold"
				:class="{
					'text-base':
						CLIP.includes(tag) || BGM.includes(tag) || VIDEO.includes(tag),
					'text-white': SKIN.includes(tag) && color?.isDark,
					'text-black': SKIN.includes(tag) && color?.isLight,
				}"
			>
				{{ title }}
			</h3>
			<div
				class="flex w-full flex-col justify-start gap-0 text-sm"
				:class="{
					'text-gray-800':
						CLIP.includes(tag) || BGM.includes(tag) || VIDEO.includes(tag),
					'text-white': SKIN.includes(tag) && color?.isDark,
					'text-black': SKIN.includes(tag) && color?.isLight,
				}"
				style="--tw-text-opacity: 0.6"
			>
				<p
					v-if="isDiscountActive"
					class="flex gap-1 overflow-hidden text-ellipsis text-nowrap"
				>
					<span class="text-right" :class="{ 'font-bold': isDiscountActive }">
						{{ discountPrice }}
					</span>

					<span class="text-right" :class="{ 'font-bold': isDiscountActive }">
						{{ discountCurrency }}
					</span>
				</p>
				<p
					class="flex gap-1 overflow-hidden text-ellipsis text-nowrap"
					:class="{
						'line-through': isDiscountActive,
					}"
				>
					<span
						class="text-right text-[inherit]"
						:class="{ 'text-sm': isDiscountActive }"
					>
						{{ price }}
					</span>

					<span
						class="text-right text-[inherit]"
						:class="{ 'text-sm': isDiscountActive }"
					>
						{{ currency }}
					</span>
				</p>
			</div>
		</div>
		<Modal
			:is-visible="modalVisible"
			:modal-content="ModalContent"
			:attrs="{
				amount: price,
				currency: currency,
				propertyAddress: propertyAddress,
				itemImageSrc: image,
				itemName: title,
				description: description,
				chainId: chainId,
				rpcUrl: 'https://rpc-mainnet.maticvigil.com',
			}"
			@close-event="modalClose"
		/>
	</div>
</template>
