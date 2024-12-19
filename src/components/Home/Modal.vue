<script setup lang="ts">
import { Component as VueComponent } from 'vue'

defineProps<{
	isVisible: boolean
	modalContent: VueComponent
	attrs?: { [key: string]: any }
}>()
</script>

<style>
.modal-container {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: flex-end;
}

@media (min-width: 1024px) {
	.modal-container {
		align-items: center;
	}
}

.modal-overlay {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.6);
	z-index: -1;
}

.v-enter-active {
	transition: transform 600ms cubic-bezier(0.07, 1.28, 0.5, 1);
}

.v-leave-active {
	transition: transform 600ms linear;
}

.v-enter-from {
	transform: translate(0, 100%);
}

.v-leave-to {
	transform: translate(0, 0);
}

html:has(#modal-container[data-active='true']) {
	overflow: hidden;
}
</style>

<template>
	<div
		id="modal-container"
		v-show="isVisible"
		class="modal-container z-50 overflow-y-auto"
		:data-active="isVisible"
	>
		<div class="modal-overlay" @click.stop="$emit('closeEvent')"></div>
		<Transition>
			<component class="m-auto py-4" :is="modalContent" v-bind="attrs">
				<template #after:description>
					<slot name="after:description" />
				</template>
			</component>
		</Transition>
	</div>
</template>
