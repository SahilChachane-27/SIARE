import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const featured = req.nextUrl.searchParams.get('featured') === 'true';

  const journals = await prisma.journal.findMany({
    where: featured ? { isFeatured: true } : undefined,
    orderBy: { createdAt: 'desc' }
  });

  return NextResponse.json(journals);
}
