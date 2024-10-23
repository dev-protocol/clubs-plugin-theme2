<script setup lang="ts">
</script>

<template>
	<ul
		class="flex flex-row gap-4 overflow-x-auto md:flex-col md:overflow-visible"
	>
		<li>
			<button
				type="button"
				class="rounded-lg border-gray-800 bg-gray-800 px-8 py-4 text-sm font-bold text-white ring-2 ring-gray-800 ring-offset-2 ring-offset-white hover:bg-gray-900"
			>
				All
			</button>
		</li>
		<li>
			<button
				type="button"
				class="flex justify-between gap-1 rounded-lg bg-gray-800 p-4 text-sm font-bold text-white hover:bg-gray-900"
			>
				Clip
				<span
					class="rounded-2xl bg-blue-100 px-2 py-1 text-xs font-bold text-cyan-800"
				>78</span
				>
			</button>
		</li>
		<li>
			<button
				type="button"
				class="flex justify-between gap-1 rounded-lg bg-gray-800 p-4 text-sm font-bold text-white hover:bg-gray-900"
			>
				Skin
				<span
					class="rounded-2xl bg-blue-100 px-2 py-1 text-xs font-bold text-cyan-800"
				>12</span
				>
			</button>
		</li>
		<li>
			<button
				type="button"
				class="flex justify-between gap-1 rounded-lg bg-gray-800 p-4 text-sm font-bold text-white hover:bg-gray-900"
			>
				BGM
				<span
					class="rounded-2xl bg-blue-100 px-2 py-1 text-xs font-bold text-cyan-800"
				>6</span
				>
			</button>
		</li>
		<li>
			<button
				type="button"
				class="flex justify-between gap-1 rounded-lg bg-gray-800 p-4 text-sm font-bold text-white hover:bg-gray-900"
			>
				PV
				<span
					class="rounded-2xl bg-blue-100 px-2 py-1 text-xs font-bold text-cyan-800"
				>6</span
				>
			</button>
		</li>
	</ul>
</template>
