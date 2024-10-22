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
<style scoped>
.gradation {
	position: relative;
}

.gradation::before {
	content: "";
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: linear-gradient(0deg, #7639EE 25%, transparent);
}
</style>
<template>
	<div
		class="flex flex-col gap-4 p-2 rounded border border-gray-300 shadow overflow-hidden"
		:class="{
			'bg-white': tag === 'Clip' || tag === 'BGM',
			'gradation bg-cover bg-no-repeat': tag === 'Skin',
		}"
		:style="{
			'backgroundImage': tag === 'Skin' ? `url(${image})` : '',
		}"
	>
		<div class="relative overflow-hidden rounded">
			<img v-if="tag !== 'Skin'" class="aspect-square w-[232px] h-[232px]" :src="image" alt="Clip" />
			<div v-if="tag === 'Skin'" class="w-[232px] h-[232px]" />
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
		<div class="flex w-[9.357rem] flex-col gap-1 z-10">
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
