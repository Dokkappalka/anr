export const getCurrentLicense = async (id: number) => {
  const response = await fetch(`${process.env.API}/api/licenses?id=${id}`, {
    next: { revalidate: 0 },
  })
  if (!response.ok) throw new Error('Unable to fetch license...')
  return response.json()
}
