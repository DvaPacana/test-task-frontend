export function mockApi<T>(payload: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(payload)
    }, 500)
  })
}
