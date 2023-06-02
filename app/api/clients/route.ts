import { NextResponse } from 'next/server'
import { allClients } from './allClients'

export function GET(req: Request) {
  return NextResponse.json(allClients)
}
