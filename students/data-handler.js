export async function json(path, error) {
    const response = await fetch(path)
    //if (!response.ok && error)
    //    throw new Error(`${response.status}`)
    // sadly, there won't be errors...
    const data = await response.json()
    return data
}
export async function url() {
    const dict = new URL('access.json', import.meta.url)
    const response = await fetch(dict)
    const data = await response.json()
    return data
}