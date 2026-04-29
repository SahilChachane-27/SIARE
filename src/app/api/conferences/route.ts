import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const featured = req.nextUrl.searchParams.get('featured') === 'true';

  const conferences = await prisma.conference.findMany({
    where: featured ? { isFeatured: true } : undefined,
    orderBy: { order: 'asc' }
  });

  return NextResponse.json(conferences);
}
