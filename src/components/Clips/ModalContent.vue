<script setup lang="ts">
import { Checkout } from '@devprotocol/clubs-core/ui/vue'
import { PassportItemAssetType } from '@devprotocol/clubs-plugin-passport'

type Props = {
	itemImageSrc: string
	itemName: string
	description: string
	tag: PassportItemAssetType
	propertyAddress?: string
	price?: number
	currency?: string
}

// Define props with types
const { itemImageSrc, itemName, description, tag } = defineProps<Props>()
</script>

<template>
	<div>
		<Checkout
			:amount="price"
			:currency="currency"
			:propertyAddress="propertyAddress"
			:itemImageSrc="itemImageSrc"
			:itemName="itemName"
			:description="description"
		/>
	</div>
</template>

<style>
#modal-container > div.modal-content {
	width: auto;
}

#modal-container > div.modal-content > div {
	margin-bottom: 0;
}

#modal-container > div.modal-content > div > div > section > div > span {
	display: block;
	overflow: hidden;
}
</style>
