export const getAllLicenses = async () => {
  const response = await fetch(`${process.env.API}/api/licenses`)
  if (!response.ok) throw new Error('Unable to fetch licenses...')
  return response.json()
}
