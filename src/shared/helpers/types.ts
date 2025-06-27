export const typeIs = (target: unknown, type: string) =>
	Object.prototype.toString.call(target).split(' ')[1].toLowerCase().includes(type)

export const isNullable = (target: unknown) =>
	isNan(target) || isUndefined(target) || isNull(target)

export const isObject = (target: unknown) => typeIs(target, 'object')
export const isArray = (target: unknown) => typeIs(target, 'array')
export const isNumber = (target: unknown) => typeof target === 'number' && !isNan(target)
export const isString = (target: unknown) => typeof target === 'string'
export const isFunction = (target: unknown) => typeof target === 'function'
export const isUndefined = (target: unknown) => target === undefined
export const isNull = (target: unknown) => target === null
export const isNan = (target: unknown) => target !== target

export const isMergeable = (...args: unknown[]) => isObject(args[0]) || isArray(args[0])
