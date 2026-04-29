import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { getSession } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getSession();
    if (!session?.user) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const email = 'admin@siare.org';
    const plainPassword = 'password123';
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    await prisma.admin.upsert({
      where: { email },
      update: {},
      create: {
        email,
        password: hashedPassword,
        name: 'Super Admin',
        role: 'superadmin',
      },
    });

    return NextResponse.json({ success: true, email, message: 'Seeded successfully' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
