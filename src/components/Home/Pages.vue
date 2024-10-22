<script setup lang="ts">
import clips1 from '../../assets/clips/clips01.png'
import clips2 from '../../assets/clips/clips02.png'
import clips3 from '../../assets/clips/clips03.png'
import Clip from '../Clips/Clip.vue'
import { onMounted, ref } from 'vue'

const items = ref<
	| {
	key: number
	tag: "Clip" | "Skin" | "BGM"
	image: string
	title: string
	description: string
}[]
	| []
>([])

// Todo Itemsを実装したらこちらは消す
const getItems = (nextGroupKey: number, count: number) => {
	const nextItems: {
		key: number
		tag: "Clip" | "Skin" | "BGM"
		image: string
		title: string
		description: string
	}[] = []

	for (let i = 0; i < count; ++i) {
		const nextKey = nextGroupKey * count + i

		// ランダムな長さのタイトルを作成する
		const titleLength = Math.floor(Math.random() * 30) + 1
		const title = Array.from({ length: titleLength }, () => 'foo is bar.').join(
			'',
		)

		// ランダムな長さのdescriptionを作成する
		const descriptionLength = Math.floor(Math.random() * 10) + 1
		const description = Array.from(
			{ length: descriptionLength },
			() => 'bar',
		).join('')

		// ランダムなタグを作成する
		const getRandomInt = (min: number, max: number) => {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		const random = getRandomInt(0, 2)
		const tag = random === 0 ? "Clip" : random === 1 ? "Skin" : "BGM"

		nextItems.push({
			key: nextKey,
			tag: tag,
			image:
				random === 0
					? clips1.src
					: random === 1
						? clips2.src
						: clips3.src,
			title: `PV - ${title}`,
			description: description,
		})
	}
	return nextItems
}

onMounted(async () => {
	console.log("mounted")
	items.value = getItems(0, 10)
})

</script>
<template>
	<div class="flex gap-9">
		<!-- filtering menu -->
		<ul class="flex flex-col gap-4">
			<li>
				<button
					type="button"
					class="
									py-4
									px-8
									text-white
									text-sm
									font-bold
									bg-gray-800
									hover:bg-gray-900
									rounded-lg
									ring-2
									ring-gray-800
									ring-offset-2
									ring-offset-white
									border-gray-800
									">All</button>
			</li>
			<li>
				<button
					type="button"
					class="
									flex
									justify-between
									gap-1
									p-4
									text-white
									text-sm
									font-bold
									bg-gray-800
									hover:bg-gray-900
									rounded-lg
									">
					Clip
					<span class="py-1 px-2 bg-blue-100 text-xs text-cyan-800 font-bold rounded-2xl">78</span>
				</button>
			</li>
			<li>
				<button
					type="button"
					class="
									flex
									justify-between
									gap-1
									p-4
									text-white
									text-sm
									font-bold
									bg-gray-800
									hover:bg-gray-900
									rounded-lg
									">
					Skin
					<span class="py-1 px-2 bg-blue-100 text-xs text-cyan-800 font-bold rounded-2xl">12</span>
				</button>
			</li>
			<li>
				<button
					type="button"
					class="
									flex
									justify-between
									gap-1
									p-4
									text-white
									text-sm
									font-bold
									bg-gray-800
									hover:bg-gray-900
									rounded-lg
									">
					BGM
					<span class="py-1 px-2 bg-blue-100 text-xs text-cyan-800 font-bold rounded-2xl">6</span>
				</button>
			</li>
			<li>
				<button
					type="button"
					class="
									flex
									justify-between
									gap-1
									p-4
									text-white
									text-sm
									font-bold
									bg-gray-800
									hover:bg-gray-900
									rounded-lg
									">
					PV
					<span class="py-1 px-2 bg-blue-100 text-xs text-cyan-800 font-bold rounded-2xl">6</span>
				</button>
			</li>
		</ul>
		<!-- content -->
		<div class="flex flex-wrap gap-4">
			<Clip v-for="item in items"
						:tag="item.tag"
						:image="item.image"
						:title="item.title"
						:description="item.description"
			/>
		</div>
	</div>
</template>
