import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { getPricingPlans, createPricingPlan } from '@/actions/pricing';

async function requireAuth() {
  const session = await getSession();
  if (!session?.user) {
    return null;
  }
  return session;
}

export async function GET(_req: NextRequest) {
  const plans = await getPricingPlans();
  return NextResponse.json(plans);
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const payload = await req.json();
  try {
    const plan = await createPricingPlan(payload);
    return NextResponse.json(plan);
  } catch (error) {
    return NextResponse.json({ error: 'Unable to create pricing plan' }, { status: 500 });
  }
}
