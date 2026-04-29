import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { getMembershipTiers, createMembershipTier } from '@/actions/membership-tiers';

async function requireAuth() {
  const session = await getSession();
  if (!session?.user) return null;
  return session;
}

export async function GET() {
  const tiers = await getMembershipTiers();
  return NextResponse.json(tiers);
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const payload = await req.json();
  try {
    const tier = await createMembershipTier(payload);
    return NextResponse.json(tier);
  } catch (error) {
    return NextResponse.json({ error: 'Unable to create membership tier' }, { status: 500 });
  }
}
