import { allLicenses } from './allLicenses'
import { NextResponse } from 'next/server'

export function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const query = searchParams.get('id')
  let currentLicenses = allLicenses
  if (query) {
    currentLicenses = allLicenses.filter((item) => item.id.toString() === query)
  }
  return new NextResponse(JSON.stringify(currentLicenses), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  })
}
