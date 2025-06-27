import { randomDelay } from '@/shared/helpers/delay.js'
import { errorBoundary } from '@/shared/helpers/service-error-boundary.js'
import { IRight } from './tasks.schema.js'

export const getRights = errorBoundary(async (): Promise<IRight[]> => {
	await randomDelay()
	return [
		{
			id: 11,
			name: 'Jacket 1',
		},
		{
			id: 12,
			name: 'Jacket 2',
		},
		{
			id: 13,
			name: 'Jacket 3',
		},
		{
			id: 14,
			name: 'Jacket 4',
		},
		{
			id: 15,
			name: 'Hoodie 1',
		},
		{
			id: 16,
			name: 'Hoodie 2',
		},
		{
			id: 17,
			name: 'Hoodie 3',
		},
		{
			id: 18,
			name: 'Hoodie 4',
		},
	]
})
