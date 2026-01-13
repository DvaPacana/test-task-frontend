/**
 * 
 * Static file dynamic import
 * Static file should provide default export, created in src/static directory and name should match "*.static.ts" template
 * 
 * Example:
 * ```ts
 * // src/static/data.static.ts
 * export default {
 *     foo: 'bar'
 * } as const
 * ```
 * 
 * @param path string
 * @returns 
 */
export const useStatic = async <T = unknown>(path: string): Promise<T> => await new Promise<T>(async (resolve) => { try {
    const collection = import.meta.glob(`../static/*.static.ts`)
    const response = collection[`../static/${path}.static.ts`]
    if (!response) throw new RangeError('Entity not found')
    const data = (await response() as { default: T }).default
    resolve(data)
} catch (e) { console.error(e) }})