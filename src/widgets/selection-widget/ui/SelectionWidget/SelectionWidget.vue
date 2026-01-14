<script setup lang="ts">
import { ref } from 'vue'
import { MultipleSelection, SingleSelection } from '@/features/selection'
import { multipleItems } from '../../const/multiple-mock.ts'
import { singleItems } from '../../const/single-mock.ts'
import type { SelectedState } from '../../model/selection-widget.types.ts'
import { Panel } from '@/shared/components'
import SelectionMultipleSummary from '../SelectionWidgetSummaryMultiple/SelectionMultipleSummary.vue'
import SelectionSingleSummary from '../SelectionWidgetSummarySingle/SelectionSingleSummary.vue'

const selected = ref<SelectedState>({
  multiple: [],
  single: null,
})
</script>

<template>
  <section class="widget">
    <div class="widget__summary">
      <Panel variant="primary">
        <SelectionMultipleSummary :items="selected.multiple" :total-count="multipleItems.length" />
      </Panel>
      <Panel variant="secondary">
        <SelectionSingleSummary :name="selected.single" />
      </Panel>
    </div>

    <div class="widget__choice">
      <Panel variant="primary">
        <MultipleSelection
          :items="multipleItems"
          :max-selected-count="6"
          v-model="selected.multiple"
        />
      </Panel>

      <Panel variant="secondary">
        <SingleSelection :items="singleItems" v-model="selected.single" />
      </Panel>
    </div>
  </section>
</template>

<style scoped>
@import 'SelectionWidget.style.css';
</style>
