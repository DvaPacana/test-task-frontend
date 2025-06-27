export const delay = (ms: number = 100) => new Promise((resolve) => setTimeout(resolve, ms))

export const randomDelay = (minDelay: number = 50, maxDelay: number = 500) =>
	delay(minDelay + (maxDelay - minDelay) * Math.random())
