import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get('type');
  const featured = req.nextUrl.searchParams.get('featured') === 'true';

  const where: any = {};
  if (type) where.type = type;
  if (featured) where.isFeatured = true;

  const events = await prisma.event.findMany({
    where: Object.keys(where).length ? where : undefined,
    orderBy: { order: 'asc' }
  });

  return NextResponse.json(events);
}
