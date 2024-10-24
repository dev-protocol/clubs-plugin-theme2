<script setup lang="ts">
import clips1 from '../../assets/clips/clips01.png'
import clips2 from '../../assets/clips/clips02.png'
import clips3 from '../../assets/clips/clips03.png'
import skin1 from '../../assets/skins/image01.png'
import Clip from '../Clips/Clip.vue'
import { onMounted, ref } from 'vue'
import Gallery from '../Gallery/Gallery.vue'
import FilteringMenu from '../Clips/FilteringMenu.vue'

const items = ref<
	| {
			key: number
			tag: 'Clip' | 'Skin' | 'BGM'
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
		tag: 'Clip' | 'Skin' | 'BGM'
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
			min = Math.ceil(min)
			max = Math.floor(max)
			return Math.floor(Math.random() * (max - min + 1)) + min
		}

		const random = getRandomInt(0, 2)
		const tag = random === 0 ? 'Clip' : random === 1 ? 'Skin' : 'BGM'

		nextItems.push({
			key: nextKey,
			tag: tag,
			image: random === 0 ? clips1.src : random === 1 ? skin1.src : clips3.src,
			title: `PV - ${title}`,
			description: description,
		})
	}
	return nextItems
}

onMounted(async () => {
	items.value = getItems(0, 10)
})
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
					v-for="item in items"
					:tag="item.tag"
					:image="item.image"
					:title="item.title"
					:description="item.description"
				/>
			</section>
		</div>
	</div>
</template>
