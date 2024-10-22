<script setup lang="ts">
import { defineProps } from 'vue'

// Define the types of props
type Props = {
	image: string
	title: string
	description: string
	tag: 'Clip' | 'Skin' | 'BGM'
}

// Define props with types
const { image, title, description, tag } = defineProps<Props>()
</script>
<template>
	<div
		class="flex flex-col gap-4 rounded border border-gray-300 p-2 shadow"
		:class="{
			'bg-white': tag === 'Clip' || tag === 'BGM',
			'bg-violet-500': tag === 'Skin',
		}"
	>
		<div class="relative overflow-hidden rounded">
			<img class="aspect-square w-[232px]" :src="image" alt="Clip" />
			<div
				class="absolute bottom-1 left-1 rounded px-2 py-1 text-xs text-white"
				:class="{
					'bg-indigo-600': tag === 'Clip',
					'bg-fuchsia-500': tag === 'Skin',
					'bg-orange-500': tag === 'BGM',
				}"
			>
				{{ tag }}
			</div>
		</div>
		<div class="flex w-[9.357rem] flex-col gap-1">
			<h3
				class="overflow-hidden text-ellipsis text-nowrap font-bold"
				:class="{
					'text-base': tag === 'Clip' || tag === 'BGM',
					'text-white': tag === 'Skin',
				}"
			>
				{{ title }}
			</h3>
			<p
				class="overflow-hidden text-ellipsis text-nowrap text-sm"
				:class="{
					'text-gray-800': tag === 'Clip' || tag === 'BGM',
					'text-white': tag === 'Skin',
				}"
				style="--tw-text-opacity: 0.6"
				v-html="description"
			/>
		</div>
	</div>
</template>
