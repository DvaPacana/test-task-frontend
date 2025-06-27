import { IServiceResponse } from '@/services/types.js'
import { isString } from './types.js'

export const errorBoundary =
	(service: (...args: any[]) => Promise<any>): any | IServiceResponse =>
	(...args: any[]) => {
		try {
			return service.apply(null, args)
		} catch (e: unknown) {
			if (!isString(e))
				return {
					message: 'Неизвестный тип ошибки',
					code: 404,
				}

			return {
				message: e,
				code: 404,
			}
		}
	}
