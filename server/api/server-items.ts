import { readFile } from 'fs/promises'
import { join } from 'path'
import { Skin, Response } from '~/types'

export default defineEventHandler<Promise<Response.ApiResponse<Skin.Item[]>>>(async () => {
  try {
    const filePath = join(process.cwd(), 'public', 'serverItemsData.json')
    const data = JSON.parse(await readFile(filePath, 'utf8'))
    return { success: true, data }
  } catch (error) {
    return { success: false, error: (error as Error).message }
  }
})
