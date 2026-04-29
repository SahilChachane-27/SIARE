import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(_req: NextRequest) {
  const tiers = await prisma.membershipTier.findMany({
    orderBy: { order: 'asc' }
  });

  return NextResponse.json(tiers);
}
