export const getAllNews = async () => {
  const response = await fetch(`${process.env.API}/api/news`)
  if (!response.ok) throw new Error('Unable to fetch news...')
  return response.json()
}
