<script setup lang="ts">
import Clip from '../Clips/Clip.vue'
import { defineProps, ref, watch, watchEffect } from 'vue'
import Gallery from '../Gallery/Gallery.vue'
import FilteringMenu from '../Clips/FilteringMenu.vue'
import type { ClipCategory, HomeConfig, PassportItemData } from '../../types.ts'
import { CLIP, getTagName, SKIN, VIDEO } from '../../utils/filtering-clips.ts'

type Props = {
	passportOfferings: PassportItemData[]
	homeConfig: HomeConfig
	langs: string[]
}

const { passportOfferings, homeConfig, langs } = defineProps<Props>()

const selectedCategory = ref<ClipCategory>('All')
const filteredItems = ref<PassportItemData[]>([])

watch(
	selectedCategory,
	(category) => {
		filteredItems.value = passportOfferings.filter((item) => {
			const itemAssetType = item.passportItem.itemAssetType
			const key = getTagName(itemAssetType)
			return category === 'All' || key === category
		})
	},
	{ immediate: true },
)
</script>
<template>
	<div class="relative flex grow flex-col items-start gap-9 md:flex-row">
		<!-- filtering menu -->
		<FilteringMenu
			class="hidden md:flex"
			:items="passportOfferings"
			@selected-category="
				(category) => {
					selectedCategory = category
				}
			"
		/>

		<!-- content -->
		<div class="flex w-full flex-col gap-9 md:gap-16">
			<div>
				<Gallery :features="homeConfig.features" :langs="langs" />
			</div>
			<FilteringMenu
				class="-mx-2 flex md:hidden"
				:items="passportOfferings"
				@selected-category="
					(category) => {
						selectedCategory = category
					}
				"
			/>
			<section
				class="grid grid-cols-5 grid-cols-[repeat(auto-fill,minmax(150px,1fr))] justify-between gap-4 md:gap-4 lg:grid-cols-5"
			>
				<Clip
					v-for="item in filteredItems"
					:tag="item.passportItem.itemAssetType"
					:image="
						CLIP.includes(item.passportItem.itemAssetType)
							? item.passportItem.itemAssetValue
							: SKIN.includes(item.passportItem.itemAssetType)
								? item.imageSrc
								: item.imageSrc
					"
					:video="
						VIDEO.includes(item.passportItem.itemAssetType)
							? item.passportItem.itemAssetValue
							: undefined
					"
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
