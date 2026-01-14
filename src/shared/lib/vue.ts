import { inject, type InjectionKey } from 'vue'

export const injectRequired = <T>(key: InjectionKey<T>): T => {
    const resolved = inject(key)
    if (!resolved) {
        throw new Error('Injection is missing')
    }
    return resolved
}
