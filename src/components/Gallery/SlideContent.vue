<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import { i18nFactory } from '@devprotocol/clubs-core'
import type { HomeConfig } from '../../types.ts'

type Props = {
	feature: HomeConfig['features'][0]
	langs: string[]
}

const { feature, langs } = defineProps<Props>()

const i18nBase = i18nFactory({
	title: feature.title,
	description: feature.description,
})
const i18n = ref<ReturnType<typeof i18nBase>>(i18nBase(langs))
onMounted(() => {
	i18n.value = i18nBase(navigator.languages)
})
</script>

<template>
	<div
		class="flex aspect-[5/3] w-full overflow-hidden rounded bg-cover bg-top bg-no-repeat md:aspect-[5/3] md:flex-row md:rounded-2xl md:bg-right"
		:style="`background-image: url(${feature.image});`"
	>
		<div
			class="flex w-full flex-col items-start justify-end p-6 font-bold text-white"
			:style="`background-image: linear-gradient(0deg, ${feature.color} 10%, transparent 100%);`"
		>
			<p class="text-[8.142vw] md:text-[1.852vw]">
				{{ i18n('title') }}
			</p>
			<p class="text-[3.563vw] md:text-[0.810vw]">
				{{ i18n('description') }}
			</p>
		</div>
	</div>
</template>

<style scoped></style>
