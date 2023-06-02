import { NextResponse } from 'next/server'
import { allClients } from './allClients'

export function GET(req: Request) {
  return new NextResponse(JSON.stringify(allClients), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  })
}
