<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { PassportItemData } from '../../types.ts'
import { PassportItemAssetType } from '@devprotocol/clubs-plugin-passport'

type Props = {
	image?: string
	logo?: string
	text?: string
	gradientColor?: string
	items: PassportItemData[]
}

type Category = 'All' | 'Skin' | 'Clip' | 'BGM' | 'Video' | 'Unknown'

const { image, logo, text, items } = defineProps<Props>()

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

// itemsの中のpassportItem.itemAssetTypeでグループ化
const groupedItems = items.reduce(
	(acc, item) => {
		const itemAssetType = item.passportItem.itemAssetType
		const key = getTagName(itemAssetType)

		if (!acc[key]) {
			acc[key] = []
		}
		acc[key].push(item)
		return acc
	},
	{} as Record<Category, PassportItemData[]>,
)

const selectedCategory = ref<Category>('All')
selectedCategory.value = 'All'
</script>

<template>
	<ul
		class="flex flex-row gap-4 overflow-x-auto p-2 md:flex-col md:overflow-visible md:p-0"
	>
		<li>
			<button
				type="button"
				class="w-full rounded-lg bg-gray-800 p-4 text-sm font-bold text-white hover:bg-gray-900"
				:class="{
					'border-gray-800 ring-2 ring-gray-800 ring-offset-2 ring-offset-white':
						selectedCategory === 'All',
				}"
				@click="
					() => {
						selectedCategory = 'All'
						$emit('selectedCategory', 'All')
					}
				"
			>
				All
			</button>
		</li>
		<li v-for="[category, _] of Object.entries(groupedItems)">
			<button
				type="button"
				class="flex w-full items-center justify-between gap-1 rounded-lg bg-gray-800 p-4 text-sm font-bold text-white hover:bg-gray-900"
				:class="{
					'border-gray-800 ring-2 ring-gray-800 ring-offset-2 ring-offset-white':
						selectedCategory === category,
				}"
				@click="
					() => {
						selectedCategory = category as Category
						$emit('selectedCategory', category)
					}
				"
			>
				{{ category }}
				<span
					class="rounded-2xl bg-blue-100 px-2 py-1 text-xs font-bold text-cyan-800"
					>{{ groupedItems[category].length }}</span
				>
			</button>
		</li>
	</ul>
</template>
