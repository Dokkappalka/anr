import { allNews } from './allNews'
import { NextResponse } from 'next/server'

export function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const query = searchParams.get('id')
  let currentPersons = allNews
  if (query) {
    currentPersons = allNews.filter((item) => item.id.toString() === query)
  }

  return new NextResponse(JSON.stringify(currentPersons), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  })
}
