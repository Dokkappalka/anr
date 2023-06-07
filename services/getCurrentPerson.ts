export const getCurrentPerson = async (email: string) => {
  const response = await fetch(
    `${process.env.API}/api/persons?email=${email}`,
    { next: { revalidate: 0 } }
  )
  if (!response.ok) throw new Error('Unable to fetch person')
  return response.json()
}
