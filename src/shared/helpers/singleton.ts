const mapper = new WeakMap()

export const singleton =
	(target: Function) =>
	(...props: any[]) => {
		if (!mapper.has(target)) {
			mapper.set(target, target.apply(null, props))
		}
		return mapper.get(target)
	}
