import { NextRequest, NextResponse } from 'next/server';
import { createInquiry } from '@/actions/inquiries';

export async function POST(req: NextRequest) {
  const payload = await req.json();

  try {
    const inquiry = await createInquiry(payload);
    return NextResponse.json(inquiry);
  } catch (error: any) {
    console.error('Inquiry submission failed:', error);
    return NextResponse.json({ error: error?.message || 'Unable to submit inquiry' }, { status: 500 });
  }
}
