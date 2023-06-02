export const getAllPersons = async () => {
  const response = await fetch(`${process.env.API}/api/persons`)
  if (!response.ok) throw new Error('Unable to fetch persons')
  return response.json()
}
