import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { updatePricingPlan, deletePricingPlan } from '@/actions/pricing';

type RouteContext = {
  params: Promise<{ id: string }>;
};

async function requireAuth() {
  const session = await getSession();
  if (!session?.user) {
    return null;
  }
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
    const plan = await updatePricingPlan(Number(id), payload);
    return NextResponse.json(plan);
  } catch (error) {
    return NextResponse.json({ error: 'Unable to update pricing plan' }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, context: RouteContext) {
  const auth = await requireAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    await deletePricingPlan(Number(id));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to delete pricing plan' }, { status: 500 });
  }
}
