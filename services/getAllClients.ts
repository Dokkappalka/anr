export const getAllClients = async () => {
  const response = await fetch(`${process.env.API}/api/clients`)
  if (!response.ok) throw new Error('Unable to fetch clients...')
  return response.json()
}
