export const getUserNotes = async (user) => {
  const res = await fetch(`http://localhost:5000/api/v1/notes/1`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}