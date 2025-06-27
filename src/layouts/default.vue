<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
import ThemeButton from '@/shared/ui/kit/theme/ThemeButton.vue'
</script>

<template>
	<div class="laoyut">
		<header class="header">
			<div class="container">
				<div class="header--content">
					<IconLogo class="header--logo" />

					<ThemeButton />
				</div>
			</div>
		</header>

		<div class="main">
			<main class="main--body container">
				<RouterView />
			</main>
		</div>

		<footer class="footer">
			<div class="container">
				<span>Какая-то информация @2025</span>
			</div>
		</footer>
	</div>
</template>

<style scoped lang="scss">
@use '@styles/utils';

.laoyut {
	height: 100dvh;
	display: grid;
	grid-template-rows: max-content 1fr max-content;
}

.header {
	position: sticky;
	top: 0;

	background: var(--color-bg);

	&--content {
		padding: 1rem;

		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.25rem;
	}

	&--logo {
		height: 3rem;
	}
}

.main {
	height: 100%;
	width: 100%;
	overflow-y: auto;
	background: var(--color-bg-200);

	&--body {
		height: 100%;
	}
}

.footer {
	@include utils.font('mark');

	position: sticky;
	bottom: 0;

	padding: 1rem 0;
	background: var(--color-bg);
}
</style>
