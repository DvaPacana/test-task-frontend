import type { InjectionKey } from 'vue'
import type { SelectionState } from './../model/selection.types'

export const PROVIDE_SELECTION_STATE = Symbol() as InjectionKey<SelectionState>
