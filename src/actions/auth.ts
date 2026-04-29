'use server';

import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { loginSession, logoutSession } from '@/lib/auth';

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  try {
    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return { error: 'Invalid credentials' };
    }

    const isValidPassword = await bcrypt.compare(password, admin.password);

    if (!isValidPassword) {
      return { error: 'Invalid credentials' };
    }

    // Set the session cookie
    await loginSession(admin.id, admin.email);

    return { success: true };
  } catch (error) {
    console.error('Login error:', error);
    return { error: 'An error occurred during authentication' };
  }
}

export async function logoutAction() {
  await logoutSession();
  return { success: true };
}
