import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { getEvents, createEvent } from '@/actions/events';

async function requireAuth() {
  const session = await getSession();
  if (!session?.user) {
    return null;
  }
  return session;
}

export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get('type');
  const events = await getEvents(type || undefined);
  return NextResponse.json(events);
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const payload = await req.json();
  try {
    const event = await createEvent(payload);
    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json({ error: 'Unable to create event' }, { status: 500 });
  }
}
