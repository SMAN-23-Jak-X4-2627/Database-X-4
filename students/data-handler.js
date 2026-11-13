export async function loadData(id) {
    const path = `data/${id}.json`
    const response = await fetch(path)
    if (!response.ok) {
        throw new Error(`it broken ${response.status}`);
    }
    const data = await response.json()
    return data
}
export async function json(path) {
    const response = await fetch(path)
    if (!response.ok) {
        throw new Error(`${response.status}`)
    }
    const data = await response.json()
    return data
}
export async function url() {
    const dict = new URL('access.json', import.meta.url)
    const response = await fetch(dict)
    if (!response.ok) {
        throw new Error(` it broke ${response.status}`)
    } //fix this shi
    const data = await response.json()
    return data
}