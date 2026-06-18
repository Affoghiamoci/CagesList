import { NextResponse } from 'next/server';
import { validateApiKey } from '@/lib/tmdb';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
};

export async function GET(req: Request) {
  const url = new URL(req.url);
  const apiKey = (url.searchParams.get('key') || '').trim();

  if (!apiKey) return NextResponse.json({ valid: false }, { headers: CORS });

  try {
    const valid = await validateApiKey(apiKey);
    return NextResponse.json({ valid }, { headers: CORS });
  } catch (err) {
    return NextResponse.json({ valid: false }, { headers: CORS });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: CORS });
}
