<script setup lang="ts">
import Card from '@/shared/ui/kit/Card.vue'
import IconCheck from '../icons/IconCheck.vue'

defineProps<{
	item: {
		id: number
		name: string
	}
	disabled?: boolean
	active?: boolean
}>()
defineOptions({ inheritAttrs: false })
</script>

<template>
	<Card
		secondary
		:class="[
			'the-item',
			{
				'--on': $attrs.onClick,
				'--disabled': disabled,
				'--active': active,
			},
		]"
		v-bind="$attrs"
	>
		<div class="the-item--body">
			<span>
				{{ item.name }}
			</span>

			<IconCheck
				v-if="active"
				class="the-item--icon"
			/>
		</div>
	</Card>
</template>

<style scoped lang="scss">
.the-item {
	&.--on {
		cursor: pointer;
	}
	&.--disabled:not(.--active) {
		cursor: not-allowed;
	}

	&--body {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	&--icon {
		width: 1rem;
		height: 1rem;
		color: var(--color-success);
	}
}
</style>
