export const random = () => {
	return Math.round(Math.random() * 10 ** 9)
}

let id = 1
export const useID = () => {
	return id++
}
export const useStringID = () => {
	return String(id++)
}
