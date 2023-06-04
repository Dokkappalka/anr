export const getCurrentNew = async (id: number) => {
  const response = await fetch(`${process.env.API}/api/news?id=${id}`)
  if (!response.ok) throw new Error('Unable to fetch post...')
  return response.json()
}
