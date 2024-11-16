<script setup lang="ts">
import { Checkout } from '@devprotocol/clubs-core/ui/vue'
import { checkoutPassportItems } from '@devprotocol/clubs-plugin-passports'

type Props = {
	itemImageSrc: string
	itemName: string
	description: string
	propertyAddress: string
	price?: number
	currency?: string
	chainId: number
	rpcUrl: string
}

// Define props with types
const {
	itemImageSrc,
	itemName,
	description,
	propertyAddress,
	chainId,
	rpcUrl,
	price,
} = defineProps<Props>()

const res = checkoutPassportItems(
	{
		name: itemName,
		adminPageVisibility: 'public',
		twitterHandle: 'foo',
		description: description,
		url: 'https://example.com',
		propertyAddress: propertyAddress,
		adminRolePoints: 0,
		chainId: chainId,
		rpcUrl: rpcUrl,
		plugins: [],
	},
	[],
)

console.log('res', res)

// When get component successfully, assign it to ComposedCheckout
const {
	payload,
	component: ComposedCheckout,
	props: ComposedCheckoutProps,
} = res
</script>

<template>
	<div>
		<!-- ComposedCheckout component -->
		<ComposedCheckout v-bind="ComposedCheckoutProps" />
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

#modal-container > div.modal-content > div > div > section > aside > p {
	word-break: break-all;
}
</style>
