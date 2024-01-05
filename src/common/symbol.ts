import { InjectionKey } from 'vue'

/**
 * Whether the current theme is dark
 */
export const IS_DARK = Symbol('IS_DARK') as InjectionKey<ComputedRef<boolean>>

/**
 * Event: focus editor
 */
export const EVENT_FOCUS_EDITOR = Symbol('EVENT_FOCUS_EDITOR')
