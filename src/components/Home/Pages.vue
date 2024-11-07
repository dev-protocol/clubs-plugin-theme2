<script setup lang="ts">
import Clip from '../Clips/Clip.vue'
import { defineProps, ref, watch, watchEffect } from 'vue'
import Gallery from '../Gallery/Gallery.vue'
import FilteringMenu from '../Clips/FilteringMenu.vue'
import type { PassportItemData } from '../../types.ts'
import { PassportItemAssetType } from '@devprotocol/clubs-plugin-passport'

type Props = {
	passportOfferings: PassportItemData[]
}

type Category = 'All' | 'Skin' | 'Clip' | 'BGM' | 'Video' | 'Unknown'

const { passportOfferings } = defineProps<Props>()

const selectedCategory = ref<Category>('All')
const filteredItems = ref<PassportItemData[]>([])

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

watch(selectedCategory, (category) => {
	filteredItems.value = passportOfferings.filter((item) => {
		const itemAssetType = item.passportItem.itemAssetType
		const key = getTagName(itemAssetType)
		return category === 'All' || key === category
	})
}, { immediate: true })

</script>
<template>
	<div class="flex flex-col gap-9 md:flex-row">
		<!-- filtering menu -->
		<FilteringMenu class="hidden md:flex" :items="passportOfferings" @selected-category="(category) => {
			selectedCategory = category
		}" />

		<!-- content -->
		<div class="flex flex-col gap-9 md:gap-16">
			<section>
				<Gallery />
			</section>
			<FilteringMenu class="flex md:hidden" :items="passportOfferings" />
			<section
				class="flex flex-wrap justify-between gap-4 md:justify-start md:gap-4"
			>
				<Clip
					v-for="item in filteredItems"
					:tag="item.passportItem.itemAssetType"
					:image="item.imageSrc"
					:title="item.passportItem.itemAssetType"
					:description="item.description"
					:property-address="item.id"
					:price="item.price"
					:currency="item.currency"
				/>
			</section>
		</div>
	</div>
</template>
