<script setup lang="ts">
import type { ComposedCheckoutProps } from '@devprotocol/clubs-plugin-passports'
import { ComposedCheckout } from '@devprotocol/clubs-plugin-passports/components'

type Props = {
	composedItem: { payload: string; props: ComposedCheckoutProps }
}

const { composedItem } = defineProps<Props>()
</script>

<template>
	<div>
		<ComposedCheckout v-bind="composedItem.props" />
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
