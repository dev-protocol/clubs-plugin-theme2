<script setup lang="ts">
import Clip from '../Clips/Clip.vue'
import { defineProps, ref, watch, watchEffect } from 'vue'
import Gallery from '../Gallery/Gallery.vue'
import FilteringMenu from '../Clips/FilteringMenu.vue'
import type { ClipCategory, HomeConfig, PassportItemData } from '../../types.ts'
import { getTagName } from '../../utils/filtering-clips.ts'

type Props = {
	passportOfferings: PassportItemData[]
	homeConfig: HomeConfig
}

const { passportOfferings, homeConfig } = defineProps<Props>()

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
	<div class="flex grow flex-col gap-9 md:flex-row">
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
				<Gallery :features="homeConfig.features" />
			</div>
			<FilteringMenu
				class="flex md:hidden"
				:items="passportOfferings"
				@selected-category="
					(category) => {
						selectedCategory = category
					}
				"
			/>
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
