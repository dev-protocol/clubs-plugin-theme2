<script setup lang="ts">
import Clip from '../Clips/Clip.vue'
import { defineProps } from 'vue'
import Gallery from '../Gallery/Gallery.vue'
import FilteringMenu from '../Clips/FilteringMenu.vue'
import type { PassportItemData } from '../../types.ts'

type Props = {
	passportOfferings: PassportItemData[]
}

const { passportOfferings } = defineProps<Props>()
</script>
<template>
	<div class="flex flex-col gap-9 md:flex-row">
		<!-- filtering menu -->
		<FilteringMenu class="hidden md:flex" />

		<!-- content -->
		<div class="flex flex-col gap-9 md:gap-16">
			<section>
				<Gallery />
			</section>
			<FilteringMenu class="flex md:hidden" />
			<section
				class="flex flex-wrap justify-between gap-2 md:justify-start md:gap-4"
			>
				<Clip
					v-for="item in passportOfferings"
					:tag="item.passportItem.itemAssetType"
					:image="item.imageSrc"
					:title="item.passportItem.itemAssetType"
					:description="`${item.price} ${item.currency}`"
				/>
			</section>
		</div>
	</div>
</template>
