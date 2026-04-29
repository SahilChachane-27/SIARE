import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { updateMembershipTier, deleteMembershipTier } from '@/actions/membership-tiers';

type RouteContext = {
  params: Promise<{ id: string }>;
};

async function requireAuth() {
  const session = await getSession();
  if (!session?.user) return null;
  return session;
}

export async function PUT(req: NextRequest, context: RouteContext) {
  const auth = await requireAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await context.params;
  const payload = await req.json();
  try {
    const tier = await updateMembershipTier(Number(id), payload);
    return NextResponse.json(tier);
  } catch (error) {
    return NextResponse.json({ error: 'Unable to update membership tier' }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, context: RouteContext) {
  const auth = await requireAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    await deleteMembershipTier(Number(id));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to delete membership tier' }, { status: 500 });
  }
}
