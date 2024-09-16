<script setup lang="ts">
import clips1 from '../../assets/clips/clips01.png'
import clips2 from '../../assets/clips/clips02.png'
import clips3 from '../../assets/clips/clips03.png'
import clips4 from '../../assets/clips/clips04.png'
</script>

<template>
	<div class="clips__container">
		<div class="mb-4">
			<h2 class="text-2xl">Clips</h2>
		</div>
		<div
			class="flex flex-wrap justify-start gap-4 text-white md:flex-nowrap md:gap-6"
		>
			<div class="clips__wrapper flex flex-col gap-2 rounded p-2">
				<div class="mb-2 h-[9.357rem] w-[9.357rem] rounded object-contain">
					<img :src="clips1.src" alt="Clip" />
				</div>
				<div class="flex w-[9.357rem] flex-col gap-1">
					<h3
						class="overflow-hidden text-ellipsis text-nowrap text-base font-bold"
					>
						Clip Title
					</h3>
					<p
						class="overflow-hidden text-ellipsis text-nowrap text-sm text-white"
						style="--tw-text-opacity: 0.6"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</div>
			<div class="clips__wrapper flex flex-col gap-2 rounded p-2">
				<div class="mb-2 h-[9.357rem] w-[9.357rem] rounded object-contain">
					<img :src="clips2.src" alt="Clip" />
				</div>
				<div class="flex w-[9.357rem] flex-col gap-1">
					<h3
						class="overflow-hidden text-ellipsis text-nowrap text-base font-bold"
					>
						Clip Title
					</h3>
					<p
						class="overflow-hidden text-ellipsis text-nowrap text-sm text-white"
						style="--tw-text-opacity: 0.6"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</div>
			<div class="clips__wrapper flex flex-col gap-2 rounded p-2">
				<div class="mb-2 h-[9.357rem] w-[9.357rem] rounded object-contain">
					<img :src="clips3.src" alt="Clip" />
				</div>
				<div class="flex w-[9.357rem] flex-col gap-1">
					<h3
						class="overflow-hidden text-ellipsis text-nowrap text-base font-bold"
					>
						Clip Title
					</h3>
					<p
						class="overflow-hidden text-ellipsis text-nowrap text-sm text-white"
						style="--tw-text-opacity: 0.6"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</div>
			<div class="clips__wrapper flex flex-col gap-2 rounded p-2">
				<div class="mb-2 h-[9.357rem] w-[9.357rem] rounded object-contain">
					<img :src="clips4.src" alt="Clip" />
				</div>
				<div class="flex w-[9.357rem] flex-col gap-1">
					<h3
						class="overflow-hidden text-ellipsis text-nowrap text-base font-bold"
					>
						Clip Title
					</h3>
					<p
						class="overflow-hidden text-ellipsis text-nowrap text-sm text-white"
						style="--tw-text-opacity: 0.6"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.clips__wrapper {
	background-color: hsl(247, 45%, 31%);
}
</style>
